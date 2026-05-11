

import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { certifications } from '../data/certifications';


const CertificationCard = ({ cert }) => {
  return (
    <Card className="bg-gradient-to-br from-white to-pink-50/50 dark:from-[#2D1520] dark:to-rose-900/10 group">
      <div className="flex gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-rose-100 group-hover:scale-105 transition-transform"
          style={{ background: 'linear-gradient(135deg, #FEE0EE, #fecdd3)' }}>
          <Award size={24} className="text-rose-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {cert.title}
          </h3>
          <p className="text-rose-500 font-semibold text-sm mt-0.5">{cert.issuer}</p>
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-pink-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-full border border-pink-100 dark:border-rose-900/30 mb-4">
        <Calendar size={11} className="text-rose-400" />
        {cert.date}
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {cert.description}
      </p>

      {cert.credentialUrl !== "#" && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-500 hover:text-rose-600 transition-colors group/link"
        >
          <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          View Credential
        </a>
      )}
    </Card>
  );
};

const Certifications = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Recognition and accomplishments in tech communities"
      dark
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>

      {/* Campus involvement */}
      <div className="mt-12 text-center">
        <Card hover={false} className="max-w-2xl mx-auto bg-gradient-to-br from-[#FEE0EE] to-pink-50 dark:from-rose-900/30 dark:to-[#2D1520] border-pink-200 dark:border-rose-700/40">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles size={20} className="text-rose-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Campus Involvement
            </h3>
            <Sparkles size={20} className="text-rose-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Active member of{' '}
            <span className="font-semibold text-rose-500">DSA Club</span> and{' '}
            <span className="font-semibold text-rose-500">Google Developer Student Clubs (GDSC)</span> at MSIT —
            organizing technical events, workshops, and contributing to the developer community on campus. 🌸
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default Certifications;