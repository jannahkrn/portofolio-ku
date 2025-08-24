import React from 'react';
import { Briefcase, MapPin, Calendar, Star } from 'lucide-react';

const ExperienceSection = () => {
  const orgExperiences = [
    {
      title: 'Ketua Himpunan Mahasiswa Teknik Informatika',
      organization: 'Telkom University',
      location: 'Bandung, Indonesia',
      period: '2024 - Sekarang',
      type: 'Organisasi',
      description: 'Memimpin organisasi mahasiswa, mengelola program kerja, dan mengkoordinasi tim untuk berbagai kegiatan kampus.',
      skills: ['Leadership', 'Team Management', 'Event Planning', 'Public Speaking'],
      achievements: [
        'Meningkatkan partisipasi anggota hingga 30%',
        'Menyelenggarakan 10+ acara besar',
        'Membangun kolaborasi dengan organisasi lain'
      ]
    },
    {
      title: 'Staff Divisi Publikasi & Dokumentasi',
      organization: 'MPK SMA Negeri 1 Polanharjo',
      location: 'Klaten, Indonesia',
      period: '2021 - 2023',
      type: 'Organisasi',
      description: 'Bertanggung jawab atas publikasi kegiatan sekolah dan dokumentasi acara penting.',
      skills: ['Content Creation', 'Photography', 'Social Media'],
      achievements: [
        'Meningkatkan engagement media sosial sekolah',
        'Mendokumentasikan 20+ event sekolah',
        'Membuat buletin digital bulanan'
      ]
    }
  ];

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
      case 'Full Time': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Part Time': return 'bg-violet-50 text-violet-600 border-violet-200';
      case 'Freelance': return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'Internship': return 'bg-rose-50 text-rose-600 border-rose-200';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and organizational involvement in technology, design, and leadership.
          </p>
        </div>
        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-violet-600">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line for desktop */}
                {/* Always show timeline line for all cards */}
                <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-transparent"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-2">
                      {exp.period}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)} ml-2`}>
                      {exp.type}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="bg-violet-50 p-6 rounded-lg border border-violet-100 hover:border-violet-200 transition-all group shadow-sm hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-violet-100 rounded-lg group-hover:bg-violet-200 transition-colors">
                          <Briefcase className="w-6 h-6 text-violet-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-violet-600">{exp.title}</h3>
                            <div className="flex items-center text-slate-500 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                          <h4 className="text-violet-400 font-medium mb-3 flex items-center">
                            {exp.company}
                            <Calendar className="w-4 h-4 ml-2 mr-1" />
                            <span className="text-slate-500 text-sm">{exp.period}</span>
                          </h4>
                          <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
                          {/* Skills */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-slate-500 mb-2">Tech Stack:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-xs rounded-full text-purple-600 hover:bg-purple-200 transition-colors">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Achievements */}
                          <div>
                            <h5 className="text-sm font-semibold text-rose-400 mb-2 flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              Key Achievements:
                            </h5>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                                  <div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-2 mr-2 flex-shrink-0"></div>
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
        </div>

        {/* Organizational Experience */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-violet-600">Organizational Experience</h2>
          <div className="space-y-8">
            {orgExperiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line for desktop */}
                {/* Always show timeline line for all cards */}
                <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-transparent"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-2">
                      {exp.period}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border bg-purple-50 text-purple-600 border-purple-200 ml-2`}>
                      {exp.type}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="bg-violet-50 p-6 rounded-lg border border-violet-100 hover:border-violet-200 transition-all group shadow-sm hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-violet-100 rounded-lg group-hover:bg-violet-200 transition-colors">
                          <Briefcase className="w-6 h-6 text-violet-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-violet-600">{exp.title}</h3>
                            <div className="flex items-center text-slate-500 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                          <h4 className="text-violet-400 font-medium mb-3 flex items-center">
                            {exp.organization}
                            <Calendar className="w-4 h-4 ml-2 mr-1" />
                            <span className="text-slate-500 text-sm">{exp.period}</span>
                          </h4>
                          <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
                          {/* Skills */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-slate-500 mb-2">Skills:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-xs rounded-full text-purple-600 hover:bg-purple-200 transition-colors">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Achievements */}
                          <div>
                            <h5 className="text-sm font-semibold text-rose-400 mb-2 flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              Key Achievements:
                            </h5>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                                  <div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-2 mr-2 flex-shrink-0"></div>
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;