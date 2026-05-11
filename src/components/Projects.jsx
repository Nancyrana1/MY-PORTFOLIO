import { Github, ExternalLink, Sparkles } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden bg-white dark:bg-[#2D1520] flex flex-col">
      {/* Image */}
      <div className="relative h-52 rounded-xl mb-5 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FEE0EE 0%, #fecdd3 100%)' }}>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
        )}
        {/* Pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Top right action icons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/40 transition-colors"
            aria-label="GitHub">
            <Github size={16} className="text-white" />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/40 transition-colors"
            aria-label="Live demo">
            <ExternalLink size={16} className="text-white" />
          </a>
        </div>

        {/* Bottom title */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold truncate text-base">{project.title}</p>
          <p className="text-white/70 text-xs truncate mt-0.5">
            {project.techStack?.slice(0, 3)?.join(' · ')}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {project.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech, i) => (
            <span key={i}
              className="px-2.5 py-1 rounded-full text-xs font-medium text-rose-600 dark:text-rose-300 border border-pink-100 dark:border-rose-900/40"
              style={{ background: '#FFF5F8' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-4 border-t border-pink-50 dark:border-rose-900/30">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-80 transition-opacity">
            <Github size={16} /> Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 shadow-md shadow-rose-200"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}>
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Things I've built with love and caffeine"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-gray-400 mb-5 text-sm">Curious to see more? </p>
        <a
          href="https://github.com/Nancyrana1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300"
          style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
        >
          <Github size={20} />
          View All Projects on GitHub
          <Sparkles size={16} />
        </a>
      </div>
    </Section>
  );
};

export default Projects;