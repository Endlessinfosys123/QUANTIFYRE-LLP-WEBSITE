"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Presentation, Globe, Code, Brain, Zap, Bot } from "lucide-react";

export default function ServicesPage() {
    const services = [
        { title: 'Digital Marketing', desc: 'AI-driven analytics and marketing strategies that maximize ROI and accelerate your brand growth.', icon: <Presentation className="w-12 h-12" />, link: "/services/digital-marketing" },
        { title: 'Website Development', desc: 'Neural web architectures built for performance, scale, and exceptional user experiences.', icon: <Globe className="w-12 h-12" />, link: "/services/website-development" },
        { title: 'Software Development', desc: 'Custom software solutions powered by intelligent design and cutting-edge technologies.', icon: <Code className="w-12 h-12" />, link: "/services/software-development" },
        { title: 'Application Development', desc: 'Mobile-first applications with AI-enhanced experiences for iOS and Android platforms.', icon: <Brain className="w-12 h-12" />, link: "/services/application-development" },
        { title: 'AI Automations', desc: 'Workflow automation that learns and adapts to your business processes securely.', icon: <Zap className="w-12 h-12" />, link: "/services/ai-automations" },
        { title: 'AI Tools Development', desc: 'Custom AI tools that transform your operations and unlock new possibilities.', icon: <Bot className="w-12 h-12" />, link: "/services/ai-tools-development" }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Our"
                gradientText="Services"
                subtitle="Comprehensive AI-powered solutions designed against the industry standard."
            />

            {/* Main Services Grid */}
            <section className="w-full py-32 relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">
                        {services.map((service, idx) => (
                            <TiltCard key={idx} className="h-full">
                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10 h-full">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent text-accent shadow-[inset_0_0_20px_rgba(27,109,133,0.3)] shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-foreground/60 leading-relaxed font-light text-lg mb-8">
                                                {service.desc}
                                            </p>
                                        </div>

                                        {/* Glowing Action Button inside card */}
                                        <motion.a
                                            href={service.link}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary group-hover:text-white transition-colors border border-primary/30 px-6 py-2 rounded-full hover:bg-primary/20"
                                        >
                                            Learn More <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Parallax */}
            <section className="w-full relative py-24 mb-10 overflow-hidden bg-black/50 border-y border-white/5">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Powered by <span className="gradient-text">Next-Gen Tech</span></h2>
                    <p className="text-foreground/50 max-w-2xl mx-auto text-lg mb-12">We use the most advanced frameworks and neural infrastructure to ensure high performance and scalability.</p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60">
                        {["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Framer Motion", "MongoDB"].map((tech, i) => (
                            <span key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm sm:text-base font-medium hover:border-accent hover:text-accent transition-all cursor-pointer">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
