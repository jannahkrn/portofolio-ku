import React from 'react';
import { User, GraduationCap, Award, Code, Palette, TrendingUp, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mahasiswa yang berdedikasi dengan passion dalam teknologi dan kreativitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <User className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="text-gray-300">
                Mahasiswa aktif yang menggabungkan keahlian teknis dalam pengembangan web 
                dengan kreativitas dalam desain dan strategi pemasaran digital.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
              <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visi</h3>
              <p className="text-gray-300">
                Menjadi developer yang dapat menciptakan solusi teknologi yang bermanfaat 
                dan memiliki dampak positif bagi masyarakat.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
              <Award className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prestasi</h3>
              <p className="text-gray-300">
                Aktif dalam berbagai kompetisi programming dan telah menyelesaikan 
                beberapa proyek freelance di bidang web development dan desain.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Keahlian Utama</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Code className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-sm text-gray-300">Full Stack</p>
                </div>
                <div className="text-center">
                  <Palette className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Design</h4>
                  <p className="text-sm text-gray-300">UI/UX & Grafis</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Marketing</h4>
                  <p className="text-sm text-gray-300">Digital Strategy</p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Web Tech</h4>
                  <p className="text-sm text-gray-300">Modern Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;