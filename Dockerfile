# Usa la imagen base oficial de Bun (versión ligera)
FROM oven/bun:alpine AS base

# ==========================================
# 1. Fase de Dependencias
# ==========================================
FROM base AS deps
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias.
# Esto aprovecha el caché de Docker si no han cambiado las dependencias.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ==========================================
# 2. Fase de Construcción (Build)
# ==========================================
FROM base AS builder
WORKDIR /app

# Copia los node_modules de la fase anterior
COPY --from=deps /app/node_modules ./node_modules
# Copia el resto del código fuente
COPY . .

# Desactiva la telemetría de Next.js durante la construcción
ENV NEXT_TELEMETRY_DISABLED=1

# Construye la aplicación optimizada para producción
RUN bun run build

# ==========================================
# 3. Fase de Ejecución (Runner - Producción)
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Configuración de seguridad: ejecutar como usuario no root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia los archivos públicos (assets)
COPY --from=builder /app/public ./public

# Configura automáticamente los permisos para la carpeta cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Gracias al modo 'standalone' configurado en next.config.ts,
# Next.js reduce drásticamente el tamaño copiando solo los módulos necesarios.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambia al usuario sin privilegios
USER nextjs

# Expone el puerto de la aplicación
EXPOSE 3000

# Inicia el servidor optimizado con Bun
CMD ["bun", "server.js"]
