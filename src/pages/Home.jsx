import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, LayoutDashboard, LineChart } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-soft">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
                Unstoppable <br />
                <span className="text-accent">Growth</span> Powered by Elite Talent.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Scale your engineering and operations seamlessly. insertSol connects visionary companies with global top-tier IT professionals and strategic solutions.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl flex items-center group">
                  Partner With Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Hero Visual Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="w-full aspect-square max-w-[600px] ml-auto relative">
                {/* Abstract SaaS Illustration Placeholder */}
                <div className="absolute inset-0 bg-white rounded-full shadow-2xl shadow-sky-100 flex items-center justify-center border border-slate-100">
                   <div className="w-3/4 h-3/4 bg-gradient-to-tr from-sky-50 to-white rounded-full flex flex-col items-center justify-center shadow-inner">
                      <LayoutDashboard className="text-accent w-32 h-32 opacity-20 mb-4" strokeWidth={1} />
                      <div className="flex gap-2">
                         <div className="w-16 h-4 bg-sky-100 rounded-full"></div>
                         <div className="w-8 h-4 bg-accent rounded-full"></div>
                      </div>
                   </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 saas-card p-4 animate-bounce">
                  <LineChart className="text-accent w-8 h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by the world's leading companies</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['TechCorp', 'InnovateInc', 'GlobalSys', 'NexusNet', 'CloudSync'].map((logo) => (
              <div key={logo} className="text-2xl font-black tracking-tighter text-slate-900">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Feature 1: Text Left, Image Right */}
      <section className="py-24 lg:py-32 relative bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <div className="max-w-xl">
              <motion.div variants={fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Strategic Staffing</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
                Deploy critical talent at unprecedented speed.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 mb-8 text-lg leading-relaxed">
                Stop waiting months to fill specialized engineering roles. Our global talent pool and rigorous vetting process mean you get the exact skills you need, exactly when you need them.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {['Access niche technical expertise', 'Rapid onboarding process', 'Scale up or down effortlessly'].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent mr-3" size={24} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeIn}>
                <a href="#services" className="text-accent font-bold flex items-center hover:text-sky-700 transition-colors group">
                  Explore IT Staffing <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn} className="relative">
              <div className="aspect-[4/3] saas-card bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-transparent"></div>
                {/* Abstract Visual */}
                <div className="grid grid-cols-2 gap-4 w-3/4 relative z-10">
                  <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center"><div className="w-12 h-12 bg-sky-100 rounded-full"></div></div>
                  <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center"><div className="w-12 h-12 bg-sky-100 rounded-full"></div></div>
                  <div className="h-32 bg-accent rounded-2xl shadow-lg flex items-center justify-center"><CheckCircle2 className="text-white w-10 h-10" /></div>
                  <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center"><div className="w-12 h-12 bg-sky-100 rounded-full"></div></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Alternating Feature 2: Image Left, Text Right */}
      <section className="py-24 lg:py-32 relative bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <motion.div variants={fadeIn} className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] saas-card bg-white flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-sky-50 to-transparent"></div>
                {/* Abstract Visual */}
                <div className="w-3/4 h-3/4 bg-slate-50 rounded-3xl border border-slate-100 p-6 flex flex-col gap-4 relative z-10">
                   <div className="w-full h-8 bg-sky-100 rounded-lg"></div>
                   <div className="w-3/4 h-8 bg-slate-200 rounded-lg"></div>
                   <div className="w-5/6 h-8 bg-slate-200 rounded-lg"></div>
                   <div className="mt-auto w-1/2 h-12 bg-accent rounded-xl"></div>
                </div>
              </div>
            </motion.div>

            <div className="max-w-xl order-1 lg:order-2">
              <motion.div variants={fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm mb-4">IT Consulting</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
                Transform your technology infrastructure.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 mb-8 text-lg leading-relaxed">
                Navigating digital transformation requires more than just tools. Our expert consultants provide the roadmap, architecture, and execution to modernize your legacy systems.
              </motion.p>
              <motion.div variants={fadeIn}>
                <a href="#services" className="text-accent font-bold flex items-center hover:text-sky-700 transition-colors group">
                  Discover IT Consulting <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-600 opacity-50 mix-blend-multiply pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { number: '5,000+', label: 'Positions Filled Globally' },
              { number: '95%', label: 'Client Retention Rate' },
              { number: '200+', label: 'Enterprise Partners' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pt-8 md:pt-0"
              >
                <h3 className="text-5xl md:text-6xl font-extrabold mb-4">
                  {stat.number}
                </h3>
                <p className="font-semibold tracking-wide text-sky-100 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="saas-card bg-gradient-soft p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Ready to accelerate your growth?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join the hundreds of companies that trust insertSol to build their engineering teams and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Your Project
              </a>
              <a href="#careers" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:bg-slate-50 transition-all hover:border-slate-300">
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
