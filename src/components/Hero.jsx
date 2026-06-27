
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import Button from './Button';
import { useState, useEffect } from 'react';


const roles = [
  "AI/ML Engineer 🤖",
  "Data Science Student 📊",
  "Software Developer 💻",
  "Problem Solver 🚀",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Nunito', sans-serif; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }

        /* ── Hero background: light vs dark ── */
        .hero-bg {
          background: linear-gradient(135deg, #FFF0F5 0%, #FEE0EE 40%, #fff5f8 70%, #ffffff 100%);
        }
        .dark .hero-bg {
          background: linear-gradient(135deg, #1a0a10 0%, #2d1520 40%, #1f0d17 70%, #140a0e 100%);
        }

        /* ── Blobs ── */
        .hero-blob-1 {
          background: radial-gradient(circle, #fecdd3 0%, #fee0ee 60%, transparent 100%);
        }
        .dark .hero-blob-1 {
          background: radial-gradient(circle, #4c1130 0%, #2d1520 60%, transparent 100%);
        }
        .hero-blob-2 {
          background: radial-gradient(circle, #fbcfe8 0%, #fee0ee 60%, transparent 100%);
        }
        .dark .hero-blob-2 {
          background: radial-gradient(circle, #3b0f24 0%, #1a0a10 60%, transparent 100%);
        }

        /* ── Animations ── */
        @keyframes floatBlob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(20px,-15px) scale(1.05); }
          66%      { transform: translate(-10px,10px) scale(0.97); }
        }
        @keyframes sparkle {
          0%,100% { opacity:0; transform:scale(0); }
          50%     { opacity:1; transform:scale(1); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes photoGlow {
          0%,100% { box-shadow: 0 0 30px 8px #fecdd3, 0 0 0 8px #fee0ee; }
          50%     { box-shadow: 0 0 50px 16px #fda4af, 0 0 0 8px #fecdd3; }
        }
        @keyframes photoGlowDark {
          0%,100% { box-shadow: 0 0 30px 8px #6b2140, 0 0 0 8px #4c1130; }
          50%     { box-shadow: 0 0 50px 16px #9d3a60, 0 0 0 8px #6b2140; }
        }

        .fade-up  { animation: fadeUp 0.7s ease both; }
        .delay-1  { animation-delay: 0.10s; }
        .delay-2  { animation-delay: 0.25s; }
        .delay-3  { animation-delay: 0.40s; }
        .delay-4  { animation-delay: 0.55s; }
        .delay-5  { animation-delay: 0.70s; }

        .blob   { animation: floatBlob 8s ease-in-out infinite; }
        .blob-2 { animation: floatBlob 10s ease-in-out infinite reverse; }
        .sp     { animation: sparkle  2s ease-in-out infinite; }

        .photo-glow      { animation: photoGlow     3s ease-in-out infinite; }
        .dark .photo-glow { animation: photoGlowDark 3s ease-in-out infinite; }
      `}</style>

      {/* ── Decorative blobs ── */}
      <div className="blob hero-blob-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none" />
      <div className="blob-2 hero-blob-2 absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none" />

      {/* ── Floating sparkles ── */}
      {[
        { t:'10%', l:'8%',  d:'0.0s' },
        { t:'20%', l:'90%', d:'0.7s' },
        { t:'70%', l:'5%',  d:'1.2s' },
        { t:'85%', l:'88%', d:'0.4s' },
        { t:'50%', l:'92%', d:'1.8s' },
      ].map((s, i) => (
        <div key={i} className="sp absolute pointer-events-none" style={{ top: s.t, left: s.l, animationDelay: s.d }}>
          <Sparkles size={16} className="text-rose-300 dark:text-rose-700" />
        </div>
      ))}

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="space-y-7 order-2 md:order-1">

            {/* Welcome badge */}
            {/* <div className="fade-up delay-1 inline-flex items-center gap-2 bg-white/70 dark:bg-rose-900/30 backdrop-blur-sm border border-pink-200 dark:border-rose-800/60 text-rose-500 dark:text-rose-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <Heart size={3} fill="currentColor" />
              Open to Internships & Opportunities
            </div> */}

            {/* Name */}
            <div className="fade-up delay-2 space-y-2">
              <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">Hey there! I'm</p>
              <h1
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {personalInfo.name}
                <span className="inline-block ml-2 text-4xl"></span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="fade-up delay-3 h-10 flex items-center">
              <span className="text-xl md:text-2xl font-semibold text-rose-500 dark:text-rose-400">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-rose-400 dark:bg-rose-500 ml-1 animate-pulse align-middle" />
              </span>
            </div>

            {/* About blurb */}
            <p className="fade-up delay-3 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I turn real-world problems into clean, data-driven products —
from intelligent backends to interfaces people actually enjoy using.
            </p>

            {/* Contact pills */}
            <div className="fade-up delay-4 flex flex-wrap gap-3 text-sm">
              {[
                { Icon: MapPin,  value: personalInfo.location,  href: null },
                { Icon: Mail,    value: personalInfo.email,     href: `mailto:${personalInfo.email}` },
                // { Icon: Phone,   value: personalInfo.phone,     href: `tel:${personalInfo.phone}` },
              ].map(({ Icon, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-1.5 bg-white/60 dark:bg-rose-900/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-pink-100 dark:border-rose-800/40 shadow-sm text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                    <Icon size={13} className="text-rose-400 dark:text-rose-500 flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                );
                return href
                  ? <a key={value} href={href}>{inner}</a>
                  : <div key={value}>{inner}</div>;
              })}
            </div>

            {/* CTA buttons */}
            <div className="fade-up delay-4 flex flex-wrap gap-4">
              <Button variant="primary" onClick={scrollToContact}>
                Get In Touch ✨
              </Button>
              <a
                href={personalInfo.resumeUrl}
                download="nancy_resume.pdf"
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 tracking-wide border-2 border-rose-400 text-rose-500 dark:text-rose-300 hover:bg-rose-400 hover:text-white dark:hover:bg-rose-500 dark:border-rose-400"
              >
                <Download size={16} className="inline mr-2" />
                Download Resume
              </a>

            </div>

            {/* Social icons */}
            <div className="fade-up delay-5 flex gap-3">
              {[
                { href: personalInfo.github,            Icon: Github,   label: 'GitHub' },
                { href: personalInfo.linkedin,           Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, Icon: Mail,     label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white/70 dark:bg-rose-900/20 backdrop-blur-sm border border-pink-100 dark:border-rose-800/40 rounded-xl text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-pink-300 dark:hover:border-rose-600 hover:bg-[#FEE0EE] dark:hover:bg-rose-900/40 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="order-1 md:order-2 flex justify-center fade-up delay-2">
            <div className="relative">
              {/* Outer spinning ring */}
              <div
                className="photo-glow relative rounded-full overflow-hidden border-4 border-white dark:border-rose-900/60"
                style={{ width: '340px', height: '340px' }}
              >
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-pink-200 dark:border-rose-800/50 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute -inset-6 rounded-full border border-pink-100 dark:border-rose-900/30 opacity-60" />
                <img
                  src="/logo_new.jpeg"
                  alt={`${personalInfo.name} portfolio photo`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#2d1520] border border-pink-100 dark:border-rose-800/50 rounded-2xl px-4 py-2 shadow-lg shadow-rose-100 dark:shadow-rose-900/30 flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Currently</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">B.Tech + BS IIT</p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-[#2d1520] border border-pink-100 dark:border-rose-800/50 rounded-2xl px-4 py-2 shadow-lg shadow-rose-100 dark:shadow-rose-900/30 flex items-center gap-2">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Passionate</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">AI/ML Builder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="p-3 rounded-full bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm border border-pink-100 dark:border-rose-800/40 shadow-md hover:shadow-lg hover:border-pink-200 dark:hover:border-rose-700 transition-all"
          >
            <ChevronDown size={26} className="text-rose-400 dark:text-rose-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;