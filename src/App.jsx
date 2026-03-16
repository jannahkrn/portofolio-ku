import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'contact', 'footer'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'contact', 'footer'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <div id="hero">
          <HeroSection scrollToSection={scrollToSection} />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <div id="education">
          <EducationSection />
        </div>

        <div id="experience">
          <ExperienceSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;