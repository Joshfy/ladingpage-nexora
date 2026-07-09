export default function Philosophy() {
  return (
    <section id="philosophy" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-b border-brand-navy/10 bg-white">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono">
            <span>03</span>
            <span className="h-px w-6 bg-brand-blue/40"></span>
            <span>Filosofía</span>
          </div>
          <h3 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-navy">
            Construidos sobre <span className="text-brand-sky">precisión</span>.
          </h3>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-brand-navy/70 leading-relaxed">
          <p>
            Creemos que la tecnología tiene mayor impacto cuando resuelve problemas reales. Desarrollamos proyectos con visión de largo plazo, priorizando la experiencia del usuario, la mejora continua y la calidad en cada detalle.
          </p>
          <p className="text-brand-navy font-medium">
            Creemos en lo simple, útil y accesible. En construir sistemas más que funcionalidades sueltas.
          </p>
        </div>
      </div>
    </section>
  );
}
