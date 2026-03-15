"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Workflow, Bot, Network, Clock, ShieldAlert, Sparkles, Zap, Globe } from "lucide-react";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import ThreeDNeuralSynapse from "@/components/ui/services/3DNeuralSynapse";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import MagneticButton from "@/components/ui/MagneticButton";

export default function AIAutomationsPage() {
    const features = [
        {
            title: "Process Discovery",
            description: "AI-driven analysis of your organization to identify massive automation opportunities.",
            icon: <Network className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: "Intelligent Workflows",
            description: "Replacing manual data entry and routing with secure, error-free API pipelines.",
            icon: <Workflow className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: "Cognitive Agents",
            description: "Autonomous bots that handle complex customer service and internal support queries.",
            icon: <Bot className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: "24/7 Execution",
            description: "Your digital workforce never sleeps, processing transactions globally around the clock.",
            icon: <Clock className="w-6 h-6" />,
            className: "md:col-span-1",
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <TechFloatingIcons />
            <PageHeader
                title="AI"
                gradientText="Automations"
                subtitle="Workflow automation that learns and adapts to your business processes securely."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frictionless <span className="text-primary">Operations.</span></h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                            Stop wasting human capital on robotic tasks. We deploy intelligent systems that execute flawlessly at lightspeed.
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

                        <div className="relative w-full hidden lg:block overflow-visible">
                           <ThreeDNeuralSynapse />
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

                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Automate your <span className="gradient-text">Operations</span></h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light relative z-10">
                        Don't let legacy processes slow down your scaling. Upgrade your company's nervous system.
                    </p>

                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="inline-flex relative px-10 py-5 overflow-hidden rounded-full bg-primary text-white font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(27,109,133,0.5)] items-center justify-center gap-3 z-10 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Deploy Automations
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </MagneticButton>
                </motion.div>
            </section>

             {/* Tech Stack section moved to separate area or simplified if needed */}
        </div>
    );
}
