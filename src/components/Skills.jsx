import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5,
  SiSpringboot, SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMysql,
  SiDocker, SiGit, SiGithub, SiVercel,
  SiTypescript, SiPython, SiDart, SiBootstrap,
  SiHibernate, SiSwagger, SiPostman, SiAndroidstudio,
  SiIntellijidea, SiRender,
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaReact } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { MdSecurity } from 'react-icons/md';
import { DiMsqlServer } from 'react-icons/di';

const iconMap = {
  SiPython, SiTypescript, SiJavascript, SiHtml5, FaCss3Alt, SiDart, SiNodedotjs,
  FaJava, MdSecurity,
  SiMongodb, SiMysql,
  SiSpringboot, SiReact, FaReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiExpress, SiHibernate,
  SiDocker, SiGit, SiGithub, SiVercel, SiAndroidstudio, SiIntellijidea, VscCode, SiSwagger, SiPostman, SiRender,
  SiJsonwebtokens, DiMsqlServer,
};

const SKILLS = {
  Languages: [
    { name: 'Python',          icon: 'SiPython',      color: '#3776AB' },
    { name: 'Java',            icon: 'FaJava',        color: '#f89820' },
    { name: 'JavaScript',      icon: 'SiJavascript',  color: '#F7DF1E' },
    { name: 'TypeScript',      icon: 'SiTypescript',  color: '#3178C6' },
    { name: 'HTML',            icon: 'SiHtml5',       color: '#E34F26' },
    { name: 'CSS',             icon: 'FaCss3Alt',     color: '#1572B6' },
    { name: 'Dart',            icon: 'SiDart',        color: '#00B4AB' },
    { name: 'Node.JS',         icon: 'SiNodedotjs',   color: '#339933' },
    { name: 'Spring Security', icon: 'MdSecurity',    color: '#6DB33F' },
  ],
  'Frameworks / Libraries': [
    { name: 'Spring Boot',  icon: 'SiSpringboot',  color: '#6DB33F' },
    { name: 'React.JS',     icon: 'SiReact',       color: '#61DAFB' },
    { name: 'React Native', icon: 'FaReact',       color: '#61DAFB' },
    { name: 'Next.js',      icon: 'SiNextdotjs',   color: '#ffffff' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
    { name: 'Bootstrap',    icon: 'SiBootstrap',   color: '#7952B3' },
    { name: 'Express.JS',   icon: 'SiExpress',     color: '#ffffff' },
    { name: 'Hibernate',    icon: 'SiHibernate',   color: '#59666C' },
  ],
  Database: [
    { name: 'MySQL',   icon: 'SiMysql',   color: '#4479A1' },
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
  ],
  Tools: [
    { name: 'Git / GitHub',   icon: 'SiGithub',        color: '#ffffff' },
    { name: 'Android Studio', icon: 'SiAndroidstudio', color: '#3DDC84' },
    { name: 'IntelliJ Idea',  icon: 'SiIntellijidea',  color: '#FE315D' },
    { name: 'Vercel',         icon: 'SiVercel',        color: '#ffffff' },
    { name: 'Render',         icon: 'SiRender',        color: '#46E3B7' },
    { name: 'VS Code',        icon: 'VscCode',         color: '#007ACC' },
    { name: 'Maven',          icon: 'DiMsqlServer',    color: '#C71A36' },
    { name: 'Swagger',        icon: 'SiSwagger',       color: '#85EA2D' },
    { name: 'Postman',        icon: 'SiPostman',       color: '#FF6C37' },
    { name: 'Docker',         icon: 'SiDocker',        color: '#2496ED' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-black">
          My <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, skills], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-bold text-lg mb-5 text-[var(--text)]">{category}</h3>
            <div className="grid grid-cols-3 gap-3">
              {skills.map(({ name, icon, color }, i) => {
                const Icon = iconMap[icon];
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-default"
                  >
                    {Icon && <Icon size={28} style={{ color }} />}
                    <span className="text-xs text-[var(--muted)] text-center leading-tight">{name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
