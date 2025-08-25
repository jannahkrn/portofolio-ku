import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Eye } from 'lucide-react';

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
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ui/ux&design', name: 'UI/UX & Design', count: projects.filter(p => p.category === 'ui/ux&design').length },
    { id: 'digitalmarketing', name: 'Digital Marketing', count: projects.filter(p => p.category === 'digitalmarketing').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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