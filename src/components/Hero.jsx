import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { TYPING_ROLES } from '../utils/data';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % TYPING_ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-24"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#6c63ff]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#f72585]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

        {/* LEFT — Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[var(--muted)] mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Hasnen Ali</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-[var(--muted)] mb-6 h-8"
          >
            <span className="text-[#6c63ff] font-semibold">{displayed}</span>
            <span className="animate-pulse text-[#f72585]">|</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--muted)] max-w-xl mb-10 leading-relaxed"
          >
            Experienced Full Stack Developer skilled in Java, Spring Boot, Node.js, React.js, and MongoDB.
            Built 10+ real-world projects with a focus on clean architecture and great UX.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-[#6c63ff]/30"
            >
              View Projects <HiArrowRight />
            </button>
            <a
              href="/Hasnen-Ali-Resume.pdf"
              download="Hasnen-Ali-Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--text)] font-semibold hover:scale-105 transition-all"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="https://github.com/Hasnen-ali"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--text)] font-semibold hover:scale-105 transition-all"
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-start gap-4"
          >
            {[
              { icon: <FaGithub size={22} />, href: 'https://github.com/Hasnen-ali', label: 'GitHub' },
              { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/hasnen-ali-2aba401b9/', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 glass rounded-xl text-[var(--muted)] hover:text-[#6c63ff] hover:scale-110 transition-all"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          {/* Glow ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6c63ff] to-[#f72585] blur-2xl opacity-40 scale-110" />
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6c63ff]/40 animate-spin" style={{ animationDuration: '12s' }} />
            {/* Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#6c63ff]/50 shadow-2xl shadow-[#6c63ff]/30">
              <img
                src="/hasnen.png"
                alt="Hasnen Ali"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--text)] whitespace-nowrap"
            >
              💻 Full Stack Developer
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--muted)] text-xs flex flex-col items-center gap-1"
      >
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6c63ff] to-transparent" />
      </motion.div>
    </section>
  );
}
