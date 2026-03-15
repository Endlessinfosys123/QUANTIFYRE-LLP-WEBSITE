"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TechParticles from "@/components/ui/TechParticles";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import ThreeDAICore from "@/components/ui/services/3DAICore";
import { BrainCircuit, Cpu, Binary, Eye, Speech, Component } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import MagneticButton from "@/components/ui/MagneticButton";

export default function AIToolsDevelopmentPage() {
    const features = [
        {
            title: "Custom LLM Development",
            description: "Fine-tuning large language models on your proprietary datasets for specialized domain knowledge.",
            icon: <BrainCircuit className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: "Computer Vision",
            description: "Image and video analysis models for quality control, security, and retail insights.",
            icon: <Eye className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Predictive Analytics",
            description: "Neural networks that forecast market trends, inventory needs, and customer churn.",
            icon: <Cpu className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Natural Language Processing",
            description: "Advanced sentiment analysis, voice recognition, and semantic search algorithms.",
            icon: <Speech className="w-6 h-6" />,
            className: "md:col-span-2",
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background">
            <TechFloatingIcons />
            <TechParticles />
            <PageHeader
                title="AI Tools"
                gradientText="Development"
                subtitle="Custom intelligent models that transform your abstract data into concrete strategic advantages."
            />

            {/* Core Features Grid - Bento Style */}
            <section className="w-full py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Synthetic <span className="text-accent">Intelligence.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            Off-the-shelf AI isn't a competitive advantage because your rivals use it too. We build proprietary neural models that belong exclusively to you.
                        </p>
                    </motion.div>

                    <BentoGrid>
                        {features.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                className={item.className}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* ML Training Pipeline Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative w-full hidden lg:block">
                            <ThreeDAICore />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="gradient-text">Training</span> Lifecycle</h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                Building enterprise-grade AI is a rigorous scientific process. We handle the entire pipeline from raw data aggregation to edge deployment.
                            </p>

                            <div className="space-y-8 mt-12">
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-white font-bold text-xl mb-2">1. Vector Enrichment</h4>
                                    <p className="text-sm text-foreground/60 font-light">We capture, clean, and structure your messy raw data into high-quality vector embeddings ready for neural ingestion.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-primary font-bold text-xl mb-2">2. Architecture Tuning</h4>
                                    <p className="text-sm text-foreground/60 font-light">Choosing the absolute best base model and running thousands of hyperparameter tuning epochs.</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <PartnerLogos />

            {/* CTA Section */}
            <section className="w-full py-32 relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-accent/10 via-background to-primary/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute bottom-0 h-1/2 left-0 right-0 w-full bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Start Training Your <span className="gradient-text">AI</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        The companies that train their own models today will own their industries tomorrow.
                    </p>

                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="inline-flex relative px-10 py-5 overflow-hidden rounded-full bg-accent text-background font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(60,207,109,0.5)] items-center justify-center gap-3 z-10 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initialize Project
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </MagneticButton>
                </motion.div>
            </section>
        </div>
    );
}
