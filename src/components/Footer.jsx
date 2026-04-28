import React from 'react';

const Footer = () => {
  const scrollTo = (id, e) => {
    if(e) e.preventDefault();
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
          <button onClick={() => scrollTo('home')} className="text-2xl font-extrabold tracking-tight mb-4 inline-block text-slate-900 bg-transparent border-none cursor-pointer p-0">
            insert<span className="text-accent">Sol</span>
          </button>
          <p className="mt-2 leading-relaxed">
            Empowering global businesses with scalable tech talent and strategic consulting solutions.
          </p>
        </div>
        
        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-4">
            <li><button onClick={() => scrollTo('about')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">About Us</button></li>
            <li><button onClick={() => scrollTo('careers')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Careers</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-4">
            <li><button onClick={() => scrollTo('services')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">IT Staffing</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">IT Consulting</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Business Process</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-accent font-medium transition-colors bg-transparent border-none cursor-pointer p-0 text-slate-600">Technology Solutions</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-xs">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-accent font-medium transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent font-medium transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-accent font-medium transition-colors">Facebook</a></li>
          </ul>
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
