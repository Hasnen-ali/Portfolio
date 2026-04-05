import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    company: 'Ethical Intelligence Solutions LLP',
    location: 'Bhopal, MP',
    role: 'Software Developer',
    period: 'November 2024 – November 2025',
    icon: '💼',
    projects: [
      {
        title: 'Techno Hub Coaching Management System',
        desc: 'Developed a full-stack web application for managing student enrolment, course scheduling, and faculty operations. Implemented secure authentication with Spring Security and dynamic React.js dashboards. Used Spring Boot with MySQL and Razor Pay Payment API.',
      },
      {
        title: 'School Management System',
        desc: 'Designed optimized database architecture and developed the front-end using React.js, JavaScript, Bootstrap, and back-end with Node.js, Express.js, MongoDB for a school managing 1,000+ students.',
      },
      {
        title: 'Astro: Material Testing Platform',
        desc: 'Designed and implemented the front-end for a material testing platform using React.js and Tailwind CSS, integrated with Java/MySQL backend, streamlining testing of materials like Aluminium, Stainless Steel, and AlSi10Mg for industrial clients.',
      },
    ],
  },
  {
    company: 'Airport Authority of India',
    location: 'Bhopal, MP',
    role: 'Diploma Apprenticeship Trainee',
    period: 'Mar 2021 – Mar 2022',
    icon: '✈️',
    projects: [
      {
        title: 'Transformer Maintenance & Testing',
        desc: 'Maintenance and testing of (500kVA to 1600kVA) Transformers — Dielectric Testing, Winding Resistance Test, Transformer Turns Ratio Test, Oil Analysis, Tightening Connections, Cooling System Maintenance, etc.',
      },
      {
        title: 'Generator Maintenance & Testing',
        desc: 'Maintenance and Testing of Generator (320kVA to 720kVA) — Voltage Regulation Test, Frequency Testing, Insulation Resistance Test, Fuel System Testing, Regular Oil Changes, etc.',
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2">Career</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#f72585] to-transparent" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map(({ company, location, role, period, icon, projects }, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 pl-16 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-4 w-6 h-6 rounded-full bg-[#6c63ff] flex items-center justify-center text-sm shadow-lg shadow-[#6c63ff]/40">
                {icon}
              </div>

              <div className="glass rounded-2xl p-6 flex-1 hover:border-[#6c63ff]/40 transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-[#6c63ff] font-bold text-base">
                      {company}
                      <span className="text-[var(--muted)] font-normal text-sm">, {location}</span>
                    </p>
                    <h3 className="font-bold text-lg text-[var(--text)]">{role}</h3>
                  </div>
                  <span className="text-xs text-[var(--muted)] glass px-3 py-1 rounded-full shrink-0">{period}</span>
                </div>

                {/* Project bullets */}
                <ul className="mt-4 flex flex-col gap-3">
                  {projects.map(({ title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6c63ff] shrink-0" />
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        <span className="font-semibold text-[var(--text)]">{title}: </span>
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
