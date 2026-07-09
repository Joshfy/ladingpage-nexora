import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center bg-white px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden border-b border-brand-navy/10">
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0b132b 1px, transparent 1px), linear-gradient(90deg, #0b132b 1px, transparent 1px)", backgroundSize: "48px 48px" }}></div>
      <div className="absolute top-24 left-6 md:left-12 lg:left-24 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-navy/40">N — 40.4168° · W — 03.7038°</div>
      <div className="absolute top-24 right-6 md:right-12 lg:right-24 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-navy/40 hidden md:block">Rev. NX / 2026</div>
      
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="max-w-5xl">
          <span className="inline-block py-1 px-3 mb-10 text-[10px] font-medium tracking-[0.25em] uppercase border border-brand-navy/20 text-brand-blue font-mono">Nexora Group / Holding Tecnológico</span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] mb-8 text-brand-navy">
            Diseñamos la <br/>
            <span className="text-brand-sky">infraestructura</span> <br/>
            digital del mañana.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-navy/60 max-w-2xl font-light leading-relaxed mb-12">
            Nexora Group es un holding tecnológico que crea, desarrolla y respalda proyectos digitales orientados a resolver necesidades reales mediante tecnología, diseño e innovación.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="inline-flex items-center gap-3 px-7 py-4 bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors">
              Trabajemos juntos 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="#about" className="inline-flex items-center gap-3 px-7 py-4 border border-brand-navy text-sm font-semibold hover:bg-brand-navy/5 transition-colors text-brand-navy">
              Conocer el grupo
            </Link>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-navy/10 border border-brand-navy/10">
            <div className="bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Enfoque</div>
              <div className="text-3xl font-bold tracking-tight">100%</div>
              <div className="mt-1 text-xs text-brand-navy/50">en calidad y detalle</div>
            </div>
            <div className="bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Iteración</div>
              <div className="text-3xl font-bold tracking-tight">∞</div>
              <div className="mt-1 text-xs text-brand-navy/50">mejora continua</div>
            </div>
            <div className="bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Modelo</div>
              <div className="text-3xl font-bold tracking-tight">1</div>
              <div className="mt-1 text-xs text-brand-navy/50">ecosistema integrado</div>
            </div>
            <div className="bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">Visión</div>
              <div className="text-3xl font-bold tracking-tight">LP</div>
              <div className="mt-1 text-xs text-brand-navy/50">largo plazo, sin atajos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
