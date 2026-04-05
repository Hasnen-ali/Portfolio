import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../utils/data';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="glass rounded-2xl overflow-hidden group hover:border-[#6c63ff]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ '--card-color': project.color }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://picsum.photos/seed/${project.title}/600/400`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#6c63ff] text-white rounded-lg text-sm font-semibold hover:bg-[#5a52e0] transition"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg text-sm font-semibold hover:bg-white/30 transition"
          >
            <FaGithub size={14} /> Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--text)] mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">{project.description}</p>

        {/* Features */}
        <ul className="mb-4 space-y-1">
          {project.features.map((f) => (
            <li key={f} className="text-xs text-[var(--muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6c63ff] shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6c63ff] hover:bg-[#5a52e0] text-white text-sm font-semibold transition hover:scale-105"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-[var(--text)] text-sm font-semibold transition hover:scale-105"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--muted)] mt-4 max-w-xl mx-auto">
          Real-world applications built with modern tech stacks, clean architecture, and production-ready code.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
