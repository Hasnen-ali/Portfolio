import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10 text-center">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://github.com/Hasnen-ali" target="_blank" rel="noreferrer"
          className="p-2 glass rounded-lg text-[var(--muted)] hover:text-[#6c63ff] transition">
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/hasnen-ali-2aba401b9/" target="_blank" rel="noreferrer"
          className="p-2 glass rounded-lg text-[var(--muted)] hover:text-[#6c63ff] transition">
          <FaLinkedin size={18} />
        </a>
      </div>
      <p className="text-sm text-[var(--muted)] flex items-center justify-center gap-1">
        Built with <FaHeart className="text-[#f72585]" size={12} /> by{' '}
        <span className="gradient-text font-semibold">Hasnen Ali</span>
      </p>
    </footer>
  );
}
