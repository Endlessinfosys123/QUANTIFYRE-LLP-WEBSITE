"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Zap, Layout, Box, ShoppingCart, MousePointer2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function WebsiteDevelopmentPage() {
    const features = [
        {
            title: "Ultra-Fast Performance",
            desc: "Next.js and Edge caching architectures ensuring sub-second load times worldwide.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            title: "Immersive 3D UI",
            desc: "Interactive WebGL and Framer Motion experiences that captivate and retain users.",
            icon: <Box className="w-8 h-8" />
        },
        {
            title: "Conversion-Centric UX",
            desc: "Psychology-backed interfaces designed specifically to guide visitors toward action.",
            icon: <MousePointer2 className="w-8 h-8" />
        },
        {
            title: "Enterprise E-Commerce",
            desc: "Scalable headless commerce solutions to handle massive traffic and transaction volumes.",
            icon: <ShoppingCart className="w-8 h-8" />
        },
        {
            title: "Responsive Layouts",
            desc: "Flawless rendering and interactions across all device ecosystems seamlessly.",
            icon: <Layout className="w-8 h-8" />
        },
        {
            title: "Bank-Grade Security",
            desc: "Advanced encryption, DDOS mitigation, and secure authentication by default.",
            icon: <ShieldCheck className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Website"
                gradientText="Development"
                subtitle="Neural web architectures built for performance, scale, and exceptional user experiences."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital <span className="text-accent">Masterpieces.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            We discard templates. Every platform we build is a custom-engineered web application designed to outperform your competition in speed and aesthetics.
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

            {/* Modern Stack Section */}
            <section className="w-full relative py-24 bg-black/50 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block group">
                            {/* Abstract Code/Tech visualization */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(60,207,109,0.1),rgba(0,0,0,0))]"></div>

                            <motion.div
                                className="absolute inset-0 flex flex-col justify-center items-center gap-6"
                            >
                                {[1, 2, 3].map((layer, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-[80%] h-32 border border-white/10 bg-black/60 backdrop-blur-md rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                                            <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                                            <div className="h-2 w-5/6 bg-accent/30 rounded-full"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on the <span className="gradient-text">Edge</span></h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                We utilize modern Jamstack and serverless architectures to deliver websites that don't just look incredible, but score perfect 100s on Google Lighthouse out of the box.
                            </p>

                            <div className="space-y-8 mt-12">
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-bold text-xl mb-2">Frontend Experience</h4>
                                    <p className="text-sm text-foreground/60 font-light">React, Next.js, and Framer Motion create app-like fluid transitions and state management.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-primary font-bold text-xl mb-2">Backend & APIs</h4>
                                    <p className="text-sm text-foreground/60 font-light">Node.js and modern GraphQL/REST APIs ensure scalable data delivery and third-party integrations.</p>
                                </div>
                                <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-white font-bold text-xl mb-2">Global Content Delivery</h4>
                                    <p className="text-sm text-foreground/60 font-light">Deployed to the Edge via Vercel or AWS, serving your users from the data center closest to them.</p>
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
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Reimagine your <span className="gradient-text">Web Presence</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Join the next generation of the internet. Let's build a platform that turns your visitors into lifelong customers.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-accent text-background font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(60,207,109,0.4)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Build
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
