"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Eye, Target as Mission, Zap, Shield, Users } from "lucide-react";

export default function AboutPage() {
    const values = [
        { title: "Cutting-Edge Technology", desc: "Leveraging the latest AI advancements.", icon: <Zap className="w-8 h-8 text-primary" /> },
        { title: "Client-Centric", desc: "Your success is our priority. We work closely to exceed expectations.", icon: <Users className="w-8 h-8 text-primary" /> },
        { title: "Secure & Scalable", desc: "Enterprise-grade architecture growing with you.", icon: <Shield className="w-8 h-8 text-primary" /> }
    ];

    const timeline = [
        { year: "Phase 1", title: "Foundation", desc: "Founded with a vision to democratize AI technology for businesses." },
        { year: "Phase 2", title: "Growth & Expansion", desc: "Expanded our service offerings and team across multiple industries." },
        { year: "Phase 3", title: "IRIS Launch", desc: "Developing QUANTIFYRE IRIS, our revolutionary AI-powered geo-fencing marketing platform." }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="About"
                gradientText="QUANTIFYRE"
                subtitle="Empowering businesses with AI-driven solutions."
            />

            {/* Mission & Vision (Dual Split 3D Layout) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                    <Mission className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-foreground/60 text-lg leading-relaxed">
                                To accelerate digital transformation for businesses of all sizes by providing accessible, innovative AI-powered solutions that drive measurable growth and efficiency.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                                    <Eye className="w-6 h-6 text-accent" />
                                </div>
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                            </div>
                            <p className="text-foreground/60 text-lg leading-relaxed">
                                To become the leading force in AI-driven business solutions, making advanced technology accessible to every organization and shaping a future where intelligent automation empowers human potential.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3D Floating Element representation for About page */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] w-full hidden lg:block perspective-1000"
                    >
                        <motion.div
                            animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, -5, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center transform-style-3d shadow-[0_0_50px_rgba(27,109,133,0.3)]"
                        >
                            <Target className="w-32 h-32 text-white/50 animate-pulse" style={{ transform: "translateZ(50px)" }} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="w-full bg-black/50 py-32 border-y border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-foreground/50">Principles that drive our innovation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-8 group hover:border-primary/50"
                            >
                                <div className="mb-6">{v.icon}</div>
                                <h3 className="text-2xl font-semibold mb-3">{v.title}</h3>
                                <p className="text-foreground/60">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Timeline */}
            <section className="max-w-3xl mx-auto w-full px-4 sm:px-6 px-lg-8 py-32 relative">
                <h2 className="text-4xl font-bold text-center mb-16">The Journey</h2>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(27,109,133,0.5)]">
                                <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-primary">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
