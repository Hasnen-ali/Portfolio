import useScrollProgress from './hooks/useScrollProgress';
import useActiveSection from './hooks/useActiveSection';
import useTheme from './hooks/useTheme';
import { NAV_LINKS } from './utils/data';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const progress = useScrollProgress();
  const active = useActiveSection(NAV_LINKS);
  const [dark, setDark] = useTheme();

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <Navbar dark={dark} setDark={setDark} active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
