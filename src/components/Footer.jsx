import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Code,
  Palette,
  TrendingUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design and Grafis", icon: Palette },
    { name: "Digital Marketing", icon: TrendingUp },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jannahkrn",
      color: "hover:text-gray-300",
      description: "View my code & contributions",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jannahkurniawati",
      color: "hover:text-blue-400",
      description: "Connect professionally",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jannahkurnia15@gmail.com",
      color: "hover:text-green-400",
      description: "Send a direct email",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-left text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Fullstack Developer Portfolio
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md text-left">
                A passionate student combining technical expertise in web development, creativity in design, and strategic insight in digital marketing to create innovative and impactful digital solutions.
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-100 rounded-lg border border-gray-200 ${social.color} transition-all group hover:border-blue-200 hover:transform hover:scale-110`}
                    title={social.description}
                    target={social.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.url.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - tanpa kotak, underline putih saat hover */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 text-left">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block border-b-2 border-transparent hover:border-white px-0 pb-1 bg-transparent outline-none focus:outline-none ring-0 focus:ring-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info rata kiri */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a
                  href="mailto:jannahkurnia15@gmail.com"
                  className="text-blue-600 hover:text-blue-400 transition-colors text-sm"
                >
                  jannahkurnia15@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Location</p>
                <p className="text-gray-700 text-sm">Bandung, West Java, Indonesia</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Status</p>
                <div className="flex items-center gap-2 justify-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-600 text-sm">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>&copy; {currentYear} Portfolio.</span>
              <span>Made by Jannah Kurniawati</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>
                  Last updated: {new Date().toLocaleDateString("en-US")}
                </span>
              </div>

              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-100 rounded-full border border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all group"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;