import Providers from "@/components/Providers";
import BootSequence from "@/components/BootSequence";
import TickerTape from "@/components/TickerTape";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Lessons from "@/components/Lessons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <BootSequence />
      <div className="grid-bg pointer-events-none fixed inset-0 -z-10" aria-hidden />
      <TickerTape />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Lessons />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
