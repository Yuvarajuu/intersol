import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Award, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const About = () => {
  return (
    <div className="w-full bg-white pt-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-secondary border-b border-slate-100 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold mb-6 text-brandDark tracking-tight">
              Building a <span className="text-accent">bold new future</span>.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              insertSol focuses on providing advanced information technology, consulting, and business process services. We deliver superior value and innovative solutions to industry partners throughout the globe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview - Text Left / Visual Right */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <div className="max-w-xl">
              <motion.div variants={fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-brandDark">
                Operational excellence as an extension of your business.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 mb-6 text-lg leading-relaxed">
                insertSol is a global information technology, consulting, and business process services company. We have the capability to close a large number of IT positions within a short time as well as the ability to find candidates with hard-to-hire niche skills.
              </motion.p>
              <motion.p variants={fadeIn} className="text-slate-600 mb-8 text-lg leading-relaxed">
                Together, we discover ideas and connect the dots to build a better future. We remain loyal to our heritage of operational excellence, reflected by the best client satisfaction scores in the industry.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  'Advanced information technology services',
                  'Strategic consulting & process optimization',
                  'Innovative sensing, connectivity, and motion solutions',
                  'Committed to bringing valuable industry skills to each engagement'
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeIn} className="relative">
              <div className="saas-card bg-white p-2 relative overflow-hidden rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <img src="/assets/about_team.png" alt="insertSol Team" className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Grid Layout */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brandDark">Driven by <span className="text-accent">Values</span></h2>
            <p className="text-lg text-slate-600">
              The principles that guide our decisions, our partnerships, and our commitment to operational excellence. With insertSol, you get a partner who is committed to helping you build and implement better solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', icon: Zap, desc: 'Continuously pushing boundaries to deliver innovative sensing and connectivity solutions.' },
              { title: 'Speed', icon: Zap, desc: 'Capability to close a large number of IT positions within a remarkably short time.' },
              { title: 'Trust', icon: Shield, desc: 'Remaining loyal to our heritage as a true extension of our clients\' business.' },
              { title: 'Client Success', icon: Award, desc: 'Reflected by consistently holding the best client satisfaction scores in the industry.' },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.1,
                  y: -12,
                  rotate: 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                className="saas-card p-8 bg-white cursor-pointer"
              >
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                  <val.icon className="text-accent" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-brandDark">{val.title}</h4>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
