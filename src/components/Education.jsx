import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { education } from '../data/education';

const EducationCard = ({ edu }) => {
  return (
    <Card className="bg-gradient-to-br from-white to-pink-50/50 dark:from-[#2D1520] dark:to-rose-900/10 group">
      {/* Header */}
      <div className="flex gap-4 mb-5">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-rose-100 group-hover:scale-105 transition-transform"
          style={{ background: 'linear-gradient(135deg, #FEE0EE, #fecdd3)' }}>
          <GraduationCap size={26} className="text-rose-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {edu.degree}
          </h3>
          <p className="text-rose-500 font-semibold text-sm mt-0.5 truncate">
            {edu.institution}
          </p>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-pink-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-full border border-pink-100 dark:border-rose-900/30">
          <MapPin size={11} className="text-rose-400" /> {edu.location}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-pink-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-full border border-pink-100 dark:border-rose-900/30">
          <Calendar size={11} className="text-rose-400" /> {edu.period}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 bg-[#FEE0EE] dark:bg-rose-900/30 px-3 py-1.5 rounded-full border border-pink-200 dark:border-rose-700/40">
          <Star size={11} fill="currentColor" /> CGPA: {edu.cgpa}
        </span>
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        {edu.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2.5 text-gray-500 dark:text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }} />
            <span className="text-sm leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const Education = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey and achievements"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </Section>
  );
};

export default Education;