export default function About() {
  return (
    <>
      <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-brand-navy/10 bg-white" >
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono">
            <span>01</span>
            <span className="h-px w-6 bg-brand-blue/40"></span>
            <span>Nosotros</span>
          </div>
          <h2 className="mt-8 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-brand-navy">
            Un ecosistema de proyectos, no un producto.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            Nexora Group desarrolla y respalda proyectos digitales orientados a resolver necesidades reales. Cada marca del grupo responde a un problema específico, pero todas comparten una misma filosofía: crear productos útiles, bien diseñados y pensados para crecer junto a sus usuarios.
          </p>
          <p className="text-lg text-brand-navy leading-relaxed font-medium">
            Nuestro objetivo es construir un ecosistema donde la innovación y la calidad sean el punto de partida de cada proyecto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-brand-navy/10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Sector</div>
              <p className="text-sm text-brand-navy/70 leading-relaxed">Holding tecnológico multi-marca.</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Enfoque</div>
              <p className="text-sm text-brand-navy/70 leading-relaxed">Producto, ingeniería y diseño con visión de largo plazo.</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Método</div>
              <p className="text-sm text-brand-navy/70 leading-relaxed">Construir, medir, respaldar, escalar.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="bg-[#F7F8FA] px-6 md:px-12 lg:px-24 py-24 md:py-32 border-b border-brand-navy/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono">
              <span>02</span>
              <span className="h-px w-6 bg-brand-blue/40"></span>
              <span>Propósito · Misión · Visión</span>
            </div>
            <h3 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter text-brand-navy">Nuestro norte.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy border border-brand-navy/10">
            <article className="bg-white p-10 md:p-12 group hover:bg-brand-navy hover:text-white transition-colors duration-300">
              <div className="flex items-center justify-between mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue group-hover:text-brand-sky">01 / Propósito</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 text-brand-navy/30 group-hover:text-white transition-colors" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-white transition-colors">Construir soluciones digitales que ayuden a personas y empresas a resolver problemas reales mediante tecnología, diseño e innovación.</p>
            </article>
            <article className="bg-white p-10 md:p-12 group hover:bg-brand-navy hover:text-white transition-colors duration-300">
              <div className="flex items-center justify-between mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue group-hover:text-brand-sky">02 / Misión</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 text-brand-navy/30 group-hover:text-white transition-colors" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-white transition-colors">Crear, desarrollar y respaldar proyectos tecnológicos que aporten valor, mejoren experiencias y generen un impacto positivo, con compromiso a la calidad y la mejora continua.</p>
            </article>
            <article className="bg-white p-10 md:p-12 group hover:bg-brand-navy hover:text-white transition-colors duration-300">
              <div className="flex items-center justify-between mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue group-hover:text-brand-sky">03 / Visión</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 text-brand-navy/30 group-hover:text-white transition-colors" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-white transition-colors">Consolidar un ecosistema de proyectos digitales reconocidos por su calidad, innovación y utilidad, creciendo de manera sostenible con relaciones de confianza.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
