import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/yuvaraju121204@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: formData.subject || "New Contact Form Submission - InsertSol"
        })
      });
      
      if (response.ok) {
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert('Oops! Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white pt-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-secondary border-b border-slate-100 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
              Let's <span className="text-accent">connect</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? We're here to help you build the future with top-tier talent and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="saas-card p-8 md:p-12 relative overflow-hidden bg-white">
                <h3 className="text-3xl font-extrabold mb-8 text-slate-900">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                      placeholder="e.g., General Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent hover:bg-sky-600 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-md group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Start Your Project'}
                    {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-12 order-1 lg:order-2"
            >
              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-slate-900">Get in touch directly</h3>
                <div className="space-y-8">
                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mr-6 border border-sky-100 flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1 text-lg">Email Us</h4>
                      <p className="text-slate-600">contact@insertsol.com</p>
                      <p className="text-slate-600">careers@insertsol.com</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mr-6 border border-sky-100 flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1 text-lg">Call Us</h4>
                      <p className="text-slate-600">+1 (800) 123-4567</p>
                      <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mr-6 border border-sky-100 flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1 text-lg">Global Headquarters</h4>
                      <p className="text-slate-600 leading-relaxed">123 Innovation Drive<br/>Tech City, TC 90210<br/>United States</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div variants={fadeIn} className="saas-card bg-sky-50 border-none p-8">
                <MessageSquare className="text-accent mb-4" size={32} />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Looking for a career?</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">Check out our open positions and apply directly on our careers page to join our growing global team.</p>
                <a href="#careers" className="text-accent font-bold hover:text-sky-700 transition-colors uppercase tracking-widest text-sm flex items-center group">
                  Explore Careers <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
