import Section from './Section';

const SKILL_DATA = {
  languages: {
    title: 'Programming Languages',
    emoji: '💻',
    skills: ['Python', 'C / C++', 'Java', 'JavaScript', 'SQL'],
  },
  web: {
    title: 'Web Technologies',
    emoji: '🌐',
    skills: ['React.js', 'Node.js', 'HTML / CSS', 'REST APIs', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  },
  tools: {
    title: 'Tools & Platforms',
    emoji: '🛠️',
    skills: ['Git / GitHub', 'Power BI', 'Excel', 'Jupyter', 'Google Colab', 'Google Cloud', 'Tableau'],
  },
  ml: {
    title: 'ML & Data Science',
    emoji: '🧠',
    skills: [
      'Pandas', 'NumPy', 'Scikit-learn', 'LSTM', 'Transformers',
      'XGBoost', 'ARIMA', 'TF-IDF', 'OCR (Tesseract)', 'SciPy',
      'EDA', 'SMOTE', 'NLP Pipelines',
    ],
  },
  competencies: {
    title: 'Key Competencies',
    emoji: '✨',
    skills: [
      'Supervised ML', 'Unsupervised ML', 'Time-Series Forecasting',
      'Data Wrangling', 'NLP', 'Financial Data Pipelines',
      'REST API Design', 'JWT / OAuth2', 'Component Testing',
      'Core Web Vitals', 'OpenAPI / Swagger', 'DSA', 'DBMS',
    ],
  },
};

/* colour palette per category */
const STYLES = {
  languages:    { bubble: 'bg-pink-50   dark:bg-rose-900/30  text-rose-600   dark:text-rose-300   border-pink-200  dark:border-rose-700/40', icon: 'bg-pink-100  dark:bg-rose-900/50' },
  web:          { bubble: 'bg-sky-50    dark:bg-sky-900/30   text-sky-600    dark:text-sky-300    border-sky-200   dark:border-sky-700/40',  icon: 'bg-sky-100   dark:bg-sky-900/50'  },
  tools:        { bubble: 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 border-violet-200 dark:border-violet-700/40', icon: 'bg-violet-100 dark:bg-violet-900/50' },
  ml:           { bubble: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/40', icon: 'bg-emerald-100 dark:bg-emerald-900/50' },
  competencies: { bubble: 'bg-amber-50  dark:bg-amber-900/30  text-amber-700  dark:text-amber-300  border-amber-200  dark:border-amber-700/40',  icon: 'bg-amber-100  dark:bg-amber-900/50'  },
};

const CategoryCard = ({ id, title, emoji, skills }) => {
  const s = STYLES[id];
  return (
    <div className="bg-white dark:bg-[#2D1520] rounded-2xl shadow-md border border-pink-100 dark:border-rose-900/30 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm ${s.icon}`}>
          {emoji}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
      </div>

      {/* Bubbles */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${s.bubble}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technologies and tools I work with" dark>

      {/* Top 3 cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {['languages', 'web', 'tools'].map((id) => (
          <CategoryCard key={id} id={id} {...SKILL_DATA[id]} />
        ))}
      </div>

      {/* ML — full width spotlight */}
      <div className="mb-6">
        <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-lg overflow-hidden relative p-7"
          style={{ background: 'linear-gradient(135deg, #4c1130 0%, #4c1130 45%, #4c1130 100%)' }}>
          <style>{`
            .dark .ml-spotlight {
              background: linear-gradient(135deg, #052e16 0%, #14532d 45%, #052e16 100%) !important;
            }
          `}</style>

          {/* decorative blobs */}
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #1099ef, transparent)' }} />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #1099ef, transparent)' }} />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md bg-emerald-100 dark:bg-emerald-900/50">
                  🧠
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ML & Data Science
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
                    Core specialisation — B.Tech AI/ML + IIT Madras BS Data Science
                  </p>
                </div>
              </div>

              {/* credential chips */}
              <div className="flex flex-wrap gap-2">
                {['CGPA 9.04', 'IIT Madras BS DS', 'Deloitte Data Sim', '2 ML Internships'].map((c) => (
                  <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/70 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700/40 text-emerald-700 dark:text-emerald-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILL_DATA.ml.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competencies */}
      <div className="bg-white dark:bg-[#2D1520] rounded-2xl border border-pink-100 dark:border-rose-900/30 shadow-md p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm bg-amber-100 dark:bg-amber-900/40">
            ✨
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Competencies
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILL_DATA.competencies.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </Section>
  );
};

export default Skills;