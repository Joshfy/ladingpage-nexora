export default function Manifesto() {
  return (
    <section id="manifesto" className="px-6 md:px-12 lg:px-24 py-32 md:py-40 flex flex-col items-center text-center border-b border-brand-navy/10 bg-white">
      <div className="max-w-4xl flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-blue font-mono w-full text-brand-navy">
          <span>06</span>
          <span className="h-px w-6 bg-brand-blue/40"></span>
          <span>Manifiesto</span>
        </div>
        <p className="mt-12 text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-navy">
          "En Nexora Group creemos que las mejores ideas nacen para resolver problemas reales. Construimos proyectos digitales que combinan tecnología, diseño y estrategia para crear experiencias <span className="font-bold text-brand-navy">útiles, simples y de calidad</span>."
        </p>
        <p className="mt-10 text-base md:text-lg text-brand-navy/60 max-w-2xl mx-auto leading-relaxed">
          Cada marca del grupo tiene un propósito propio, pero todas comparten un mismo compromiso: innovar con responsabilidad, mejorar continuamente y generar valor para las personas y empresas que confían en nosotros.
        </p>
        <div className="mt-14 w-16 h-[3px] bg-brand-navy mx-auto"></div>
      </div>
    </section>
  );
}
