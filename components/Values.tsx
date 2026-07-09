export default function Values() {
  const values = [
    { title: "Innovación con propósito", description: "No innovamos por novedad; innovamos para resolver cuellos de botella reales en personas y organizaciones." },
    { title: "Calidad en cada producto", description: "Cada línea de código y cada decisión estratégica se ejecuta con precisión de ingeniería." },
    { title: "Transparencia", description: "Comunicación clara y honesta con socios, equipos y usuarios. Sin letra chica." },
    { title: "Compromiso", description: "Responsables con cada proyecto, cada release y cada persona que confía en nosotros." },
    { title: "Mejora continua", description: "Iteramos, medimos y aprendemos. El producto de hoy es la base del de mañana." },
    { title: "Diseño centrado en personas", description: "Interfaces simples, útiles y accesibles. La complejidad la absorbemos nosotros." },
    { title: "Colaboración", description: "Construimos junto a equipos, clientes y usuarios. El ecosistema pesa más que el ego." },
    { title: "Responsabilidad", description: "Tecnología con impacto positivo, sostenible y consciente de su entorno." },
    { title: "Adaptabilidad", description: "Evolucionamos con el mercado, el stack y las necesidades reales de cada industria." }
  ];

  const personality = [
    "Profesionalismo", "Innovación", "Confianza", 
    "Simplicidad", "Organización", "Visión", 
    "Cercanía", "Curiosidad", "Calidad"
  ];

  return (
    <>
      <section id="values" className="bg-[#F7F8FA] px-6 md:px-12 lg:px-24 py-24 md:py-32 border-b border-brand-navy/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono">
                <span>04</span>
                <span className="h-px w-6 bg-brand-blue/40"></span>
                <span>Valores</span>
              </div>
              <h3 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter text-brand-navy">
                Principios que guían cada proyecto.
              </h3>
            </div>
            <p className="text-brand-navy/50 font-mono text-xs italic">Ref. NX-VAL-2026</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 group hover:bg-brand-navy transition-colors duration-300">
                <div className="font-mono text-[11px] text-brand-blue mb-8 group-hover:text-brand-sky transition-colors text-brand-navy">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold mb-3 tracking-tight group-hover:text-white transition-colors text-brand-navy">
                  {value.title}
                </h4>
                <p className="text-sm text-brand-navy/60 leading-relaxed group-hover:text-white/70 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-b border-brand-navy/10 bg-white">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono">
              <span>05</span>
              <span className="h-px w-6 bg-brand-blue/40"></span>
              <span>Personalidad</span>
            </div>
            <h3 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-navy">
              Así se siente la marca.
            </h3>
            <p className="mt-6 text-brand-navy/60 leading-relaxed max-w-md">
              Nexora Group transmite una imagen coherente en cada punto de contacto: de la interfaz al mensaje, del producto a la relación.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
              {personality.map((trait, index) => (
                <div key={index} className="bg-white px-6 py-8 flex items-center justify-between hover:bg-brand-navy hover:text-white transition-colors group">
                  <span className="font-mono text-[10px] text-brand-blue group-hover:text-brand-sky">
                    /0{index + 1}
                  </span>
                  <span className="text-base font-semibold tracking-tight text-brand-navy transition-colors group-hover:text-white">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
