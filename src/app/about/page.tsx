"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    const milestones = [
        { title: "Founded", desc: "Started with a vision to revolutionize digital workflows." },
        { title: "500+ Projects", desc: "Successfully delivered solutions across diverse industries." },
        { title: "98% Satisfaction", desc: "Maintained exceptional quality and client success rates." },
        { title: "AI Integration", desc: "Pioneered automated, intelligent software systems." },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Pioneering the <span className="gradient-text">Future</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                    At QUANTIFYRE, we believe in building technology that doesn't just meet today's standards, but defines tomorrow's expectations. We are architects of digital transformation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-foreground/70 leading-relaxed mb-6 text-lg">
                        To empower businesses worldwide by providing AI-powered digital logic, intelligent automation, and scalable software architectures that quantify growth and maximize efficiency.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Relentless Innovation",
                            "Client-Centric Solutions",
                            "Transparent Operations",
                            "Future-Ready Architectures"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-foreground/80">
                                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative h-96 rounded-2xl overflow-hidden glass-card flex items-center justify-center p-8"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
                    <p className="text-2xl md:text-3xl font-light text-center relative z-10 italic text-foreground/80">
                        "Innovation distinguishes between a leader and a follower."
                    </p>
                </motion.div>
            </div>

            <div className="py-20 border-t border-white/10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                    <p className="text-foreground/70">Milestones that define our commitment to excellence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 border-l-4 border-l-primary flex flex-col justify-center"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-foreground/60 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
