import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              My Projects Portfolio
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing various technologies and levels of complexity.
          </p>
        </div>

        {/* Coming Soon Box */}
        <div className="bg-gray-50 border-dashed border-2 border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center min-h-[400px]">
          <h3 className="text-3xl font-bold text-gray-500 mb-4">
            Coming Soon!
          </h3>
          <p className="text-gray-400 text-center max-w-lg">
            This portfolio page is currently under development. Please check back later to see the latest projects that will be published shortly.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6">
            Want to see more projects or collaborate on a new one?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/jannahkrn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 rounded-full font-semibold hover:from-violet-300 hover:to-purple-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-rose-200 text-rose-600 rounded-full font-semibold hover:border-rose-300 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md"
            >
              Start a Project Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;