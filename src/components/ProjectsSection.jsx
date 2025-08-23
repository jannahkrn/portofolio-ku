import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Star, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Platform e-commerce lengkap dengan fitur payment gateway, admin dashboard, dan sistem inventory real-time. Dibangun dengan teknologi modern untuk performa optimal.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'JWT'],
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 124, forks: 45, views: '2.5k' },
      date: 'Jan 2024',
      team: 3
    },
    {
      id: 2,
      title: 'Marketing Analytics Dashboard',
      category: 'frontend',
      description: 'Dashboard visualisasi data untuk campaign marketing dengan analytics real-time, tracking konversi, dan perhitungan ROI yang akurat.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'D3.js', 'Chart.js', 'Python', 'PostgreSQL', 'Docker'],
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 89, forks: 23, views: '1.8k' },
      date: 'Dec 2023',
      team: 2
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Aplikasi mobile banking yang aman dengan autentikasi biometrik, history transaksi, dan fitur budget tracking untuk manajemen keuangan.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Stripe', 'Biometric'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 67, forks: 12, views: '1.2k' },
      date: 'Nov 2023',
      team: 4
    },
    {
      id: 4,
      title: 'Portfolio Website Template',
      category: 'design',
      description: 'Template website portfolio modern untuk developer dan designer dengan animasi menarik dan fully responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 156, forks: 78, views: '3.2k' },
      date: 'Oct 2023',
      team: 1
    },
    {
      id: 5,
      title: 'Social Media Scheduler',
      category: 'fullstack',
      description: 'Tool untuk scheduling dan manage multiple social media accounts dengan analytics dan auto-posting features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Social APIs', 'Cron Jobs'],
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 93, forks: 34, views: '1.9k' },
      date: 'Sep 2023',
      team: 2
    },
    {
      id: 6,
      title: 'Restaurant Management System',
      category: 'fullstack',
      description: 'Sistem manajemen restoran dengan POS, inventory management, staff scheduling, dan customer relationship management.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Payment Gateway', 'PWA'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 45, forks: 18, views: '950' },
      date: 'Aug 2023',
      team: 3
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'design', name: 'Design', count: projects.filter(p => p.category === 'design').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Portfolio Proyek
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Koleksi proyek yang telah saya kerjakan dengan berbagai teknologi dan tingkat kompleksitas
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Proyek Unggulan
            </span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500 transition-all group hover:transform hover:scale-105 relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.team}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-gray-600 text-xs rounded-full text-gray-400">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </span>
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all group hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-yellow-500 text-gray-900 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600 text-xs rounded text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.stats.views}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Statistik Proyek
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {projects.length}+
              </div>
              <div className="text-gray-300 text-sm">Total Proyek</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}+
              </div>
              <div className="text-gray-300 text-sm">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-300 text-sm">Proyek Unggulan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {new Set(projects.flatMap(p => p.tech)).size}+
              </div>
              <div className="text-gray-300 text-sm">Teknologi</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ingin melihat lebih banyak proyek atau berkolaborasi dalam proyek baru?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              Lihat Semua di GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-400 rounded-full font-semibold hover:border-white hover:bg-white hover:text-gray-900 transition-all"
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