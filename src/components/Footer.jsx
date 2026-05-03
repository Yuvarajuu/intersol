import React from 'react';
import logo from '../assets/logo.png';

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const Footer = () => {
  const scrollTo = (id, e) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-secondary py-16 text-slate-600 text-sm">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <button onClick={() => scrollTo('home')} className="mb-4 inline-flex items-center bg-transparent border-none cursor-pointer p-0">
            <img src={logo} alt="insertSol Logo" className="h-32 w-auto object-contain" />
          </button>
          <p className="mt-2 leading-relaxed">
            Empowering global businesses with scalable tech talent and strategic consulting solutions.
          </p>
        </div>

        <div>
          <h4 className="text-brandDark font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-4">
            <li><button onClick={() => scrollTo('about')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">About Us</button></li>
            <li><button onClick={() => scrollTo('careers')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Careers</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brandDark font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-4">
            <li><button onClick={() => scrollTo('staffing')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">IT Staffing</button></li>
            <li><button onClick={() => scrollTo('consulting')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">IT Consulting</button></li>
            <li><button onClick={() => scrollTo('bps')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Business Process</button></li>
            <li><button onClick={() => scrollTo('tech')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Technology Solutions</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brandDark font-bold mb-6 uppercase tracking-wider text-xs">Connect</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} insertSol. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <a href="#" className="hover:text-slate-800">Privacy Policy</a>
          <a href="#" className="hover:text-slate-800">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
