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

      {/* Services Grid */}
      <section className="w-full py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <FloatingServiceOrbs indices={[0, 2, 4, 7]} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
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
              Our <span className="gradient-text">Neural</span> Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-light" style={{ color: "var(--color-foreground-muted)" }}>
              Comprehensive AI-powered solutions designed to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <TiltCard key={idx} className="h-full" accentColor={serviceAccents[idx]}>
                {/* Service Icon */}
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
                  className="text-xl font-bold mb-3 transition-colors"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed font-light mb-5" style={{ color: "var(--color-foreground-muted)" }}>
                  {service.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: isLight ? `${serviceAccents[idx]}12` : `${serviceAccents[idx]}18`,
                        color: serviceAccents[idx],
                        border: `1px solid ${serviceAccents[idx]}35`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Success Metric Badge */}
                {service.metric && (
                  <div 
                    className="mt-3 py-1 px-3 rounded-lg inline-block self-start"
                    style={{ 
                      background: `${serviceAccents[idx]}10`, 
                      border: `1px solid ${serviceAccents[idx]}30` 
                    }}
                  >
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: serviceAccents[idx] }}
                    >
                      Impact: {service.metric}
                    </span>
                  </div>
                )}

                <div
                  className="mt-auto pt-5 flex justify-between items-center group/btn cursor-pointer"
                  style={{ borderTop: `1px solid var(--color-divider)` }}
                >
                  <Link
                    href="/services"
                    className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    style={{ color: serviceAccents[idx] }}
                  >
                    Explore Module
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work Section */}
      <section
        ref={processRef}
        className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: isLight ? "rgba(27,109,133,0.04)" : "rgba(27,109,133,0.04)", borderTop: `1px solid var(--color-divider)`, borderBottom: `1px solid var(--color-divider)` }}
      >
        {/* Decorative orb */}
        <div className="absolute right-0 top-0 w-[30rem] h-[30rem] rounded-full blur-[150px] pointer-events-none opacity-20"
          style={{ background: "var(--color-primary)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 badge-glow" style={{ color: "var(--color-accent)" }}>
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--color-foreground)" }}>
              From <span className="gradient-text">Idea</span> to Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] overflow-hidden" style={{ zIndex: 0 }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                className="h-full origin-left"
                style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}
              />
            </div>

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center p-7 rounded-2xl group"
                style={{
                  background: isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.03)",
                  border: `1px solid var(--color-card-border)`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Step Number */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                    boxShadow: "var(--shadow-glow-primary)",
                  }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center text-white"
                    style={{ background: "var(--color-accent)" }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-foreground)" }}>
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--color-foreground-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, var(--color-background), transparent, var(--color-background))` }} />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={activeTestimonial === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className={activeTestimonial === i ? "block" : "hidden"}
            >
              <div className="mb-8" style={{ color: "var(--color-accent)" }}>
                <svg className="w-14 h-14 mx-auto opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10" style={{ color: "var(--color-foreground)" }}>
                "{t.quote.split(t.highlight)[0]}
                <span className="gradient-text font-bold not-italic">{t.highlight}</span>
                {t.quote.split(t.highlight)[1]}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, starIdx) => (
                  <motion.span
                    key={starIdx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + starIdx * 0.1 }}
                    className="text-2xl"
                    style={{ color: "#FFB800" }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-[2px] rounded-full mb-4" style={{ background: "var(--color-primary)" }} />
                <h4 className="font-bold text-lg tracking-wide" style={{ color: "var(--color-foreground)" }}>— {t.author}</h4>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-foreground-muted)" }}>{t.role}</p>
              </div>
            </motion.div>
          ))}

          {/* Testimonial Selectors */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? "w-8" : "opacity-30"}`}
                style={{ background: "var(--color-primary)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <PartnerLogos />

      {/* Why Choose Us Strip */}
      <section
        className="w-full py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: isLight ? "rgba(27,109,133,0.05)" : "rgba(255,255,255,0.02)", borderTop: `1px solid var(--color-divider)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "AI-First Approach", desc: "Every solution is enhanced with intelligent automation." },
              { label: "Rapid Delivery", desc: "MVP in weeks, not months — without compromising quality." },
              { label: "Scalable by Design", desc: "Architecture built to scale as your business grows." },
              { label: "Dedicated Support", desc: "Round-the-clock team committed to your success." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "var(--color-accent)" }} />
                  <h4 className="font-bold text-sm" style={{ color: "var(--color-foreground)" }}>{item.label}</h4>
                </div>
                <p className="text-xs leading-relaxed font-light" style={{ color: "var(--color-foreground-muted)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 relative overflow-hidden" style={{ borderTop: `1px solid var(--color-divider)` }}>
        {/* Animated mesh */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: isLight
                ? "radial-gradient(ellipse at center, rgba(27,109,133,0.15) 0%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(27,109,133,0.12) 0%, transparent 70%)",
            }}
          />
          {/* Pulsing rings */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pulse-ring"
              style={{
                width: `${i * 200 + 100}px`,
                height: `${i * 200 + 100}px`,
                border: `1px solid rgba(60, 207, 109, ${0.15 / i})`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 badge-glow"
              style={{ color: "var(--color-accent)" }}
            >
              Let's Build Together
            </span>
            <h2
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
              style={{ color: "var(--color-foreground)" }}
            >
              Ready to{" "}
              <span className="gradient-text">Quantify</span>{" "}
              Growth?
            </h2>
            <p
              className="text-lg mb-12 font-light max-w-2xl mx-auto"
              style={{ color: "var(--color-foreground-muted)" }}
            >
              Let's discuss how our AI-powered solutions can transform your business and accelerate your success — at measurable scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  boxShadow: "0 0 50px rgba(27,109,133,0.4), 0 0 100px rgba(60,207,109,0.1)",
                }}
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto border"
                style={{
                  color: "var(--color-foreground)",
                  borderColor: "var(--color-divider)",
                  background: isLight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.04)",
                }}
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
