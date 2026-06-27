import { Code, Brain, Database, Award, Sparkles } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const highlights = [
    {
      icon: <Code size={28} />,
      title: "Full Stack Dev",
      description: "React, Node.js, MongoDB — building end-to-end web apps with clean UI and solid APIs.",
      emoji: "💻",
      color: "from-rose-100 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/20",
    },
    {
      icon: <Brain size={28} />,
      title: "Machine Learning",
      description: "Building ML models and AI solutions that actually solve real-world problems.",
      emoji: "🤖",
      color: "from-pink-100 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/20",
    },
    {
      icon: <Database size={28} />,
      title: "Data Analysis",
      description: "SQL, Power BI, and storytelling with data through beautiful dashboards.",
      emoji: "📊",
      color: "from-fuchsia-100 to-pink-50 dark:from-fuchsia-900/30 dark:to-pink-900/20",
    },
    {
      icon: <Award size={28} />,
      title: "Problem Solver",
      description: "Strong DSA fundamentals with hands-on competitive programming experience.",
      emoji: "🏆",
      color: "from-rose-100 to-fuchsia-50 dark:from-rose-900/30 dark:to-fuchsia-900/20",
    },
  ];

  return (
    <Section id="about" title="About Me" subtitle="A little about who I am">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Personal text */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ background: '#FEE0EE' }}>
              <Sparkles size={18} className="text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              My Story
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {personalInfo.about}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm pursuing <span className="font-semibold text-rose-500">B.Tech in CSE (AI/ML)</span> at MSIT and a{" "}
            <span className="font-semibold text-rose-500">BS in Data Science</span> from IIT Madras simultaneously —
            because why pick just one passion? I love building products that blend strong engineering with
            practical ML and data insights.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Through internships {" "}
            {/* at <span className="font-semibold text-rose-500">DATATROOPS</span> and{" "}
            <span className="font-semibold text-rose-500">BlueStock</span>,  */}
            and open‑source programs like{" "}
            <span className="font-semibold text-rose-500">GSSoC</span> and{" "}
            <span className="font-semibold text-rose-500">SheFi</span>, I've learned to ship features fast,
            collaborate in teams, and keep quality high.
          </p>

          {/* Fun facts strip */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { emoji: '🚀', label: 'Projects Built', val: '4+' },
              { emoji: '🌍', label: 'Open Source', val: 'GSSoC' },
              { emoji: '⚡', label: 'Internships', val: '2+' },
            ].map((fact) => (
              <div key={fact.label} className="text-center p-4 rounded-2xl border border-pink-100 dark:border-rose-900/40 bg-[#FFF5F8] dark:bg-rose-900/10">
                <div className="text-2xl mb-1">{fact.emoji}</div>
                <div className="text-lg font-bold text-rose-500">{fact.val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <Card key={index} className={`bg-gradient-to-br ${item.color} border-pink-100 dark:border-rose-900/40`}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/80 dark:bg-white/10 shadow-sm shrink-0">
                  <span className="text-rose-400">{item.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span>{item.emoji}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;