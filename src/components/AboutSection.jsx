import React from 'react';
import { User, GraduationCap, Award, Code, Palette, TrendingUp, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
  <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building the Future of IT with Technology, Design, and Marketing for Creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-left">

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-100 hover:border-violet-200 transition-colors text-left shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4 mb-2">
                <User className="w-8 h-8 text-violet-400" />
                <h3 className="text-xl font-semibold text-violet-600">Background</h3>
              </div>
              <p className="text-slate-600">
                An active student who combines technical expertise in web development with creativity in design and digital marketing strategy.
              </p>
            </div>


            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 hover:border-purple-200 transition-colors text-left shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-600">Vision</h3>
              </div>
              <p className="text-slate-600">
                Become a developer who can create useful technological solutions 
                that have a positive impact on society.
              </p>
            </div>


            <div className="bg-rose-50 p-6 rounded-lg border border-rose-100 hover:border-rose-200 transition-colors text-left shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4 mb-2">
                <Award className="w-8 h-8 text-rose-400" />
                <h3 className="text-xl font-semibold text-rose-600">Achievement</h3>
              </div>
              <p className="text-slate-600">
                Active in various programming, design, and business competitions, and has completed 
                several freelance projects in various fields.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-rose-50 p-8 rounded-lg border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center text-violet-600">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Code className="w-12 h-12 text-violet-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-violet-600">Development</h4>
                  <p className="text-sm text-slate-500">Full Stack</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Palette className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-purple-600">Design</h4>
                  <p className="text-sm text-slate-500">UI/UX & Grafis</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <TrendingUp className="w-12 h-12 text-rose-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-rose-600">Marketing</h4>
                  <p className="text-sm text-slate-500">Digital Strategy</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-indigo-600">Web Tech</h4>
                  <p className="text-sm text-slate-500">Modern Stack</p>
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