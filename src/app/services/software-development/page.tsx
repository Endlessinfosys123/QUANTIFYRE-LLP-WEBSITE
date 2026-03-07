"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Code2, Cpu, Cloud, Database, Lock, Terminal } from "lucide-react";
import Link from "next/link";

export default function SoftwareDevelopmentPage() {
    const features = [
        {
            title: "Custom Architecture",
            desc: "Bespoke software systems designed from the ground up to solve your unique operational challenges.",
            icon: <Code2 className="w-8 h-8" />
        },
        {
            title: "API Integration",
            desc: "Seamlessly connecting your ecosystem with robust, secure, and documented REST and GraphQL APIs.",
            icon: <Terminal className="w-8 h-8" />
        },
        {
            title: "Cloud Infrastructure",
            desc: "Scalable AWS and Azure deployments ensuring 99.99% uptime and elastic resource allocation.",
            icon: <Cloud className="w-8 h-8" />
        },
        {
            title: "Database Engineering",
            desc: "Optimized relational and NoSQL database models for lightning-fast querying and data integrity.",
            icon: <Database className="w-8 h-8" />
        },
        {
            title: "System Microservices",
            desc: "Decoupled monolithic applications into agile, independent services for easier scaling and maintenance.",
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: "Enterprise Security",
            desc: "Implementing zero-trust architectures and continuous vulnerability scanning protocols.",
            icon: <Lock className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Software"
                gradientText="Engineering"
                subtitle="Custom software solutions powered by intelligent design and cutting-edge technologies."
            />

            {/* Core Features Grid */}
            <section className="w-full py-24 relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-primary">Scale.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We build mission-critical backend systems and enterprise software that process millions of requests securely and efficiently.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <TiltCard className="h-full">
                                    <div className="p-8 h-full flex flex-col relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-accent mb-6 shadow-[inset_0_0_20px_rgba(27,109,133,0.3)]">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white hover:text-accent transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-foreground/60 leading-relaxed font-light">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Matrix Data Flow Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Data <span className="gradient-text">In Motion</span></h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                Modern software requires complex data orchestration. Our architectures are designed to stream, process, and analyze data in real-time, giving your business a decisive operational advantage.
                            </p>

                            <div className="pl-6 border-l-2 border-primary/30 space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <h4 className="text-white font-bold text-xl mb-2">Discovery & Architecture</h4>
                                    <p className="text-foreground/60 font-light">Deep mapping of your technical requirements to design an optimal, scalable infrastructure.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-background border-2 border-accent" />
                                    <h4 className="text-white font-bold text-xl mb-2">Agile Development</h4>
                                    <p className="text-foreground/60 font-light">Sprint-based engineering ensuring rapid iteration and transparent progress tracking.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(27,109,133,0.8)]" />
                                    <h4 className="text-white font-bold text-xl mb-2">CI/CD Deployment</h4>
                                    <p className="text-foreground/60 font-light">Automated testing and deployment pipelines for zero-downtime releases.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#050B14] backdrop-blur-md hidden lg:block">
                            {/* Server Rack / Data Flow visualization */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 p-8">
                                {[1, 2, 3, 4, 5].map((rack, i) => (
                                    <motion.div
                                        key={rack}
                                        className="w-full h-16 bg-black border border-white/10 rounded-lg flex items-center px-6 gap-4 relative overflow-hidden"
                                    >
                                        {/* Blinking lights */}
                                        <div className="flex gap-2 w-12 shrink-0">
                                            <motion.div
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                                className="w-2 h-2 rounded-full bg-accent"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                                className="w-2 h-2 rounded-full bg-primary"
                                            />
                                        </div>

                                        {/* Server ID */}
                                        <div className="text-xs font-mono text-white/30 truncate">
                                            NODE-{1024 + i * 4}_{Math.random().toString(36).substring(7).toUpperCase()}
                                        </div>

                                        {/* Data Stream */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full">
                                            <motion.div
                                                animate={{ translateX: ["0%", "200%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.7 }}
                                                className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-[#050B14] to-background border border-primary/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(27,109,133,0.1)]"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(27,109,133,0.1),transparent_70%)] pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Architecting <span className="gradient-text">The Future</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Stop adapting your business to off-the-shelf software. Let us build the exact system your enterprise needs to dominate.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(27,109,133,0.5)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Request Architecture Review
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
