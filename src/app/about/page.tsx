"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import { Target, Eye, Zap, Shield, Users } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import PartnerLogos from "@/components/ui/PartnerLogos";

export default function AboutPage() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const values = [
        {
            title: "Cutting-Edge Technology",
            desc: "Leveraging the latest AI advancements to deliver solutions that keep you ahead of the curve.",
            icon: <Zap className="w-8 h-8" />, color: "#FF8C00"
        },
        {
            title: "Client-Centric",
            desc: "Your success is our priority. We work closely with every client to exceed expectations every time.",
            icon: <Users className="w-8 h-8" />, color: "#1B6D85"
        },
        {
            title: "Secure & Scalable",
            desc: "Enterprise-grade architecture built with security and scalability at its core, growing with you.",
            icon: <Shield className="w-8 h-8" />, color: "#3CCF6D"
        }
    ];

    const timeline = [
        {
            phase: "Phase 1", title: "Foundation",
            desc: "Founded with a bold vision — democratize AI technology and make it accessible for every business.",
            color: "#1B6D85"
        },
        {
            phase: "Phase 2", title: "Growth & Expansion",
            desc: "Expanded service offerings, grew the team, and delivered 200+ projects across multiple industries.",
            color: "#A020F0"
        },
        {
            phase: "Phase 3", title: "IRIS Launch",
            desc: "Building QUANTIFYRE IRIS — our groundbreaking AI-powered geo-fencing marketing intelligence platform.",
            color: "#3CCF6D"
        }
    ];

    return (
        <div
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            <PageHeader
                title="About"
                gradientText="QUANTIFYRE"
                subtitle="On a mission to accelerate businesses with intelligent AI-powered solutions."
            />

            {/* Mission & Vision */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full relative overflow-hidden">
                {/* Floating orbs for this section */}
                <FloatingServiceOrbs indices={[0, 1, 4]} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        {/* Mission */}
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{ background: "rgba(27,109,133,0.12)", border: "1px solid rgba(27,109,133,0.3)" }}
                                >
                                    <Target className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                                </div>
                                <h2 className="text-3xl font-bold" style={{ color: "var(--color-foreground)" }}>Our Mission</h2>
                            </div>
                            <p className="text-lg leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                                To accelerate digital transformation for businesses of all sizes by providing accessible, innovative AI-powered solutions that drive measurable growth and efficiency.
                            </p>
                        </div>

                        {/* Vision */}
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{ background: "rgba(60,207,109,0.1)", border: "1px solid rgba(60,207,109,0.3)" }}
                                >
                                    <Eye className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                                </div>
                                <h2 className="text-3xl font-bold" style={{ color: "var(--color-foreground)" }}>Our Vision</h2>
                            </div>
                            <p className="text-lg leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                                To become the leading force in AI-driven business solutions — making advanced technology accessible to every organisation and shaping a future where intelligent automation empowers human potential.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3D Rotating Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[420px] w-full hidden lg:flex items-center justify-center"
                    >
                        {/* Outer ring */}
                        <div
                            className="absolute w-80 h-80 rounded-full spin-slow"
                            style={{ border: `2px dashed rgba(27,109,133,0.25)` }}
                        />
                        {/* Middle ring */}
                        <div
                            className="absolute w-56 h-56 rounded-full"
                            style={{
                                border: `1px solid var(--color-accent)`,
                                opacity: 0.3,
                                animation: "spinSlow 8s linear infinite reverse"
                            }}
                        />
                        {/* Center card */}
                        <motion.div
                            animate={{ rotateY: [0, 8, -8, 0], rotateX: [0, -4, 4, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-52 h-52 rounded-3xl flex items-center justify-center"
                            style={{
                                background: isLight
                                    ? "rgba(255,255,255,0.9)"
                                    : "rgba(27,109,133,0.12)",
                                border: "1px solid rgba(27,109,133,0.3)",
                                backdropFilter: "blur(12px)",
                                boxShadow: `0 20px 60px rgba(27,109,133,0.25)`,
                            }}
                        >
                            <Target
                                className="w-24 h-24 animate-pulse"
                                style={{ color: isLight ? "var(--color-primary)" : "rgba(255,255,255,0.4)" }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section
                className="w-full py-28 relative overflow-hidden"
                style={{ background: "var(--color-section-alt)", borderTop: `1px solid var(--color-divider)`, borderBottom: `1px solid var(--color-divider)` }}
            >
                <FloatingServiceOrbs indices={[2, 3, 5]} />

                {/* Decorative orb */}
                <div className="absolute left-0 top-0 w-[24rem] h-[24rem] orb-primary" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 badge-glow" style={{ color: "var(--color-accent)" }}>
                            Our DNA
                        </span>
                        <h2 className="text-4xl font-black mb-3" style={{ color: "var(--color-foreground)" }}>Core Values</h2>
                        <p style={{ color: "var(--color-foreground-muted)" }}>The principles that drive our innovation and fuel our passion.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="glass-card p-8 group"
                            >
                                <div
                                    className="mb-6 p-4 rounded-2xl inline-block"
                                    style={{
                                        background: `${v.color}15`,
                                        border: `1px solid ${v.color}35`,
                                        color: v.color,
                                    }}
                                >
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-foreground)" }}>
                                    {v.title}
                                </h3>
                                <p className="leading-relaxed text-sm" style={{ color: "var(--color-foreground-muted)" }}>
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-28 relative overflow-hidden">
                <FloatingServiceOrbs indices={[6, 7]} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative z-10"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 badge-glow" style={{ color: "var(--color-accent)" }}>
                        Our Story
                    </span>
                    <h2 className="text-4xl font-black" style={{ color: "var(--color-foreground)" }}>The Journey</h2>
                </motion.div>

                <div
                    className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:rounded-full"
                    style={{ '--tw-before-background': 'var(--color-primary)' } as React.CSSProperties}
                >
                    {/* Manual timeline line since Tailwind before: doesn't work with CSS vars easily */}
                    <div className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 -translate-x-px"
                        style={{ background: `linear-gradient(to bottom, transparent, var(--color-primary), var(--color-accent), transparent)` }} />

                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-full border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
                                style={{
                                    background: "var(--color-background)",
                                    borderColor: item.color,
                                    boxShadow: `0 0 15px ${item.color}60`,
                                }}
                            >
                                <div className="w-3 h-3 rounded-full animate-ping" style={{ background: item.color }} />
                            </div>

                            {/* Card */}
                            <div
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 relative z-10"
                            >
                                <span
                                    className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
                                    style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}35` }}
                                >
                                    {item.phase}
                                </span>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-foreground)" }}>
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Partner Logos Strip */}
            <PartnerLogos />
        </div>
    );
}
