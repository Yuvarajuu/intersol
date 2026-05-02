import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Target, CheckCircle2, Award, UserPlus, Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Careers = () => {
  return (
    <div className="w-full bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-soft text-center border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-brandDark uppercase">
              Find Your <span className="text-accent">Dream Job</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Problem solvers and creative thinkers. Engineers and new business builders. Put your talents to use where opportunities are limitless and every day makes a difference. Whether you're an experienced professional or a recent graduate, working with insertSol is a rewarding next step in your career.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="px-8 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                View Open Positions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accelerate Your Career - Image Left, Text Right */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] saas-card bg-slate-50 flex flex-col justify-center items-center text-center relative overflow-hidden p-8">
                 <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-transparent"></div>
                 <UserPlus size={80} className="text-accent mb-6 relative z-10" strokeWidth={1.5} />
                 <h3 className="text-2xl font-bold text-brandDark relative z-10 mb-4">Empowering Talent</h3>
                 <p className="text-slate-600 relative z-10">We provide professional services to Government agencies, corporations, and institutions.</p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Growth</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-6 text-brandDark leading-tight">
                Accelerate your career.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg mb-6 leading-relaxed">
                insertSol offers exceptional career opportunities for exceptional people. Our workplace and culture is optimized to attract and reward highly skilled and customer-focused business and technology professionals.
              </motion.p>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our IT specialists leverage their existing talents and expertise, with ample opportunities to hone new skills. insertSol is at the forefront of strategy and technology consulting.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  'Continual learning and skill development',
                  'Balanced work-life integration',
                  'Meaningful recognition for your achievements'
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent mr-3" size={24} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-secondary border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brandDark">Benefits of <span className="text-accent">Joining Us</span></h2>
            <p className="text-slate-600 text-lg">We are dedicated to innovation and excellence. Whether you are an individual contributor or in management, insertSol has opportunities ready for you to seize.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Innovation', desc: 'We promote open communication at all levels with a strong emphasis on promoting innovation.' },
              { icon: Heart, title: 'Employee Focus', desc: 'We believe employees are the cornerstone of the company and commit to investing in their future.' },
              { icon: Star, title: 'Training & Development', desc: 'Providing necessary training to advance your career goals and broaden proficiencies.' },
              { icon: Target, title: 'Limitless Potential', desc: 'A challenging and rewarding environment where every day makes a real difference.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="saas-card bg-white p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                  <benefit.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brandDark">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at insertSol - Text Left, Image Right */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Culture</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-8 text-brandDark leading-tight">
                Life at insertSol
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { title: 'Our Human Capital', desc: 'At insertSol, our human capital is the key driver for our growth and effectiveness. We believe that sustainable success can be reached only through our people.' },
                  { title: 'Unrivalled Opportunities', desc: 'No other asset is as important as the people who contribute to our culture. insertSol offers unrivalled opportunities to realize your highest potential.' },
                  { title: 'Continuous Learning', desc: 'Learning is facilitated through a blended approach of in-house programs and external trainings encompassing behavioral, technical, and management areas.' },
                  { title: 'Merit-Based Rewards', desc: 'Talent acquisition, performance management, and merit-based rewards are performed to retain our talent pool and provide an amiable workplace.' }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex flex-col">
                    <h3 className="text-xl font-bold text-brandDark mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] saas-card bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden p-8">
                 <div className="absolute inset-0 bg-gradient-to-bl from-sky-50 to-transparent"></div>
                 <div className="flex gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center"><Award className="text-slate-400" /></div>
                    <div className="w-20 h-20 bg-accent rounded-full shadow-lg border border-sky-400 flex items-center justify-center -mt-4"><Star className="text-white w-10 h-10" /></div>
                    <div className="w-16 h-16 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center"><Target className="text-slate-400" /></div>
                 </div>
                 <h4 className="text-xl font-bold text-brandDark relative z-10 mb-2">Knowledge-Sharing</h4>
                 <p className="text-slate-600 text-center relative z-10 text-sm">Expanding the skills of our team members every day.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
