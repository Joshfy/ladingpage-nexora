import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact" className="bg-brand-navy text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-10 skew-x-12 translate-x-20 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }}></div>
      <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-2xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-sky mb-6">07 / Contacto</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.02] mb-6">Construyamos algo con visión de largo plazo.</h2>
          <p className="text-white/60 text-lg max-w-xl">Conversemos sobre cómo tu proyecto puede sumarse al ecosistema Nexora Group, o cómo podemos construir algo nuevo juntos.</p>
        </div>
        <a href="mailto:josuedadoes@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-sky text-white font-bold tracking-wider uppercase text-sm hover:bg-white hover:text-brand-navy transition-colors whitespace-nowrap">
          Contactar dirección 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2 flex items-center gap-3">
          <span className="font-bold tracking-tight text-white text-xl">NEXORA GROUP</span>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Dirección</div>
          <a href="mailto:josuedadoes@gmail.com" className="text-white/80 hover:text-white transition-colors">josuedadoes@gmail.com</a>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Ecosistema</div>
          <p className="text-white/80">Innovación con propósito</p>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 gap-3">
        <div>© 2026 Nexora Group Holding</div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
          <Link href="#" className="hover:text-white transition-colors">Gobierno corporativo</Link>
          <Link href="#about" className="hover:text-white transition-colors">Grupo</Link>
        </div>
      </div>
    </section>
  );
}
