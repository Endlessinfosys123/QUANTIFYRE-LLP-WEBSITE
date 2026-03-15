"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { Workflow, Bot, Network, Clock, ShieldAlert, Sparkles, Zap, Globe, Code } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";

export default function AIAutomationsPage() {
    const features = [
        {
            title: "Process Discovery",
            desc: "AI-driven analysis of your organization to identify massive automation opportunities.",
            icon: <Network className="w-8 h-8" />
        },
        {
            title: "Intelligent Workflows",
            desc: "Replacing manual data entry and routing with secure, error-free API pipelines.",
            icon: <Workflow className="w-8 h-8" />
        },
        {
            title: "Cognitive Agents",
            desc: "Autonomous bots that handle complex customer service and internal support queries.",
            icon: <Bot className="w-8 h-8" />
        },
        {
            title: "24/7 Execution",
            desc: "Your digital workforce never sleeps, processing transactions globally around the clock.",
            icon: <Clock className="w-8 h-8" />
        },
        {
            title: "Fraud Prevention",
            desc: "Real-time anomaly detection models protecting your revenue streams instantly.",
            icon: <ShieldAlert className="w-8 h-8" />
        },
        {
            title: "Generative Insights",
            desc: "Automated executive reporting synthesizing millions of data points into plain text.",
            icon: <Sparkles className="w-8 h-8" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="AI"
                gradientText="Automations"
                subtitle="Workflow automation that learns and adapts to your business processes securely."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frictionless <span className="text-primary">Operations.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            Stop wasting human capital on robotic tasks. We deploy intelligent systems that execute flawlessly at lightspeed.
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

            {/* Neural Graph / System Visualization */}
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="gradient-text">Hive Mind</span></h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
                                Our bespoke AI automations connect your isolated tools—from CRM to ERP—into a unified, conscious network that anticipates needs.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { step: "01", title: "API Integration", desc: "Connecting disparate enterprise software." },
                                    { step: "02", title: "Logic Training", desc: "Feeding historical data into the NLP models." },
                                    { step: "03", title: "Security Sandbox", desc: "Isolating operations for testing without risk." },
                                    { step: "04", title: "Live Execution", desc: "Autonomous scaling and workflow completion." }
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
                            {/* Abstract 3D Network Node visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="relative w-[400px] h-[400px]"
                                >
                                    {/* Central Node */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-[8px] animate-pulse"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-black">AI</div>

                                    {/* Orbiting Nodes */}
                                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                                        <motion.div
                                            key={deg}
                                            className="absolute top-1/2 left-1/2 w-32 origin-left"
                                            style={{ rotate: `${deg}deg` }}
                                        >
                                            <div className="absolute right-0 w-12 h-12 -translate-y-1/2 translate-x-1/2 bg-black border border-white/20 rounded-xl backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(27,109,133,0.5)]">
                                                <div className="w-4 h-4 rounded-full bg-accent animate-ping opacity-50 absolute"></div>
                                                <div className="w-2 h-2 rounded-full bg-primary relative z-10"></div>
                                            </div>
                                            {/* Connecting Line */}
                                            <div className="w-full h-[1px] bg-gradient-to-r from-primary to-transparent opacity-50 relative -top-[0.5px]"></div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                                <div className="text-xs text-accent mb-1 uppercase tracking-wider font-bold">Hours Saved</div>
                                <div className="text-3xl font-black text-white">10,000+</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Tech Stack & Use Cases */}
            <section className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-black/40">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Use Cases */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10"
                            style={{ borderColor: "rgba(60, 207, 109, 0.2)" }}
                        >
                            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                                <Zap className="text-accent w-8 h-8" />
                                <span className="gradient-text">Use Cases</span>
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Financial Reporting", desc: "Automating end-of-month reconciliation for a global logistics firm, saving 40+ man-hours per month." },
                                    { title: "Supply Chain Logistics", desc: "AI-driven route optimization reducing fuel costs by 18% through real-time traffic and load data." },
                                    { title: "Customer Support L1", desc: "Deploying cognitive agents that resolved 65% of common queries without human intervention." }
                                ].map((uc, i) => (
                                    <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                        <h4 className="font-bold text-white mb-2">{uc.title}</h4>
                                        <p className="text-sm text-foreground/60 font-light leading-relaxed">{uc.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10"
                        >
                            <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
                                <Globe className="text-primary w-8 h-8" />
                                <span>The <span className="gradient-text">Stack</span></span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech, i) => (
                                    <div 
                                        key={i} 
                                        className="h-24 glass-card flex items-center justify-center font-bold text-xs tracking-widest uppercase hover:bg-primary/20 transition-all"
                                        style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
                                    >
                                        {tech}
                                    </div>
                                ))}
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
                    className="max-w-5xl mx-auto bg-gradient-to-br from-primary/20 via-background to-accent/10 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Automate your <span className="gradient-text">Operations</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Don't let legacy processes slow down your scaling. Upgrade your company's nervous system.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex relative px-8 py-4 overflow-hidden rounded-full bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(27,109,133,0.5)] items-center justify-center gap-3 z-10 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Deploy Automations
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
