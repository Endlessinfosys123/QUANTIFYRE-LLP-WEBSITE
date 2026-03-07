"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Target, TrendingUp, BarChart, Megaphone, Users, Search } from "lucide-react";
import Link from "next/link";

export default function DigitalMarketingPage() {
    const features = [
        {
            title: "Data-Driven SEO",
            desc: "Dominate search rankings with AI-optimized content strategies and technical SEO architectures.",
            icon: <Search className="w-8 h-8" />
        },
        {
            title: "Performance Advertising",
            desc: "Hyper-targeted campaigns across Google, Meta, and LinkedIn designed for maximum ROI and minimal waste.",
            icon: <Target className="w-8 h-8" />
        },
        {
            title: "Conversion Optimization",
            desc: "Neural network analysis of user behavior to refine funnels and drastically improve conversion rates.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Social Media Dominance",
            desc: "Engaging, algorithm-friendly content that builds communities and amplifies your brand voice.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Predictive Analytics",
            desc: "Advanced machine learning models that forecast trends and customer lifetime value.",
            icon: <BarChart className="w-8 h-8" />
        },
        {
            title: "Brand Strategy & Positioning",
            desc: "Crafting distinct, memorable identities that resonate in crowded digital landscapes.",
            icon: <Megaphone className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Digital"
                gradientText="Marketing"
                subtitle="AI-driven analytics and marketing strategies that maximize ROI and accelerate your brand growth."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Quantifiable <span className="text-primary">Results.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We don't just run ads. We engineer complex growth engines that scale predictably using proprietary data models.
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

            {/* Strategy Workflow Section */}
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Neural</span> Approach</h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                Standard marketing relies on educated guesses. We utilize machine learning to test thousands of variables simultaneously, finding the absolute optimal path to conversion before you spend your budget.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { step: "01", title: "Data Ingestion", desc: "We analyze your current digital footprint and competitors." },
                                    { step: "02", title: "Predictive Modeling", desc: "Simulating campaign outcomes using historical industry data." },
                                    { step: "03", title: "Algorithmic Deployment", desc: "Launching optimized campaigns across selected channels." },
                                    { step: "04", title: "Continuous Learning", desc: "Real-time adjustments based on AI-driven performance metrics." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-6 items-start">
                                        <span className="text-accent font-black text-xl shrink-0 mt-1">{item.step}</span>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-foreground/60 font-light text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block">
                            {/* Abstract 3D visualization placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    className="w-[400px] h-[400px] border-[1px] border-accent/20 rounded-full border-dashed flex items-center justify-center"
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="w-[300px] h-[300px] border-[1px] border-primary/40 rounded-full border-dotted flex items-center justify-center shadow-[0_0_50px_rgba(27,109,133,0.2)]"
                                    >
                                        <div className="w-[150px] h-[150px] bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                                <div className="text-xs text-accent mb-1 uppercase tracking-wider font-bold">Optimization Rate</div>
                                <div className="text-3xl font-black text-white">+84.2%</div>
                            </div>

                            <div className="absolute bottom-8 right-8 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl text-right">
                                <div className="text-xs text-primary mb-1 uppercase tracking-wider font-bold">Cost Per Acq</div>
                                <div className="text-3xl font-black text-white">-41.5%</div>
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
                    className="max-w-5xl mx-auto bg-gradient-to-br from-primary/20 via-background to-accent/10 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to <span className="gradient-text">Scale?</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Stop guessing with your marketing budget. Let our data-driven frameworks unlock your true growth potential.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(27,109,133,0.5)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Growth Campaign
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
