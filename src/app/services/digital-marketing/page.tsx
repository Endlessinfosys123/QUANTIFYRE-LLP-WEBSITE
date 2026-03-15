"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import PartnerLogos from "@/components/ui/PartnerLogos";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import ThreeDGrowthHelix from "@/components/ui/services/3DGrowthHelix";
import { Target, TrendingUp, BarChart, Megaphone, Users, Search } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import MagneticButton from "@/components/ui/MagneticButton";

export default function DigitalMarketingPage() {
    const features = [
        {
            title: "Data-Driven SEO",
            description: "Dominate search rankings with AI-optimized content strategies and technical SEO architectures.",
            icon: <Search className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: "Performance Ads",
            description: "Hyper-targeted campaigns across Google and Meta designed for maximum ROI.",
            icon: <Target className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Conversion Optimization",
            description: "Neural network analysis of user behavior to refine funnels and improve rates.",
            icon: <TrendingUp className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Social Dominance",
            description: "Engaging, algorithm-friendly content that builds communities and amplifies voice.",
            icon: <Users className="w-6 h-6" />,
            className: "md:col-span-2",
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background">
            <TechFloatingIcons />
            <PageHeader
                title="Digital"
                gradientText="Marketing"
                subtitle="AI-driven analytics and marketing strategies that maximize ROI and accelerate your brand growth."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Quantifiable <span className="text-primary">Results.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We don't just run ads. We engineer complex growth engines that scale predictably using proprietary data models.
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
                                Standard marketing relies on educated guesses. We utilize machine learning to test thousands of variables simultaneously.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { step: "01", title: "Data Ingestion", desc: "Analyzing your current digital footprint and competitors." },
                                    { step: "02", title: "Predictive Modeling", desc: "Simulating campaign outcomes using industry data." },
                                    { step: "03", title: "Algorithmic Deployment", desc: "Launching optimized campaigns across channels." },
                                    { step: "04", title: "Continuous Learning", desc: "Real-time adjustments based on AI metrics." }
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

                        <div className="relative w-full hidden lg:block">
                            <ThreeDGrowthHelix />
                        </div>
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
                    className="max-w-5xl mx-auto bg-gradient-to-br from-primary/20 via-background to-accent/10 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to <span className="gradient-text">Scale?</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Stop guessing with your budget. Let our data-driven frameworks unlock your true growth potential.
                    </p>

                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="inline-flex relative px-10 py-5 overflow-hidden rounded-full bg-primary text-white font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(27,109,133,0.5)] items-center justify-center gap-3 z-10 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initialize Growth Campaign
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </MagneticButton>
                </motion.div>
            </section>
        </div>
    );
}
