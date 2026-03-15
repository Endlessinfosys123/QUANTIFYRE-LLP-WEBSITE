"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Zap, Box, MousePointer2, ShieldCheck, ShoppingCart, Layout } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import ThreeDTechStack from "@/components/ui/services/3DTechStack";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import MagneticButton from "@/components/ui/MagneticButton";

export default function WebsiteDevelopmentPage() {
    const features = [
        {
            title: "Ultra-Fast Performance",
            description: "Next.js and Edge caching architectures ensuring sub-second load times worldwide.",
            icon: <Zap className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: "Immersive 3D UI",
            description: "Interactive WebGL and Framer Motion experiences that captivate users.",
            icon: <Box className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Conversion-Centric UX",
            description: "Psychology-backed interfaces designed specifically to guide visitors toward action.",
            icon: <MousePointer2 className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Bank-Grade Security",
            description: "Advanced encryption, DDOS mitigation, and secure authentication by default.",
            icon: <ShieldCheck className="w-6 h-6" />,
            className: "md:col-span-2",
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <TechFloatingIcons />
            <PageHeader
                title="Website"
                gradientText="Development"
                subtitle="Neural web architectures built for performance, scale, and exceptional user experiences."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital <span className="text-accent">Masterpieces.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We discard templates. Every platform we build is a custom-engineered web application designed to outperform competition.
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

            {/* Modern Stack Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative w-full hidden lg:block">
                            <ThreeDTechStack />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on the <span className="gradient-text">Edge</span></h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                We utilize modern Jamstack and serverless architectures to deliver websites that don't just look incredible, but score perfect 100s on Google Lighthouse.
                            </p>

                            <div className="space-y-8 mt-12">
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-bold text-xl mb-2">Frontend Experience</h4>
                                    <p className="text-sm text-foreground/60 font-light">React, Next.js, and Framer Motion create app-like fluid transitions.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-primary font-bold text-xl mb-2">Backend & APIs</h4>
                                    <p className="text-sm text-foreground/60 font-light">Node.js and GraphQL ensure scalable data delivery and integrations.</p>
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
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Reimagine your <span className="gradient-text">Web Presence</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Join the next generation of the internet. Let's build a platform that turns your visitors into customers.
                    </p>

                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="inline-flex relative px-10 py-5 overflow-hidden rounded-full bg-accent text-background font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(60,207,109,0.5)] items-center justify-center gap-3 z-10 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Build
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </MagneticButton>
                </motion.div>
            </section>
        </div>
    );
}
