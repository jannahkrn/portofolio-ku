import React from 'react';
import { Briefcase, MapPin, Calendar, Star } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Startup Indonesia',
      location: 'Jakarta, Indonesia',
      period: '2023 - Present',
      type: 'Part Time',
      description: 'Developing responsive web applications using React and modern web technologies. Collaborated with design team to implement pixel-perfect UI components and optimize user experience.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Figma', 'REST API'],
      achievements: [
        'Meningkatkan performa aplikasi hingga 40%',
        'Implementasi dark mode dan multi-language support',
        'Mentoring 2 junior developer'
      ]
    },
    {
      title: 'Freelance UI/UX Designer',
      company: 'Various Clients',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'Freelance',
      description: 'Created brand identities, marketing materials, and digital designs for small to medium businesses. Managed multiple projects and maintained excellent client relationships.',
      skills: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Prototyping', 'User Research', 'Brand Design'],
      achievements: [
        'Menyelesaikan 15+ proyek dengan rating 5 bintang',
        'Meningkatkan konversi client hingga 25%',
        'Membangun portfolio client yang beragam'
      ]
    },
    {
      title: 'Digital Marketing Intern',
      company: 'Creative Digital Agency',
      location: 'Bandung, Indonesia',
      period: '2021 - 2022',
      type: 'Internship',
      description: 'Assisted in digital marketing campaigns, social media management, and content creation. Analyzed campaign performance and provided actionable insights to improve ROI.',
      skills: ['Social Media Marketing', 'Content Creation', 'Google Analytics', 'SEO', 'Facebook Ads', 'Copywriting'],
      achievements: [
        'Mengelola 10+ akun media sosial client',
        'Meningkatkan engagement rate rata-rata 35%',
        'Membuat konten viral dengan 100K+ views'
      ]
    },
    {
      title: 'Web Development Tutor',
      company: 'Campus Coding Bootcamp',
      location: 'Jakarta, Indonesia',
      period: '2022 - Present',
      type: 'Part Time',
      description: 'Teaching fundamental web development concepts to beginners. Creating curriculum and hands-on projects to help students build practical skills.',
      skills: ['Teaching', 'Curriculum Development', 'HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      achievements: [
        'Mengajar 50+ siswa dengan tingkat kepuasan 95%',
        'Mengembangkan modul pembelajaran interaktif',
        '80% siswa berhasil mendapat pekerjaan di bidang tech'
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'Full Time': return 'bg-green-100 text-green-800 border-green-200';
      case 'Part Time': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Freelance': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Internship': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Pengalaman Kerja
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Perjalanan profesional dan pembelajaran saya di berbagai bidang
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line for desktop */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-2">
                    {exp.period}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)} ml-2`}>
                    {exp.type}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <h4 className="text-blue-400 font-medium mb-3 flex items-center">
                          {exp.company}
                          <Calendar className="w-4 h-4 ml-2 mr-1" />
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </h4>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                        
                        {/* Skills */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300 hover:bg-gray-600 transition-colors">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Tahun Pengalaman</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
            <div className="text-gray-300 text-sm">Proyek Selesai</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm">Client Puas</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Siswa Diajar</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;