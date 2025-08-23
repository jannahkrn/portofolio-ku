import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Phone, MapPin, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@gmail.com',
      link: 'mailto:your.email@gmail.com',
      description: 'Kirim email untuk diskusi proyek',
      color: 'text-blue-400',
      hoverColor: 'hover:border-blue-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
      description: 'Chat langsung via WhatsApp',
      color: 'text-green-400',
      hoverColor: 'hover:border-green-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: '#',
      description: 'Connect untuk networking',
      color: 'text-purple-400',
      hoverColor: 'hover:border-purple-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/yourusername',
      link: '#',
      description: 'Lihat semua repository',
      color: 'text-yellow-400',
      hoverColor: 'hover:border-yellow-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      link: '#',
      description: 'Available for remote work',
      color: 'text-red-400',
      hoverColor: 'hover:border-red-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      link: '#',
      description: 'Fast response guaranteed',
      color: 'text-indigo-400',
      hoverColor: 'hover:border-indigo-500'
    }
  ];

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-Commerce Solution',
    'Custom Software',
    'Konsultasi IT',
    'Lainnya'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Discuss Later'
  ];

  const timelines = [
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
        projectType: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Punya ide proyek menarik? Atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. 
            Saya siap membantu mewujudkan visi digital Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Informasi Kontak
              </span>
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link} 
                  className={`flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 ${contact.hoverColor} transition-all group`}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <contact.icon className={`w-6 h-6 ${contact.color} group-hover:scale-110 transition-transform`} />
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{contact.title}</h4>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                    <p className="text-gray-500 text-xs">{contact.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-lg border border-gray-700 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-400">Available for New Projects</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Saat ini saya terbuka untuk menerima proyek baru. Baik itu freelance, 
                part-time, atau kolaborasi jangka panjang.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Remote work friendly</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Flexible timeline</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Competitive rates</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold mb-4 text-center">Statistik Kerja</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">98%</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">24h</div>
                  <div className="text-xs text-gray-400">Avg Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-xs text-gray-400">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-orange-400" />
                  Kirim Pesan
                </span>
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-green-400 font-medium">Pesan berhasil dikirim!</p>
                    <p className="text-green-300 text-sm">Terima kasih, saya akan membalas dalam 24 jam.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-red-400 font-medium">Mohon lengkapi semua field yang diperlukan.</p>
                    <p className="text-red-300 text-sm">Nama, email, dan pesan harus diisi.</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Jenis Proyek
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Pilih jenis proyek</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Pilih budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline Proyek
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Pilih timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject pesan"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Detail Proyek *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ceritakan detail proyek Anda, kebutuhan, dan ekspektasi..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengirim Pesan...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Field yang wajib diisi. Pesan akan dibalas dalam 24 jam.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pertanyaan yang Sering Diajukan
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Berapa lama waktu pengerjaan proyek?",
                a: "Waktu pengerjaan tergantung kompleksitas proyek. Website sederhana 1-2 minggu, aplikasi kompleks 2-6 bulan. Saya akan memberikan timeline yang realistis setelah diskusi detail."
              },
              {
                q: "Apakah menerima proyek jarak jauh?",
                a: "Ya, saya sangat terbuka untuk proyek remote. Sudah berpengalaman bekerja dengan client dari berbagai kota dan negara dengan komunikasi yang efektif."
              },
              {
                q: "Bagaimana sistem pembayaran?",
                a: "Biasanya sistem pembayaran bertahap: 50% di awal, 25% di tengah, dan 25% setelah selesai. Untuk proyek kecil bisa full payment di akhir. Fleksibel sesuai kesepakatan."
              },
              {
                q: "Apakah menyediakan maintenance?",
                a: "Ya, saya menyediakan layanan maintenance dan support setelah proyek selesai. Ada paket maintenance bulanan atau support per kebutuhan."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-blue-400 mb-3">{faq.q}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;