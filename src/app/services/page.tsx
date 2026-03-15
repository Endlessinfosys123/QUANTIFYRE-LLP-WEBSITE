"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import PartnerLogos from "@/components/ui/PartnerLogos";
import { Presentation, Globe, Code, Brain, Zap, Bot } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import MagneticButton from "@/components/ui/MagneticButton";
import { useTheme } from "@/components/layout/ThemeProvider";
import Link from "next/link";

const serviceAccents = ["#FF8C00", "#1B6D85", "#A020F0", "#3CCF6D", "#FF3C50", "#00B4FF"];
const serviceGlowClass = [
    "service-glow-marketing",
    "service-glow-web",
    "service-glow-software",
    "service-glow-app",
    "service-glow-automation",
    "service-glow-ai",
];

export default function ServicesPage() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const services = [
        {
            title: 'Digital Marketing',
            description: 'AI-driven analytics and marketing strategies that maximise ROI and accelerate brand growth.',
            icon: <Presentation className="w-8 h-8" />,
            link: "/services/digital-marketing",
            className: "md:col-span-2",
            color: "#FF8C00"
        },
        {
            title: 'Website Development',
            description: 'Neural web architectures built for performance and scale.',
            icon: <Globe className="w-8 h-8" />,
            link: "/services/website-development",
            className: "md:col-span-1",
            color: "#1B6D85"
        },
        {
            title: 'Software Development',
            description: 'Custom software solutions powered by intelligent design and robust cloud-native architecture.',
            icon: <Code className="w-8 h-8" />,
            link: "/services/software-development",
            className: "md:col-span-1",
            color: "#A020F0"
        },
        {
            title: 'Application Development',
            description: 'Mobile-first applications with AI-enhanced experiences for iOS and Android.',
            icon: <Brain className="w-8 h-8" />,
            link: "/services/application-development",
            className: "md:col-span-2",
            color: "#3CCF6D"
        },
        {
            title: 'AI Automations',
            description: 'Workflow automation that learns and adapts to your unique business processes.',
            icon: <Zap className="w-8 h-8" />,
            link: "/services/ai-automations",
            className: "md:col-span-2",
            color: "#FF3C50"
        },
        {
            title: 'AI Tools Development',
            description: 'Custom AI tools and intelligent agents that transform your operations.',
            icon: <Bot className="w-8 h-8" />,
            link: "/services/ai-tools-development",
            className: "md:col-span-1",
            color: "#00B4FF"
        }
    ];

    const techStack = ["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Framer Motion", "MongoDB", "PostgreSQL", "OpenAI"];

    return (
        <div
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            {/* Animated background mesh */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 70%)`,
                        filter: "blur(120px)",
                        opacity: 0.1,
                    }}
                />
            </div>
            <PageHeader
                title="Our"
                gradientText="Services"
                subtitle="Comprehensive AI-powered solutions designed against the industry standard — and beyond."
            />

            {/* Main Services Grid */}
            <section className="w-full py-28 relative z-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <FloatingServiceOrbs indices={[0, 1, 4, 5]} />                <div className="max-w-7xl mx-auto relative z-10">
                    <BentoGrid>
                        {services.map((service, idx) => (
                            <BentoGridItem
                                key={idx}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                className={service.className}
                                header={
                                    <div className="flex justify-end mt-2">
                                        <MagneticButton>
                                            <Link
                                                href={service.link}
                                                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-all"
                                                style={{
                                                    color: service.color,
                                                    borderColor: `${service.color}50`,
                                                    background: `${service.color}10`,
                                                }}
                                            >
                                                Details →
                                            </Link>
                                        </MagneticButton>
                                    </div>
                                }
                            />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section
                className="w-full relative py-20 mb-10 overflow-hidden"
                style={{ background: isLight ? "rgba(27,109,133,0.04)" : "rgba(255,255,255,0.02)", borderTop: `1px solid var(--color-divider)`, borderBottom: `1px solid var(--color-divider)` }}
            >
                {/* Gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), var(--color-accent), transparent)" }} />

                <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 badge-glow"
                            style={{ color: "var(--color-accent)" }}
                        >
                            Tech Stack
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black mb-5"
                            style={{ color: "var(--color-foreground)" }}
                        >
                            Powered by <span className="gradient-text">Next-Gen Tech</span>
                        </h2>
                        <p
                            className="max-w-2xl mx-auto text-lg mb-12 font-light"
                            style={{ color: "var(--color-foreground-muted)" }}
                        >
                            We deploy the most advanced frameworks and AI infrastructure to deliver high-performance, scalable solutions.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.08 }}
                                className="px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all"
                                style={{
                                    border: `1px solid var(--color-card-border)`,
                                    background: "var(--color-card-bg)",
                                    color: "var(--color-foreground-muted)",
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Logos Strip */}
            <PartnerLogos />
        </div>
    );
}
