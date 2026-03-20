"use client";

import { motion, useInView } from "framer-motion";
import { Presentation, Globe, Code, Brain, Zap, Bot, ArrowRight, CheckCircle2, Search, Palette, Rocket, TrendingUp } from "lucide-react";
import AnimatedHero from "@/components/ui/AnimatedHero";
import TiltCard from "@/components/ui/TiltCard";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import Link from 'next/link';
import { useTheme } from "@/components/layout/ThemeProvider";
import { useRef, useState, useEffect } from "react";
import PartnerLogos from "@/components/ui/PartnerLogos";

const serviceAccents = ["#FF8C00", "#1B6D85", "#A020F0", "#3CCF6D", "#FF3C50", "#00B4FF"];
const serviceGlowClass = [
  "service-glow-marketing",
  "service-glow-web",
  "service-glow-software",
  "service-glow-app",
  "service-glow-automation",
  "service-glow-ai",
];

const processSteps = [
  { icon: Search, label: "Discover", desc: "We analyse your business goals, challenges, and market position deeply." },
  { icon: Palette, label: "Design", desc: "Our team crafts AI-enhanced strategies and stunning digital experiences." },
  { icon: Rocket, label: "Deploy", desc: "Lightning-fast deployment with zero-downtime and performance guarantees." },
  { icon: TrendingUp, label: "Grow", desc: "Continuous optimisation powered by real-time data and AI insights." },
];

