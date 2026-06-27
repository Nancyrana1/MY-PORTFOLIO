

import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: personalInfo.github, Icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  return (
    <footer className="footer-bg">
      {/* Top wave */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 40%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-rose-400" />
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {personalInfo.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Computer Science student passionate about building innovative solutions through code — one pink pixel at a time 
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-rose-900/40 text-gray-400 hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-900/20 transition-all hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-rose-300 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-rose-400 transition-all duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-widest mb-5">Say Hello </h4>
              <div className="space-y-3">
                <a href={`mailto:${personalInfo.email}`}
                  className="block text-gray-400 hover:text-rose-300 transition-colors text-sm">
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`}
                  className="block text-gray-400 hover:text-rose-300 transition-colors text-sm">
                  {/* {personalInfo.phone} */}
                </a>
                <p className="text-gray-500 text-sm">{personalInfo.location}</p>
              </div>

              {/* Availability */}
              {/* <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-900/40 bg-rose-900/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300">Available for opportunities</span>
              </div> */}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-rose-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1.5">
              Alot Code {" "}
              {/* <Heart size={12} className="text-rose-500" fill="currentColor" />  */}
              and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;