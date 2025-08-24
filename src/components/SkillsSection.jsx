import React from 'react';
import { Monitor, Database, Smartphone, Palette, TrendingUp, Globe, Code, Settings } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'from-violet-200 to-purple-200',
      textColor: 'text-violet-600',
      borderColor: 'border-violet-100',
      hoverBorder: 'hover:border-violet-200',
      bgColor: 'bg-violet-50',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-emerald-200 to-teal-200',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-100',
      hoverBorder: 'hover:border-emerald-200',
      bgColor: 'bg-emerald-50',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-rose-200 to-pink-200',
      textColor: 'text-rose-600',
      borderColor: 'border-rose-100',
      hoverBorder: 'hover:border-rose-200',
      bgColor: 'bg-rose-50',
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 78 },
        { name: 'Ionic', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'App Store Deploy', level: 80 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-purple-200 to-violet-200',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-100',
      hoverBorder: 'hover:border-purple-200',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Adobe Photoshop', level: 88 },
        { name: 'Adobe Illustrator', level: 85 },
        { name: 'Prototyping', level: 87 }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      color: 'from-amber-200 to-orange-200',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-100',
      hoverBorder: 'hover:border-amber-200',
      bgColor: 'bg-amber-50',
      skills: [
        { name: 'SEO/SEM', level: 85 },
        { name: 'Google Analytics', level: 88 },
        { name: 'Social Media Marketing', level: 90 },
        { name: 'Content Strategy', level: 82 },
        { name: 'Facebook Ads', level: 80 },
        { name: 'Email Marketing', level: 78 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      color: 'from-indigo-200 to-blue-200',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-100',
      hoverBorder: 'hover:border-indigo-200',
      bgColor: 'bg-indigo-50',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Netlify/Vercel', level: 85 },
        { name: 'CI/CD', level: 72 },
        { name: 'Linux', level: 78 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', category: 'Editor', icon: '💻' },
    { name: 'Postman', category: 'API Testing', icon: '🚀' },
    { name: 'Chrome DevTools', category: 'Debug', icon: '🔍' },
    { name: 'Notion', category: 'Productivity', icon: '📝' },
    { name: 'Slack', category: 'Communication', icon: '💬' },
    { name: 'Trello', category: 'Project Management', icon: '📋' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Keahlian & Teknologi
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Teknologi, tools, dan keahlian yang saya kuasai dalam pengembangan aplikasi
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.bgColor} p-6 rounded-lg border ${category.borderColor} ${category.hoverBorder} transition-all group shadow-sm hover:shadow-md`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${category.textColor}`}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 text-sm font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Tools & Software
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-violet-50 p-4 rounded-lg border border-violet-100 hover:border-violet-200 transition-all text-center group hover:transform hover:scale-105 shadow-sm hover:shadow-md">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h4 className="font-semibold text-sm mb-1 text-violet-600">{tool.name}</h4>
                <p className="text-xs text-slate-500">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-rose-50 p-8 rounded-lg border border-violet-100 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Bahasa Pemrograman
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'JavaScript', level: 92, color: 'text-amber-400' },
              { name: 'TypeScript', level: 88, color: 'text-violet-400' },
              { name: 'Python', level: 80, color: 'text-emerald-400' },
              { name: 'PHP', level: 75, color: 'text-purple-400' },
              { name: 'Java', level: 70, color: 'text-rose-400' },
              { name: 'C++', level: 65, color: 'text-indigo-400' }
            ].map((lang, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3">
                  <div className="w-16 h-16 mx-auto rounded-full border-4 border-slate-200 flex items-center justify-center relative overflow-hidden bg-white">
                    <div 
                      className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-current to-current ${lang.color} transition-all duration-1000`}
                      style={{ height: `${lang.level}%` }}
                    ></div>
                    <span className="relative z-10 font-bold text-sm text-slate-600">{lang.level}%</span>
                  </div>
                </div>
                <h4 className={`font-semibold ${lang.color} group-hover:scale-110 transition-transform`}>
                  {lang.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Problem Solving',
              'Team Leadership',
              'Project Management',
              'Client Communication',
              'Creative Thinking',
              'Time Management',
              'Continuous Learning',
              'Agile Methodology'
            ].map((skill, index) => (
              <div key={index} className="bg-rose-50 p-4 rounded-lg border border-rose-100 hover:border-rose-200 transition-all text-center group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-rose-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-sm text-rose-600 group-hover:text-rose-500 transition-colors">
                  {skill}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;