const testimonials = [
  {
    quote: "QUANTIFYRE transformed our digital presence with their AI-powered solutions. Our conversion rates increased by 300% within just 3 months.",
    author: "Enterprise Client",
    role: "Global E-commerce · India",
    rating: 5,
    highlight: "300%"
  },
  {
    quote: "The team's expertise in AI automation saved us hundreds of hours in manual processes. They are truly pioneers in neural architectures.",
    author: "Tech Solutions Inc.",
    role: "SaaS Provider · USA",
    rating: 5,
    highlight: "hundreds of hours"
  },
  {
    quote: "Exceptional quality and speed. They delivered our MVP in record time with a level of sophistication we didn't think possible.",
    author: "Agile Ventures",
    role: "Startup Hub · Europe",
    rating: 5,
    highlight: "record time"
  }
];

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: 'Digital Marketing', desc: 'AI-driven analytics and strategies that maximise ROI and accelerate brand growth.', icon: <Presentation className="w-10 h-10" />, features: ['SEO & SEM Campaigns', 'Social Media AI', 'Data Analytics'], metric: 'Avg. 40% Increase in Lead Gen' },
    { title: 'Website Development', desc: 'Neural web architectures built for performance, scale, and exceptional UX.', icon: <Globe className="w-10 h-10" />, features: ['Next.js & React', 'CMS Integration', 'Performance-first'], metric: 'Sub-second Load Times' },
    { title: 'Software Development', desc: 'Custom software solutions powered by intelligent design and cutting-edge tech.', icon: <Code className="w-10 h-10" />, features: ['Cloud-native Apps', 'API Architecture', 'DevOps CI/CD'], metric: '99.9% System Uptime' },
    { title: 'Application Development', desc: 'Mobile-first applications with AI-enhanced experiences for iOS and Android.', icon: <Brain className="w-10 h-10" />, features: ['React Native', 'Flutter Apps', 'AI-enhanced UX'], metric: '4.8+ Avg. App Store Rating' },
    { title: 'AI Automations', desc: 'Workflow automation that learns and adapts to your business processes.', icon: <Zap className="w-10 h-10" />, features: ['Process Automation', 'Smart Integrations', 'Real-time Triggers'], metric: '70% Reduction in Manual Tasks' },
    { title: 'AI Tools Development', desc: 'Custom AI tools that transform your operations and unlock new possibilities.', icon: <Bot className="w-10 h-10" />, features: ['LLM Integration', 'Custom AI Models', 'Intelligent Agents'], metric: 'Custom LLM Training Expert' },
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden" style={{ background: "var(--color-background)" }}>

      {/* Hero */}
      <AnimatedHero />

      {/* Services Grid (Bento) */}
      <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="neural-surface" />
        <FloatingServiceOrbs indices={[0, 2, 4, 7]} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 badge-glow"
              style={{ color: "var(--color-accent)" }}
            >
              What We Build
            </span>
            <h2
              className="text-4xl md:text-6xl font-black mb-5 tracking-tight"
              style={{ color: "var(--color-foreground)" }}
            >
              Enterprise <span className="gradient-text">AI & Software</span> Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-light" style={{ color: "var(--color-foreground-muted)" }}>
              Specialised AI-powered digital transformation and high-performance software engineering designed to accelerate your business growth.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[280px] lg:auto-rows-[300px] preserve-3d"
          >
            {services.map((service, idx) => {
              let spanClass = "lg:col-span-4 lg:row-span-1";
              if (idx === 0) spanClass = "md:col-span-2 lg:col-span-5 lg:row-span-2 h-full";
              if (idx === 1) spanClass = "md:col-span-2 lg:col-span-7 lg:row-span-1";
              if (idx === 4) spanClass = "md:col-span-2 lg:col-span-4 lg:row-span-1";
              if (idx === 5) spanClass = "md:col-span-2 lg:col-span-3 lg:row-span-1";

              return (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 30 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  className={`relative group preserve-3d ${spanClass}`}
                >
                  <TiltCard 
                    className="h-full glass-3d"
                    accentColor={serviceAccents[idx]}
                  >
                    <div
                      className={`mb-6 p-4 rounded-2xl inline-block shrink-0 ${serviceGlowClass[idx]}`}
                      style={{
                        background: isLight
                          ? `${serviceAccents[idx]}15`
                          : `${serviceAccents[idx]}18`,
                        color: serviceAccents[idx],
                      }}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 transition-colors underline-offset-4 group-hover:underline"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed font-light ${idx === 0 ? "text-base mb-6" : "text-sm mb-4"}`} style={{ color: "var(--color-foreground-muted)" }}>
                      {service.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, idx === 0 ? 4 : 2).map((f, fi) => (
                          <span
                            key={fi}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                            style={{
                              background: isLight ? `${serviceAccents[idx]}12` : `${serviceAccents[idx]}18`,
                              color: serviceAccents[idx],
                              border: `1px solid ${serviceAccents[idx]}30`,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      
                      {idx === 0 ? (
                        <motion.div 
                          className="pt-4 border-t border-divider flex items-center gap-2 group/btn cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-bold" style={{ color: serviceAccents[idx] }}>Explore High-Scale Solutions</span>
                          <ArrowRight size={16} style={{ color: serviceAccents[idx] }} className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.div>
                      ) : (
                        <div className="pt-2">
                           <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5" style={{ color: serviceAccents[idx] }}>
                             <CheckCircle2 size={12} /> {service.metric}
                           </span>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Process Section */}
      <section
        ref={processRef}
        className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          background: isLight ? "rgba(27,109,133,0.06)" : "rgba(27,109,133,0.04)", 
          borderTop: `1px solid var(--color-divider)`, 
          borderBottom: `1px solid var(--color-divider)` 
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 badge-glow" style={{ color: "var(--color-accent)" }}>
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--color-foreground)" }}>
              Engineering <span className="gradient-text">Excellence</span> Loop
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] opacity-20" style={{ zIndex: 0, background: "var(--color-divider)" }} />
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px]" style={{ zIndex: 1 }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                className="h-full origin-left"
                style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))", boxShadow: "0 0 10px var(--color-accent)" }}
              />
            </div>

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl group transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: isLight ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.03)",
                  border: `1px solid var(--color-divider)`,
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                    boxShadow: "var(--shadow-glow-primary)",
                  }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  <span
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center text-white"
                    style={{ background: "var(--color-accent)", boxShadow: "0 4px 12px rgba(60, 207, 109, 0.4)" }}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--color-foreground)" }}>
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed font-light opacity-80" style={{ color: "var(--color-foreground-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full relative py-32 overflow-hidden bg-section-alt">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-12 opacity-50 flex justify-center gap-1">
            {[1,2,3,4,5].map(s => <CheckCircle2 key={s} size={16} className="text-accent" />)}
          </div>
          
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={activeTestimonial === i ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className={activeTestimonial === i ? "block" : "hidden"}
            >
              <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12" style={{ color: "var(--color-foreground)" }}>
                "{t.quote.split(t.highlight)[0]}
                <span className="gradient-text font-bold not-italic">{t.highlight}</span>
                {t.quote.split(t.highlight)[1]}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
                <h4 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>{t.author}</h4>
                <p className="text-sm uppercase tracking-widest opacity-60 mt-1" style={{ color: "var(--color-foreground)" }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeTestimonial === i ? "w-12 bg-accent" : "w-4 bg-divider"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 orb-primary blur-[160px] -translate-x-1/2" />
        <div className="absolute inset-0 orb-accent blur-[140px] translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
              style={{ color: "var(--color-foreground)" }}
            >
              Scale Your <span className="gradient-text">Digital</span> Impact
            </h2>
            <p
              className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto opacity-70"
              style={{ color: "var(--color-foreground)" }}
            >
              Start your transformation today. Expert AI engineering tailored for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-primary text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-xl">
                  Launch Your Project <ArrowRight className="w-6 h-6" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 glass-card font-bold rounded-2xl hover:bg-white/5 transition-colors border border-divider text-xl"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
