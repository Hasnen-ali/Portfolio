import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const INFO = [
  { icon: <FaEnvelope />, label: 'Email', value: 'hasnen7354@gmail.com', href: 'mailto:hasnen7354@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '+91 9294803343', href: 'tel:+919294803343' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Hasnen-ali', href: 'https://github.com/Hasnen-ali' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/hasnen-ali', href: 'https://www.linkedin.com/in/hasnen-ali-2aba401b9/' },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with your EmailJS service/template/public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-[var(--muted)] mt-4 max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {INFO.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass p-4 rounded-xl hover:border-[#6c63ff]/40 transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-[#6c63ff]/20 rounded-xl text-[#6c63ff] group-hover:bg-[#6c63ff] group-hover:text-white transition-all">
                {icon}
              </div>
              <div>
                <p className="text-xs text-[var(--muted)]">{label}</p>
                <p className="text-sm font-semibold text-[var(--text)]">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--muted)]">Name</label>
              <input
                name="user_name"
                required
                placeholder="Your name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#6c63ff] transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--muted)]">Email</label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#6c63ff] transition"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[var(--muted)]">Subject</label>
            <input
              name="subject"
              required
              placeholder="What's this about?"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#6c63ff] transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[var(--muted)]">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#6c63ff] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-semibold transition hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FaPaperPlane size={14} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
