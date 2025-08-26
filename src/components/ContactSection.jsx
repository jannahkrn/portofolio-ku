import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send, Phone, MapPin, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_l5sjkhq'; 
    const templateId = 'template_susburu'; 
    const publicKey = 'njdBF3XdYR4aFXzRt'; 

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
          e.target.reset(); // Mengosongkan form setelah terkirim
          setTimeout(() => setSubmitStatus(null), 5000); // Menghilangkan pesan status setelah 5 detik
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jannahkurnia15@gmail.com',
      link: 'mailto:jannahkurnia15@gmail.com',
      description: 'Send an email to discuss projects',
      color: 'text-blue-400',
      hoverColor: 'hover:border-blue-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 878 4771 2820',
      link: 'https://wa.me/6287847712820',
      description: 'Chat directly via WhatsApp',
      color: 'text-green-400',
      hoverColor: 'hover:border-green-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/jannahkurniawati',
      link: 'https://www.linkedin.com/in/jannahkurniawati',
      description: 'Connect for networking',
      color: 'text-purple-400',
      hoverColor: 'hover:border-purple-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/jannahkrn',
      link: 'https://github.com/jannahkrn',
      description: 'View all repositories',
      color: 'text-yellow-400',
      hoverColor: 'hover:border-yellow-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bandung, West Java, Indonesia',
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
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Let's Collaborate
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have an exciting project idea? Or want to collaborate? Don't hesitate to contact me.
            I'm ready to help bring your digital vision to life!
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full">
            <div className="bg-white p-8 rounded-lg border border-violet-200 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-left text-violet-700">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-violet-700" />
                  Send a Message
                </span>
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-green-600 font-medium">Message sent successfully!</p>
                    <p className="text-green-500 text-sm">Thank you, I will reply within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-red-600 font-medium">Failed to send message.</p>
                    <p className="text-red-500 text-sm text-left">Please try again or contact me directly.</p>
                  </div>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-violet-600 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="from_name" // Sesuaikan dengan variabel di template EmailJS
                      placeholder="Janjun"
                      className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-violet-700"
                      required
                    />
                  </div>
                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-violet-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="from_email" // Sesuaikan dengan variabel di template EmailJS
                      placeholder="janjun@example.com"
                      className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-violet-700"
                      required
                    />
                  </div>
                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-violet-600 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message" // Sesuaikan dengan variabel di template EmailJS
                      placeholder="HI JANJUNNN! Let us connect and collaborate on projects!"
                      className="w-full px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-violet-700"
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-auto px-8 py-3 bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 font-semibold rounded-lg shadow-md hover:from-violet-300 hover:to-purple-300 transition-all disabled:opacity-60 mx-auto block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Info Box Centered below form */}
        <div className="flex justify-center w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full w-full px-4">
            {/* Available Box */}
            <div className="bg-violet-50 border border-violet-200 p-6 rounded-2xl shadow-lg min-h-[220px] flex flex-col justify-center hover:shadow-xl active:scale-95 transition cursor-pointer">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Available for New Projects
              </h3>
              <p className="text-gray-700 mb-4 text-left">
                I am currently open to new projects, whether freelance,
                part-time, or long-term collaboration.
              </p>
              <ul className="space-y-2 text-gray-600 text-left">
                <li>✔ Remote work friendly</li>
                <li>✔ Flexible timeline</li>
                <li>✔ Competitive rates</li>
              </ul>
            </div>
            {/* Work Statistics Box */}
            <div className="bg-violet-50 border border-violet-200 p-6 rounded-2xl shadow-lg min-h-[220px] flex flex-col justify-center hover:shadow-xl active:scale-95 transition cursor-pointer">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Work Statistics
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