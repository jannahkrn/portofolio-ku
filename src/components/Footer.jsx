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
    { name: "Tentang", id: "about" },
    { name: "Pendidikan", id: "education" },
    { name: "Pengalaman", id: "experience" },
    { name: "Keahlian", id: "skills" },
    { name: "Proyek", id: "projects" },
    { name: "Kontak", id: "contact" },
  ];

  const services = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Digital Marketing", icon: TrendingUp },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      color: "hover:text-gray-300",
      description: "Lihat kode & kontribusi",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-400",
      description: "Connect secara profesional",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@gmail.com",
      color: "hover:text-green-400",
      description: "Kirim email langsung",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Fullstack Developer Portfolio
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Mahasiswa passionate yang menggabungkan keahlian teknis dalam
                pengembangan web, kreativitas dalam desain, dan strategi dalam
                digital marketing untuk menciptakan solusi digital yang inovatif
                dan berdampak.
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Layanan</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-800 rounded-lg border border-gray-700 ${social.color} transition-all group hover:border-gray-600 hover:transform hover:scale-110`}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Kontak</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:your.email@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  your.email@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Lokasi</p>
                <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ingin mendapat update tentang proyek terbaru dan tips development?
              Subscribe untuk mendapat newsletter bulanan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} Portfolio.</span>
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>menggunakan React & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Versi 2.0</span>
                <span>•</span>
                <span>
                  Last updated: {new Date().toLocaleDateString("id-ID")}
                </span>
              </div>

              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all group"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
