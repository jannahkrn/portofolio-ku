import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'BITE - Sweet Treats Website',
      category: 'web-dev',
      description: 'A website dedicated to showcasing a wide variety of sweet treats, from pastries to chocolates, with an intuitive and user-friendly interface.',
      image: 'src/assets/project/bite.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: '#',
      live: '#',
      date: 'Jun 2025',
      team: 2
    },
    {
      id: 2,
      title: 'Battle Dice',
      category: 'web-dev',
      description: 'A thrilling turn-based game where strategy meets luck. Players engage in tactical combat with progressive enemy unlocks and a global leaderboard.',
      image: 'src/assets/project/battledice.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: '#',
      live: '#',
      date: 'Jun 2025',
      team: 1
    },
    {
      id: 3,
      title: 'Sport Area Solo Technopark',
      category: 'web-dev',
      description: 'A web application for booking futsal and basketball courts at Solo Technopark, allowing users to check availability and make reservations.',
      image: 'src/assets/project/sportarea.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: '#',
      live: '#',
      date: 'Jul 2025',
      team: 3
    },
    {
      id: 4,
      title: 'Mandiri Digipreneur Hub Solo Technopark',
      category: 'web-dev',
      description: 'A reservation system for MDH facilities (podcast rooms, coworking spaces, classrooms). The system includes features for national holidays and admin data export to Excel.',
      image: 'src/assets/project/mdh.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: '#',
      live: '#',
      date: 'Jul 2025',
      team: 3
    },
    {
      id: 5,
      title: 'Ethereal Store. Id',
      category: 'ui-ux',
      description: 'UI/UX design for an e-commerce platform specializing in fashion. The design focuses on a seamless and modern shopping experience.',
      image: 'src/assets/project/etherealstore.png',
      tech: ['Figma', 'Canva', 'Prototyping', 'UI/UX Design'],
      github: '#',
      live: '#',
      date: 'Jan 2024',
      team: 1
    },
    {
      id: 6,
      title: 'Mobile Projects',
      category: 'mobile',
      description: 'This section is currently under development. Please check back soon for the latest projects that will be published shortly.',
      image: 'coming-soon',
    },
    {
      id: 7,
      title: 'Digital Marketing Projects',
      category: 'digital-marketing',
      description: 'This section is currently under development. Please check back soon for the latest projects that will be published shortly.',
      image: 'coming-soon',
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: projects.length },
    { id: 'web-dev', name: 'Web Developer', count: projects.filter(p => p.category === 'web-dev').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ui-ux', name: 'UI/UX & Design', count: projects.filter(p => p.category === 'ui-ux').length },
    { id: 'digital-marketing', name: 'Digital Marketing', count: projects.filter(p => p.category === 'digital-marketing').length }
  ];

  const filteredProjects = projects.filter(project => {
    // Saring proyek 'coming-soon' jika filter yang aktif adalah 'all'
    if (activeFilter === 'all' && project.image === 'coming-soon') {
      return false;
    }
    // Tampilkan semua proyek jika filter 'all' aktif, atau tampilkan proyek yang sesuai dengan kategori yang dipilih
    return activeFilter === 'all' || project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Portfolio Proyek
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Koleksi proyek yang telah saya kerjakan dengan berbagai teknologi dan tingkat kompleksitas
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700'
                  : 'bg-violet-50 text-slate-600 hover:bg-violet-100 hover:text-violet-600 border border-violet-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-violet-50 rounded-lg overflow-hidden border border-violet-100 hover:border-violet-200 transition-all group hover:transform hover:scale-105 shadow-sm hover:shadow-md">
              {project.image === 'coming-soon' ? (
                <div className="relative w-full h-full p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-violet-500 mb-4">Coming Soon!</h3>
                    <p className="text-sm sm:text-base text-slate-400 max-w-sm">
                        {project.description}
                    </p>
                </div>
              ) : (
                <>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-violet-600">{project.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple-100 text-xs rounded text-purple-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6">
            Ingin melihat lebih banyak proyek atau berkolaborasi dalam proyek baru?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/jannahkrn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 rounded-full font-semibold hover:from-violet-300 hover:to-purple-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <Github className="w-5 h-5" />
              Lihat Semua di GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-rose-200 text-rose-600 rounded-full font-semibold hover:border-rose-300 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md"
            >
              Mulai Proyek Bersama
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;