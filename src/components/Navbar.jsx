import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/personalInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#1A0D12]/90 backdrop-blur-xl shadow-lg shadow-rose-100/50 dark:shadow-rose-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 text-xl font-bold font-serif text-gray-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <Sparkles size={18} className="text-rose-400" />
            {personalInfo.name}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-rose-500 dark:text-rose-400 bg-[#FEE0EE] dark:bg-rose-900/30'
                      : 'text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-pink-50 dark:hover:bg-rose-900/20'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={personalInfo.resumeUrl}
              download="nancy_resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 shadow-md shadow-rose-200 hover:shadow-rose-300"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
            >
              <Download size={15} />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#FEE0EE] dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 hover:bg-pink-200 dark:hover:bg-rose-900/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#FEE0EE] dark:bg-rose-900/30 text-rose-500"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-rose-900/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1A0D12] border-t border-pink-100 dark:border-rose-900/30 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-[#FEE0EE] dark:hover:bg-rose-900/30 hover:text-rose-500 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="nancy_resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-semibold mt-2"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;