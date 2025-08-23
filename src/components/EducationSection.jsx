import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Sarjana Teknologi Informasi',
      school: 'Universitas ABC',
      period: '2021 - Sekarang',
      description: 'Fokus pada pengembangan perangkat lunak, basis data, dan teknologi web modern. IPK: 3.8/4.0',
      achievements: [
        'Mahasiswa Berprestasi 2023', 
        'Juara 2 Hackathon Campus 2022', 
        'Asisten Praktikum Web Programming',
        'Ketua Himpunan Mahasiswa Teknik Informatika'
      ]
    },
    {
      degree: 'SMA Jurusan IPA',
      school: 'SMA Negeri 1 Jakarta',
      period: '2018 - 2021',
      description: 'Lulus dengan nilai UN terbaik. Aktif dalam berbagai kegiatan ekstrakurikuler teknologi dan organisasi siswa.',
      achievements: [
        'Lulusan Terbaik Angkatan 2021', 
        'Ketua OSIS Periode 2020-2021', 
        'Juara 1 Olimpiade Komputer Tingkat Kota',
        'Juara 2 Lomba Karya Tulis Ilmiah Tingkat Provinsi'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Pendidikan
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Perjalanan akademis dan pencapaian pendidikan saya
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>
              )}
              
              <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {edu.period}
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <h4 className="text-purple-400 font-medium">{edu.school}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-all">
                    <h5 className="font-semibold mb-4 text-pink-400 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Pencapaian & Aktivitas
                    </h5>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Sertifikasi & Kursus</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400">Full Stack Web Development</h4>
                <p className="text-sm text-gray-300">FreeCodeCamp (2023)</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400">Google Digital Marketing</h4>
                <p className="text-sm text-gray-300">Google (2022)</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400">UI/UX Design Fundamentals</h4>
                <p className="text-sm text-gray-300">Coursera (2022)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;