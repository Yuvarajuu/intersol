import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sections = ['home', 'about', 'services', 'careers', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { name: 'About Us', id: 'home' },
    { name: 'Company', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Careers', id: 'careers' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-white/90 backdrop-blur-md py-6 border-b border-gray-100'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="bg-transparent border-none cursor-pointer flex items-center p-0">
            <img src={logo} alt="insertSol Logo" className="h-28 w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-semibold hover:text-accent transition-colors bg-transparent border-none cursor-pointer ${activeSection === link.id ? 'text-accent' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg cursor-pointer border-none">
              Contact Us
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brandDark bg-transparent border-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-lg font-semibold text-left bg-transparent border-none cursor-pointer ${activeSection === link.id ? 'text-accent' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="text-lg font-semibold text-accent text-left bg-transparent border-none cursor-pointer">
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
