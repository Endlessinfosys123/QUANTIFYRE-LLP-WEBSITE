"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import PartnerLogos from "@/components/ui/PartnerLogos";
import { Presentation, Globe, Code, Brain, Zap, Bot, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

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
            desc: 'AI-driven analytics and marketing strategies that maximise ROI and accelerate your brand growth with real-time data intelligence.',
            icon: <Presentation className="w-12 h-12" />,
            link: "/services/digital-marketing",
            features: ['AI SEO & SEM', 'Social Media Intelligence', 'ROI Analytics', 'Brand Growth Strategy'],
        },
        {
            title: 'Website Development',
            desc: 'Neural web architectures built for performance, scale, and exceptional user experiences powered by the latest frameworks.',
            icon: <Globe className="w-12 h-12" />,
            link: "/services/website-development",
            features: ['Next.js & React', 'CMS Integration', 'Performance-First', 'SEO Architecture'],
        },
        {
            title: 'Software Development',
            desc: 'Custom software solutions powered by intelligent design, robust cloud-native architecture, and seamless integrations.',
            icon: <Code className="w-12 h-12" />,
            link: "/services/software-development",
            features: ['Cloud-Native Apps', 'API Development', 'DevOps CI/CD', 'Microservices'],
        },
        {
            title: 'Application Development',
            desc: 'Mobile-first applications with AI-enhanced experiences delivered for iOS and Android with native performance.',
            icon: <Brain className="w-12 h-12" />,
            link: "/services/application-development",
            features: ['React Native', 'Flutter', 'AI-Enhanced UX', 'Cross-Platform'],
        },
        {
            title: 'AI Automations',
            desc: 'Workflow automation that learns and adapts to your unique business processes, eliminating repetitive tasks at scale.',
            icon: <Zap className="w-12 h-12" />,
            link: "/services/ai-automations",
            features: ['Process Automation', 'Smart Integrations', 'Real-time Triggers', 'No-code Flows'],
        },
        {
            title: 'AI Tools Development',
            desc: 'Custom AI tools, intelligent agents, and LLM-powered applications that transform your operations and unlock new revenue.',
            icon: <Bot className="w-12 h-12" />,
            link: "/services/ai-tools-development",
            features: ['LLM Integration', 'Custom AI Models', 'Intelligent Agents', 'RAG Systems'],
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
                <FloatingServiceOrbs indices={[0, 1, 4, 5]} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <TiltCard key={idx} className="h-full" accentColor={serviceAccents[idx]}>
                                <div className="flex flex-col md:flex-row gap-7 items-start relative z-10 h-full">
                                    {/* Icon */}
                                    <div
                                        className={`p-5 rounded-2xl shrink-0 ${serviceGlowClass[idx]} group-hover:scale-110 transition-transform duration-500`}
                                        style={{
                                            background: isLight ? `${serviceAccents[idx]}14` : `${serviceAccents[idx]}18`,
                                            color: serviceAccents[idx],
                                        }}
                                    >
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between h-full flex-1">
                                        <div>
                                            <h3
                                                className="text-2xl font-bold mb-3 transition-colors"
                                                style={{ color: "var(--color-foreground)" }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p
                                                className="leading-relaxed font-light text-sm mb-5"
                                                style={{ color: "var(--color-foreground-muted)" }}
                                            >
                                                {service.desc}
                                            </p>

                                            {/* Feature Checklist */}
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                                                {service.features.map((feat, fi) => (
                                                    <div key={fi} className="flex items-center gap-2">
                                                        <CheckCircle2
                                                            className="w-3.5 h-3.5 shrink-0"
                                                            style={{ color: serviceAccents[idx] }}
                                                        />
                                                        <span
                                                            className="text-xs font-medium"
                                                            style={{ color: "var(--color-foreground-muted)" }}
                                                        >
                                                            {feat}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <motion.a
                                            href={service.link}
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="inline-flex items-center gap-2 self-start text-sm font-bold px-5 py-2 rounded-full border transition-all"
                                            style={{
                                                color: serviceAccents[idx],
                                                borderColor: `${serviceAccents[idx]}50`,
                                                background: `${serviceAccents[idx]}10`,
                                            }}
                                        >
                                            Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
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
