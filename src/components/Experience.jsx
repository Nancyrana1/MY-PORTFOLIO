import { useState, useEffect } from 'react';
import { Briefcase, CheckCircle, Calendar, ArrowRight, X, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { experience } from '../data/experience';

/* ─────────────────────────────────────────
   MODAL POPUP
───────────────────────────────────────── */
const ExperienceModal = ({ exp, onClose }) => {
  /* Close on Escape key */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden'; // lock scroll
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(45, 21, 32, 0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}               /* click outside = close */
    >
      {/* Panel — stop click from bubbling to backdrop */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #fff5f8 100%)',
          animation: 'modalIn 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(20px); }
            to   { opacity: 1; transform: scale(1)    translateY(0);    }
          }
          .dark-modal {
            background: linear-gradient(145deg, #2d1520 0%, #1a0a10 100%) !important;
          }
        `}</style>

        {/* Pink top bar */}
        <div
          className="h-2 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #f43f5e, #ec4899, #f43f5e)' }}
        />

        <div className="p-7">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-all"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pr-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
            >
              <Briefcase size={24} className="text-white" />
            </div>
            <div>
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {exp.role}
              </h2>
              <p className="text-rose-500 font-bold text-lg mt-0.5">{exp.company}</p>
            </div>
          </div>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FEE0EE] dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 border border-pink-200 dark:border-rose-700/40">
              <Calendar size={12} /> {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FEE0EE] dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 border border-pink-200 dark:border-rose-700/40">
              <ArrowRight size={12} /> {exp.type || 'Internship'}
            </span>
            {exp.location && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FEE0EE] dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 border border-pink-200 dark:border-rose-700/40">
                <MapPin size={12} /> {exp.location}
              </span>
            )}
            {exp.mode && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-pink-50 dark:bg-rose-900/20 text-rose-500 border border-pink-100 dark:border-rose-800/30">
                {exp.mode}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={15} className="text-rose-400" />
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Overview</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm bg-pink-50/60 dark:bg-rose-900/10 rounded-2xl p-4 border border-pink-100 dark:border-rose-900/20">
              {exp.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={15} className="text-rose-400" />
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Key Responsibilities</h4>
            </div>
            <ul className="space-y-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #FEE0EE, #fecdd3)' }}
                  >
                    <CheckCircle size={13} className="text-rose-500" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack (if available) */}
          {exp.techStack && exp.techStack.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={15} className="text-rose-400" />
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Tech Used</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-rose-600 dark:text-rose-300 border border-pink-200 dark:border-rose-700/40"
                    style={{ background: '#FFF5F8' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Letter / proof link */}
          {exp.letterUrl && exp.letterUrl !== '#' && (
            <a
              href={exp.letterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
            >
              <ExternalLink size={15} />
              View Internship Letter
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   EXPERIENCE CARD (clickable)
───────────────────────────────────────── */
const ExperienceCard = ({ exp, index, onClick }) => {
  return (
    <div className="relative flex gap-6">
      {/* Timeline dot + line */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-rose-200 z-10"
          style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
        >
          <Briefcase size={20} className="text-white" />
        </div>
        {index !== experience.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #fecdd3, transparent)', minHeight: '40px' }}
          />
        )}
      </div>

      {/* Card — cursor-pointer + hover ring to hint it's clickable */}
      <Card
        className="flex-1 mb-6 bg-gradient-to-br from-white to-pink-50/40 dark:from-[#2D1520] dark:to-rose-900/10 cursor-pointer hover:ring-2 hover:ring-rose-300 dark:hover:ring-rose-700 active:scale-[0.99] transition-all"
        onClick={onClick}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3
              className="text-xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-rose-500 font-semibold">{exp.company}</span>
              <span className="w-1 h-1 bg-rose-300 rounded-full" />
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar size={12} /> {exp.period}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#FEE0EE] dark:bg-rose-900/30 text-rose-500 dark:text-rose-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200 dark:border-rose-700/40">
              <ArrowRight size={11} />
              {exp.type || 'Internship'}
            </span>
            {/* "Click for details" hint */}
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 italic">
              {/* click for details ✨ */}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-2">
          {exp.description}
        </p>

        <ul className="space-y-2.5">
          {exp.responsibilities.slice(0, 2).map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-gray-500 dark:text-gray-400">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: '#FEE0EE' }}
              >
                <CheckCircle size={13} className="text-rose-500" />
              </div>
              <span className="text-sm leading-relaxed">{resp}</span>
            </li>
          ))}
          {/* {exp.responsibilities.length > 2 && (
            <li className="text-xs text-rose-400 font-semibold pl-7">
              +{exp.responsibilities.length - 2} more — click to see all
            </li>
          )} */}
        </ul>
      </Card>
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
const Experience = () => {
  const [selected, setSelected] = useState(null); // which exp is open

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Where I've grown and shipped real products"
      dark
    >
      <div className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            index={index}
            onClick={() => setSelected(exp)}
          />
        ))}
      </div>

      {/* Modal — renders only when an internship is selected */}
      {selected && (
        <ExperienceModal
          exp={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </Section>
  );
};

export default Experience;