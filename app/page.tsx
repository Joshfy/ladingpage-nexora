import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Values from "@/components/Values";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Philosophy />
        <Values />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
