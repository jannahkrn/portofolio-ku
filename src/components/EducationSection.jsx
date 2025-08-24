import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Diploma in Software Engineering Application',
      school: 'Telkom University',
      period: '2024 - Now',
      description: 'Specializing in software development, database management, and modern web technologies.',
      achievements: [
        'Back-end Developer Group Study Club', 
        'Juara 2 Hackathon Campus 2022', 
        'Asisten Praktikum Web Programming',
        'Ketua Himpunan Mahasiswa Teknik Informatika'
      ]
    },
    {
      degree: 'Mathematics and Natural Sciences',
      school: 'SMA Negeri 1 Polanharjo',
      period: '2021 - 2024',
      description: 'Graduated with top marks. Active in various extracurricular activities and student organizations.',
      achievements: [
        'Science Olympiad Champion in Mathematics and Physics 2024',
        'Participant of the National Science Olympiad in Informatics 2023',
        'Mosque Affairs Division, Rohis SMA Negeri 1 Polanharjo 2023 - 2024 Period',
        'Publication and Documentation Division, MPK SMA Negeri 1 Polanharjo 2021 – 2023 Period',
        'Discipline Division, Rohis SMA Negeri 1 Polanharjo 2021 - 2022 Period',
        'Member of Computer Extracurricular Club 2021 - 2022 Period'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic journey and educational achievements.
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-rose-200 hidden lg:block"></div>
              )}
              
              <div className={`flex flex-col lg:flex-row gap-8 relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Garis vertikal tepat di tengah antara dua box */}
                {edu.school === 'SMA Negeri 1 Polanharjo' && (
                  <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-violet-200 to-rose-200 rounded-full"></div>
                )}
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {edu.period}
                  </div>
                  <div className="bg-violet-50 p-6 rounded-lg border border-violet-100 hover:border-violet-200 transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-start mb-4">
                      <GraduationCap className="w-8 h-8 text-violet-400 mr-3 mt-1" />
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-violet-600 text-left pl-0">{edu.degree}</h3>
                        <h4 className="text-violet-400 font-medium text-left pl-0">{edu.school}</h4>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-left">{edu.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-rose-50 p-6 rounded-lg border border-rose-100 hover:border-rose-200 transition-all shadow-sm hover:shadow-md text-left">
                    <h5 className="font-semibold mb-4 text-rose-400 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Pencapaian & Aktivitas
                    </h5>
                    <ul className="space-y-3 pl-4">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                          <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-left">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default EducationSection;