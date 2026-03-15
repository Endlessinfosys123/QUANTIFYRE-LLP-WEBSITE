"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import ThreeDAppDevice from "@/components/ui/services/3DAppDevice";
import { Smartphone, MonitorSmartphone, Layers, Fingerprint, Zap, Layers3 } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";

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
            <TechFloatingIcons />
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

                        <div className="relative w-full hidden lg:block">
                            <ThreeDAppDevice />
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

            {/* Partner Logos Strip */}
            <PartnerLogos />

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
