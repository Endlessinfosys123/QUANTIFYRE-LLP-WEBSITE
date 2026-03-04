"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Globe, Zap, Presentation, Bot } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Digital Marketing', desc: 'AI-driven analytics and strategies maximizing ROI.', icon: <Presentation className="w-8 h-8" /> },
    { title: 'Website Development', desc: 'Neural web architectures built for performance and scale.', icon: <Globe className="w-8 h-8" /> },
    { title: 'Software Development', desc: 'Custom software solutions powered by intelligent design.', icon: <Code className="w-8 h-8" /> },
    { title: 'Application Development', desc: 'Mobile-first applications with AI-enhanced experiences.', icon: <Brain className="w-8 h-8" /> },
    { title: 'AI Automations', desc: 'Workflow automation that learns and adapts to your business.', icon: <Zap className="w-8 h-8" /> },
    { title: 'AI Tools Development', desc: 'Custom AI tools that transform your operations.', icon: <Bot className="w-8 h-8" /> }
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden">

      {/* Hero Section */}
      <section className="w-full relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>

        <div className="max-w-7xl mx-auto z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              QUANTIFYRE IRIS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            The Future, <span className="gradient-text">Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Transforming businesses with AI-powered digital solutions, intelligent automation, and cutting-edge technology that quantifies growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-blue-600 transition-all shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive <span className="text-primary">AI Solutions</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">Designed to accelerate your digital transformation and drive measurable results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="mb-6 p-4 rounded-2xl bg-primary/10 text-primary inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
