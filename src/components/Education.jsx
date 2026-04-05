import { motion } from 'framer-motion';
import { EDUCATION } from '../utils/data';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2">Academic</p>
        <h2 className="text-4xl md:text-5xl font-black">
          My <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATION.map(({ degree, institution, period, grade, icon }, i) => (
          <motion.div
            key={degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-2xl p-6 hover:border-[#6c63ff]/40 transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="font-bold text-[var(--text)] mb-1">{degree}</h3>
            <p className="text-[#6c63ff] text-sm font-semibold mb-1">{institution}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-[var(--muted)] glass px-3 py-1 rounded-full">{period}</span>
              <span className="text-xs font-semibold text-green-400">{grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
