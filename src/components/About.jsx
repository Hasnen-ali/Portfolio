import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '2+', label: 'Years Experience' },
  { value: '25+', label: 'APIs Developed' },
  { value: '5+', label: 'Tech Stacks' },
];

const highlights = [
  { icon: <FaCode size={20} />, title: 'Frontend Craft', desc: 'Building pixel-perfect UIs with React.js, Next.js, and Tailwind CSS.' },
  { icon: <FaServer size={20} />, title: 'Backend Power', desc: 'Scalable APIs with Spring Boot, Node.js, Express, and secure JWT auth.' },
  { icon: <FaBrain size={20} />, title: 'Problem Solver', desc: 'Analytical mindset with a passion for clean code and efficient solutions.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2 text-center">About Me</p>
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Who I <span className="gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left – text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--muted)] leading-relaxed mb-6 text-lg">
            I'm <span className="text-[var(--text)] font-semibold">Hasnen Ali</span>, a passionate Full Stack Web Developer
            with hands-on experience building real-world applications from scratch. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            My journey spans both frontend and backend — from crafting responsive UIs in React to designing robust
            microservices in Spring Boot. I've shipped 10+ production-grade projects and I'm always hungry to learn more.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 glass p-4 rounded-xl">
                <div className="p-2 bg-[#6c63ff]/20 rounded-lg text-[#6c63ff] shrink-0">{icon}</div>
                <div>
                  <p className="font-semibold text-[var(--text)]">{title}</p>
                  <p className="text-sm text-[var(--muted)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right – stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-[#6c63ff]/50 transition-all"
            >
              <p className="text-4xl font-black gradient-text mb-1">{value}</p>
              <p className="text-sm text-[var(--muted)]">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
