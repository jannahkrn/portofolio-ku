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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jannahkurnia15@gmail.com',
      link: 'mailto:jannahkurnia15@gmail.com',
      description: 'Kirim email untuk diskusi proyek',
      color: 'text-blue-400',
      hoverColor: 'hover:border-blue-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 878 4771 2820',
      link: 'https://wa.me/6287847712820',
      description: 'Chat langsung via WhatsApp',
      color: 'text-green-400',
      hoverColor: 'hover:border-green-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/jannahkurniawati',
      link: 'https://www.linkedin.com/in/jannahkurniawati',
      description: 'Connect untuk networking',
      color: 'text-purple-400',
      hoverColor: 'hover:border-purple-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/jannahkrn',
      link: 'https://github.com/jannahkrn',
      description: 'Lihat semua repository',
      color: 'text-yellow-400',
      hoverColor: 'hover:border-yellow-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Bandung, Jawa Barat, Indonesia',
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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Punya ide proyek menarik? Atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. 
            Saya siap membantu mewujudkan visi digital Anda!
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-left text-violet-700">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-violet-700" />
                  Kirim Pesan
                </span>
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-green-600 font-medium">Pesan berhasil dikirim!</p>
                    <p className="text-green-500 text-sm">Terima kasih, saya akan membalas dalam 24 jam.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-red-600 font-medium">Mohon lengkapi semua field yang diperlukan.</p>
                    <p className="text-red-500 text-sm">Nama, email, dan pesan harus diisi.</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-sm font-medium text-violet-600 mb-2">
                    Nama Lengkap *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-violet-600 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                {/* Pesan */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-violet-600 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    rows={5}
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-8 w-full py-3 px-6 bg-gradient-to-r from-violet-400 to-purple-400 text-white font-semibold rounded-lg shadow-md hover:from-violet-500 hover:to-purple-500 transition-all disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </div>
        </div>
        {/* Info Box Centered di bawah form */}
        <div className="flex justify-center w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full w-full px-4">
            {/* Box Available */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg min-h-[220px] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Available for New Projects
              </h3>
              <p className="text-gray-700 mb-4">
                Saat ini saya terbuka untuk menerima proyek baru. Baik itu freelance, 
                part-time, atau kolaborasi jangka panjang.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Remote work friendly</li>
                <li>✔ Flexible timeline</li>
                <li>✔ Competitive rates</li>
              </ul>
            </div>
            {/* Box Statistik Kerja */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg min-h-[220px] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Statistik Kerja
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">98%</span>
                  <p className="text-gray-600 text-sm text-center">Client Satisfaction</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-green-600">24h</span>
                  <p className="text-gray-600 text-sm text-center">Avg Response</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">50+</span>
                  <p className="text-gray-600 text-sm text-center">Projects Done</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-orange-600">3+</span>
                  <p className="text-gray-600 text-sm text-center">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
