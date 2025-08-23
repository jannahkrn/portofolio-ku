import React from 'react';
import { Monitor, Database, Smartphone, Palette, TrendingUp, Globe, Code, Settings } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'from-blue-500 to-purple-600',
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
      color: 'from-green-500 to-teal-600',
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
      color: 'from-orange-500 to-red-600',
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
      color: 'from-pink-500 to-rose-600',
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
      color: 'from-yellow-500 to-orange-600',
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
      color: 'from-indigo-500 to-blue-600',
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Keahlian & Teknologi
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Teknologi, tools, dan keahlian yang saya kuasai dalam pengembangan aplikasi
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all group">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tools & Software
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all text-center group hover:transform hover:scale-105">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{tool.name}</h4>
                <p className="text-xs text-gray-400">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Bahasa Pemrograman
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'JavaScript', level: 92, color: 'text-yellow-400' },
              { name: 'TypeScript', level: 88, color: 'text-blue-400' },
              { name: 'Python', level: 80, color: 'text-green-400' },
              { name: 'PHP', level: 75, color: 'text-purple-400' },
              { name: 'Java', level: 70, color: 'text-red-400' },
              { name: 'C++', level: 65, color: 'text-pink-400' }
            ].map((lang, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3">
                  <div className="w-16 h-16 mx-auto rounded-full border-4 border-gray-600 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-current to-current ${lang.color} transition-all duration-1000`}
                      style={{ height: `${lang.level}%` }}
                    ></div>
                    <span className="relative z-10 font-bold text-sm">{lang.level}%</span>
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
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
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
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-all text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-sm group-hover:text-orange-400 transition-colors">
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