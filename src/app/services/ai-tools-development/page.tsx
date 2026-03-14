"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { BrainCircuit, Cpu, Binary, Eye, Speech, Component } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";

export default function AIToolsDevelopmentPage() {
    const features = [
        {
            title: "Custom LLM Development",
            desc: "Fine-tuning large language models on your proprietary datasets for specialized domain knowledge.",
            icon: <BrainCircuit className="w-8 h-8" />
        },
        {
            title: "Computer Vision",
            desc: "Image and video analysis models for quality control, security, and retail insights.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: "Predictive Analytics",
            desc: "Neural networks that forecast market trends, inventory needs, and customer churn.",
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: "Natural Language Processing",
            desc: "Advanced sentiment analysis, voice recognition, and semantic search algorithms.",
            icon: <Speech className="w-8 h-8" />
        },
        {
            title: "Algorithmic Trading",
            desc: "High-frequency models designed to exploit micro-inefficiencies in complex data markets.",
            icon: <Binary className="w-8 h-8" />
        },
        {
            title: "API Productization",
            desc: "Turning your custom AI models into scalable SaaS products you can monetize.",
            icon: <Component className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="AI Tools"
                gradientText="Development"
                subtitle="Custom intelligent models that transform your abstract data into concrete strategic advantages."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Synthetic <span className="text-accent">Intelligence.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            Off-the-shelf AI isn't a competitive advantage because your rivals use it too. We build proprietary neural models that belong exclusively to you.
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

            {/* ML Training Pipeline Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block group">
                            {/* Abstract Machine Learning Matrix visualization */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(60,207,109,0.1),rgba(0,0,0,0))]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                {/* Input Layer */}
                                <div className="flex gap-4 mb-12">
                                    {[1, 2, 3, 4, 5].map((node) => (
                                        <motion.div
                                            key={`input-${node}`}
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: node * 0.2 }}
                                            className="w-4 h-4 rounded-full bg-white/30 border border-white/50"
                                        />
                                    ))}
                                </div>

                                {/* Hidden Layers */}
                                <div className="flex gap-8 mb-12 relative">
                                    {/* connecting lines background */}
                                    <div className="absolute inset-0 top-[-2rem] bottom-[-2rem] left-[-2rem] right-[-2rem] opacity-20 hidden md:block"
                                        style={{ backgroundImage: 'linear-gradient(rgba(27,109,133,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(60,207,109,0.5) 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}
                                    ></div>

                                    {[1, 2, 3, 4, 5, 6, 7].map((node) => (
                                        <motion.div
                                            key={`hidden1-${node}`}
                                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
                                            className="w-6 h-6 rounded-full bg-primary/80 shadow-[0_0_15px_rgba(27,109,133,0.8)] relative z-10"
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-6 mb-12">
                                    {[1, 2, 3, 4, 5].map((node) => (
                                        <motion.div
                                            key={`hidden2-${node}`}
                                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
                                            className="w-5 h-5 rounded-full bg-accent/80 shadow-[0_0_15px_rgba(60,207,109,0.8)] relative z-10"
                                        />
                                    ))}
                                </div>

                                {/* Output Layer */}
                                <div className="flex gap-16">
                                    {[1, 2].map((node) => (
                                        <motion.div
                                            key={`output-${node}`}
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: node * 0.5 }}
                                            className="w-12 h-12 rounded-lg bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center text-black font-bold text-xs"
                                        >
                                            Out
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
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
                                    <h4 className="text-white font-bold text-xl mb-2">1. Data Sanitization & Enrichment</h4>
                                    <p className="text-sm text-foreground/60 font-light">We capture, clean, and structure your messy raw data into high-quality vector embeddings ready for neural ingestion.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-primary font-bold text-xl mb-2">2. Architecture Selection & Tuning</h4>
                                    <p className="text-sm text-foreground/60 font-light">Choosing the absolute best base model (Transformers, CNNs, GANs) and running thousands of hyperparameter tuning epochs.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-bold text-xl mb-2">3. Inference Optimization</h4>
                                    <p className="text-sm text-foreground/60 font-light">Compressing and quantizing the final models to ensure they run with millisecond latency and minimal compute costs in production.</p>
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
                    <div className="absolute bottom-0 h-1/2 left-0 right-0 w-full bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Start Training Your <span className="gradient-text">AI</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        The companies that train their own models today will own their industries tomorrow.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-accent text-background font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(60,207,109,0.4)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Project
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
