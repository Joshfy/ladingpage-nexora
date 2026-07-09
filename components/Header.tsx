import Link from "next/link";
import { LogoN } from "./LogoN";
export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-brand-navy/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5">
          <LogoN className="w-10 h-10" variant="color" />
          <span className="font-bold tracking-tight text-brand-navy">NEXORA</span>
          <span className="text-brand-gray-soft font-mono text-[11px] uppercase tracking-[0.2em]">Group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium text-brand-navy/70">
          <Link href="#about" className="hover:text-brand-navy transition-colors">Nosotros</Link>
          <Link href="#pillars" className="hover:text-brand-navy transition-colors">Norte</Link>
          <Link href="#philosophy" className="hover:text-brand-navy transition-colors">Filosofía</Link>
          <Link href="#values" className="hover:text-brand-navy transition-colors">Valores</Link>
          <Link href="#manifesto" className="hover:text-brand-navy transition-colors">Manifiesto</Link>
        </nav>
        <Link 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-brand-navy text-white px-4 py-2 text-[12px] font-semibold uppercase tracking-wider hover:bg-brand-blue transition-colors"
        >
          Contacto 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
