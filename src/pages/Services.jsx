import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, TrendingUp, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const servicesList = [
  {
    id: 'staffing',
    title: 'IT Staffing',
    icon: Users,
    features: ['Bulk hiring', 'Niche skill hiring', 'Fast turnaround'],
    problem: 'Companies struggle to find qualified tech talent quickly, delaying critical projects.',
    solution: 'We leverage a global talent pool to deploy the right experts to your team at unprecedented speed.',
    impact: 'Reduce time-to-hire by 40% and ensure your engineering teams are always fully resourced.',
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    icon: Briefcase,
    features: ['Strategic IT solutions', 'Digital transformation', 'Tech advisory'],
    problem: 'Organizations face complex digital landscapes holding back their growth.',
    solution: 'Our experts provide strategic roadmaps to modernize infrastructure and adopt new technologies.',
    impact: 'Future-proof your business operations and increase overall technological ROI.',
  },
  {
    id: 'bps',
    title: 'Business Process Services',
    icon: TrendingUp,
    features: ['Process optimization', 'Operational efficiency', 'Scalable support'],
    problem: 'Inefficient workflows consume valuable resources and reduce profitability.',
    solution: 'We analyze, optimize, and manage your business processes using best practices.',
    impact: 'Lower operational costs while drastically improving accuracy and efficiency.',
  },
  {
    id: 'tech',
    title: 'Technology Solutions',
    icon: Globe,
    features: ['Scalable solutions', 'Innovation-driven development', 'Enterprise systems'],
    problem: 'Off-the-shelf software often fails to meet unique enterprise needs.',
    solution: 'We design and build bespoke technology solutions tailored to your operational requirements.',
    impact: 'Gain a competitive edge with software that fits your workflow and scales with you.',
  }
];

const Services = () => {
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
              Solutions that <span className="text-accent">scale</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end services designed to empower your business, scale your teams, and accelerate digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Service Blocks */}
      {servicesList.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={service.id} className={`py-24 lg:py-32 ${isEven ? 'bg-white' : 'bg-secondary border-y border-slate-100'}`}>
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
              >
                {/* Text Content */}
                <div className={`max-w-xl ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <motion.div variants={fadeIn} className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mr-6 border border-sky-100">
                      <service.icon size={28} className="text-accent" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">{service.title}</h2>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="mb-8 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">The Solution</h4>
                      <p className="text-slate-600 leading-relaxed">{service.solution}</p>
                    </div>
                    <div className="bg-sky-50 border border-sky-100 p-6 rounded-2xl">
                      <h4 className="text-sm font-bold text-sky-700 uppercase tracking-widest mb-2">The Impact</h4>
                      <p className="text-slate-800 font-medium leading-relaxed">{service.impact}</p>
                    </div>
                  </motion.div>

                  <motion.ul variants={staggerContainer} className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li key={i} variants={fadeIn} className="flex items-center text-slate-700 font-medium">
                        <CheckCircle2 size={20} className="text-accent mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Abstract Visual */}
                <motion.div 
                  variants={fadeIn} 
                  className={`relative ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
                >
                  <div className="aspect-[4/3] saas-card bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'bl' : 'tr'} from-sky-50 to-transparent`}></div>
                    <div className="w-3/4 h-3/4 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center relative z-10">
                       <service.icon size={80} className="text-accent opacity-20" strokeWidth={1} />
                       <div className="absolute bottom-6 right-6 w-1/3 h-2 bg-slate-200 rounded-full"></div>
                       <div className="absolute bottom-10 right-6 w-1/4 h-2 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

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
              Ready to transform your business?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Partner with us to scale your capabilities and achieve operational excellence. Let's discuss your specific requirements.
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-600 transition-colors shadow-lg hover:-translate-y-1 group">
              Talk to Our Experts
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
