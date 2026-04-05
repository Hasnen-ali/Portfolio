import { useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { NAV_LINKS } from '../utils/data';

export default function Navbar({ dark, setDark, active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="gradient-text font-bold text-xl cursor-pointer" onClick={() => scrollTo('home')}>
          &lt;Hasnen /&gt;
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1">
          {NAV_LINKS.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-lg text-sm capitalize transition-all duration-200 ${
                  active === id
                    ? 'bg-[#6c63ff] text-white'
                    : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/10'
                }`}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-white/10 transition text-[var(--muted)] hover:text-[var(--text)]"
            aria-label="Toggle theme"
          >
            {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-[var(--muted)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass mt-2 rounded-2xl px-4 py-3 flex flex-col gap-1 md:hidden">
          {NAV_LINKS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left px-3 py-2 rounded-lg text-sm capitalize transition ${
                active === id ? 'bg-[#6c63ff] text-white' : 'text-[var(--muted)] hover:bg-white/10'
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
