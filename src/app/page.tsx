"use client";

import { motion } from "framer-motion";
import { Presentation, Globe, Code, Brain, Zap, Bot } from "lucide-react";
import AnimatedHero from "@/components/ui/AnimatedHero";
import TiltCard from "@/components/ui/TiltCard";
import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Digital Marketing', desc: 'AI-driven analytics and strategies maximizing ROI.', icon: <Presentation className="w-10 h-10" /> },
    { title: 'Website Development', desc: 'Neural web architectures built for performance and scale.', icon: <Globe className="w-10 h-10" /> },
    { title: 'Software Development', desc: 'Custom software solutions powered by intelligent design.', icon: <Code className="w-10 h-10" /> },
    { title: 'Application Development', desc: 'Mobile-first applications with AI-enhanced experiences.', icon: <Brain className="w-10 h-10" /> },
    { title: 'AI Automations', desc: 'Workflow automation that learns and adapts to your business.', icon: <Zap className="w-10 h-10" /> },
    { title: 'AI Tools Development', desc: 'Custom AI tools that transform your operations.', icon: <Bot className="w-10 h-10" /> }
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden">

      {/* 3D Animated Hero Section */}
      <AnimatedHero />

      {/* Services Grid with 3D TiltCards */}
      <section className="w-full py-32 bg-background px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our <span className="gradient-text">Neural</span> Services</h2>
            <p className="text-foreground/50 max-w-2xl mx-auto text-xl font-light">Comprehensive AI-powered solutions designed to accelerate your digital transformation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent text-accent inline-block shadow-[inset_0_0_20px_rgba(27,109,133,0.3)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/50 leading-relaxed font-light text-lg">
                  {service.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center group/btn cursor-pointer">
                  <span className="text-sm font-semibold text-primary group-hover/btn:text-accent transition-colors">Discover Module</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-accent/20 transition-all">
                    <span className="text-accent group-hover/btn:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Story Section with Parallax Effect */}
      <section className="w-full relative py-32 flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-x-0 inset-y-[-50%] bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop')] bg-cover bg-center opacity-10 bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/80 to-background" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-10 text-accent">
              <svg className="w-16 h-16 mx-auto opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-light italic leading-relaxed text-white">
              "QUANTIFYRE transformed our digital presence with their AI-powered solutions. Our conversion rates increased by <span className="text-accent font-bold">300%</span> within 3 months."
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-2">
              <span className="w-12 h-1 bg-primary rounded-full mb-4" />
              <h4 className="font-bold text-xl tracking-wide">— Enterprise Client</h4>
              <p className="text-foreground/50 text-sm tracking-widest uppercase">Global E-commerce</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-background relative border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Ready to <span className="gradient-text">Quantify</span> Growth?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/60 mb-12 font-light"
          >
            Let's discuss how our AI-powered solutions can transform your business and accelerate your success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-primary text-white font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(27,109,133,0.5)] flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
