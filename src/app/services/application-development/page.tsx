"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Smartphone, MonitorSmartphone, Layers, Fingerprint, Zap, Layers3 } from "lucide-react";
import Link from "next/link";

export default function ApplicationDevelopmentPage() {
    const features = [
        {
            title: "Native iOS & Android",
            desc: "High-performance applications written in Swift and Kotlin for ultimate device optimization.",
            icon: <Smartphone className="w-8 h-8" />
        },
        {
            title: "Cross-Platform",
            desc: "React Native and Flutter pipelines for rapid deployment across all app stores simultaneously.",
            icon: <MonitorSmartphone className="w-8 h-8" />
        },
        {
            title: "App Neural Architecture",
            desc: "On-device machine learning integration for intelligent, offline-capable features.",
            icon: <Layers3 className="w-8 h-8" />
        },
        {
            title: "Biometric Security",
            desc: "FaceID and fingerprint authentication mapped to secure server-side tokens.",
            icon: <Fingerprint className="w-8 h-8" />
        },
        {
            title: "Fluid Animations",
            desc: "60FPS interface transitions that feel natural, responsive, and completely seamless.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            title: "Micro-Interactions",
            desc: "Delightful UX details that increase user engagement and extend session duration.",
            icon: <Layers className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Application"
                gradientText="Development"
                subtitle="Mobile-first applications with AI-enhanced experiences for iOS and Android platforms."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pocket <span className="text-accent">Supercomputers.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We don't build standard apps. We engineer full-scale digital ecosystems designed to live on the world's most powerful mobile devices.
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
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-primary mb-6 shadow-[inset_0_0_20px_rgba(60,207,109,0.3)]">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white hover:text-primary transition-colors">
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

            {/* Device Showcase Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative h-[600px] w-full flex items-center justify-center hidden lg:flex">
                            {/* Abstract Phone visualization */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-white/10 bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_50px_rgba(27,109,133,0.3)] overflow-hidden"
                            >
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 bg-white/10 rounded-b-xl z-20 backdrop-blur-md border-b border-white/5"></div>

                                {/* Screen Content */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1118] to-background pt-12 px-6">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent"></div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="h-8 w-3/4 bg-white/10 rounded-lg"></div>
                                        <div className="h-4 w-1/2 bg-white/5 rounded-lg"></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5"></div>
                                        <div className="h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-white/5"></div>
                                        <div className="col-span-2 h-40 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/30 to-transparent"></div>
                                            <svg className="absolute bottom-0 w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 100 Q 25 20, 50 80 T 100 0 L 100 100 Z" fill="currentColor" fillOpacity="0.2" />
                                                <path d="M0 100 Q 25 20, 50 80 T 100 0" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Dock */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/5 flex items-center justify-around px-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-xl bg-white/10"></div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating elements behind phone */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -z-10 w-[500px] h-[500px] rounded-full border border-white/5 border-dashed" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute -z-10 w-[400px] h-[400px] rounded-full border border-primary/20" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Own The <span className="gradient-text">Home Screen</span></h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                Earning a place on your customer's most personal device requires flawless execution. We build applications that become daily habits.
                            </p>

                            <div className="space-y-8 mt-12">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">1</div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">Human-Centered Design</h4>
                                        <p className="text-sm text-foreground/60 font-light">Tailoring typography, gestures, and thumb-zones specifically for mobile ergonomics.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">2</div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">Offline Resilience</h4>
                                        <p className="text-sm text-foreground/60 font-light">Background sync and local databases ensure the app functions perfectly even in dead zones.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">3</div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">Store Mastery</h4>
                                        <p className="text-sm text-foreground/60 font-light">Navigating complex ASO (App Store Optimization) and strict review guidelines for fast approval.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-accent/10 via-background to-primary/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Launch Your <span className="gradient-text">App</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Turn your software vision into a tangible reality downloaded by millions worldwide.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-accent text-background font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(60,207,109,0.4)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Discuss Your Project
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
