"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Check, ShieldAlert, Sparkles, Terminal } from "lucide-react";
import Link from 'next/link';

export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            desc: "Perfect for small businesses getting started with digital transformation.",
            features: ["Basic website development", "Mobile-responsive design", "SEO optimization", "3 months support", "Basic analytics setup", "Social media integration"],
            actionText: "Get Started",
            featured: false,
            icon: <Terminal className="w-8 h-8 text-primary" />
        },
        {
            name: "Growth",
            desc: "Ideal for growing businesses that need comprehensive AI solutions.",
            features: ["Advanced web application", "Custom UI/UX design", "AI-powered analytics", "6 months support", "API integrations", "Performance optimization", "Marketing automation basics", "Priority support"],
            actionText: "Get Started",
            featured: true,
            icon: <Sparkles className="w-8 h-8 text-accent" />
        },
        {
            name: "Enterprise",
            desc: "For organizations requiring custom AI solutions and dedicated support.",
            features: ["Custom AI development", "Full-stack solutions", "Dedicated team", "24/7 premium support", "Advanced security", "Scalable architecture", "Custom integrations", "Training & documentation", "SLA guarantees"],
            actionText: "Contact Sales",
            featured: false,
            icon: <ShieldAlert className="w-8 h-8 text-primary" />
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Transparent"
                gradientText="Pricing"
                subtitle="Choose the plan that best fits your needs. All plans include our core commitment to quality and architectural innovation."
            />

            {/* Pricing Cards */}
            <section className="w-full py-32 relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-500 overflow-hidden ${plan.featured
                                        ? "bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/50 shadow-[0_0_50px_rgba(27,109,133,0.3)] transform lg:-translate-y-4"
                                        : "glass-card border border-white/5 hover:border-primary/30"
                                    }`}
                            >
                                {/* Glowing orb behind featured card */}
                                {plan.featured && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] pointer-events-none rounded-full" />
                                )}

                                <div className="mb-6 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                                        <p className="text-sm font-light text-foreground/60 h-10">{plan.desc}</p>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                                        {plan.icon}
                                    </div>
                                </div>

                                <div className="my-6 border-b border-white/10" />

                                <ul className="space-y-4 flex-grow mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/20 flex justify-center items-center">
                                                <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                                            </div>
                                            <span className="text-foreground/80 font-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 text-center rounded-xl font-bold text-lg transition-all ${plan.featured
                                            ? "bg-primary text-white shadow-[0_0_20px_rgba(27,109,133,0.4)] hover:bg-primary/80"
                                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                        }`}
                                >
                                    {plan.actionText}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom AI Tools Banner */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] p-10 lg:p-16 border border-white/10 overflow-hidden bg-black flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    {/* Animated Matrix/Particles Bg inside Banner */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,20,1)_0%,rgba(11,15,20,0.4)_100%)] z-10" />
                        <video
                            autoPlay loop muted playsInline
                            className="w-full h-full object-cover opacity-20 filter grayscale"
                            src="https://cdn.pixabay.com/video/2020/05/25/40108-425126132_tiny.mp4"
                        />
                    </div>

                    <div className="relative z-10 md:max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">AI Tools & <span className="gradient-text">Software Dev</span></h2>
                        <p className="text-foreground/70 font-light text-lg">
                            Custom AI solutions, machine learning models, and specialized software require personalized pricing based on complexity, scope, and requirements.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all flex items-center justify-center whitespace-nowrap"
                        >
                            Request Custom Quote
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-black/40 py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked <span className="text-primary border-b-2 border-accent">Questions</span></h2>

                    <div className="space-y-6">
                        {[
                            { q: "How long do projects typically take?", a: "Project timelines vary based on complexity. A starter website typically takes 2-4 weeks, while enterprise solutions can take 2-6 months. We provide detailed timelines during consultation." },
                            { q: "Do you offer ongoing support?", a: "Yes! All plans include initial support periods. We also offer monthly maintenance packages for continued support, updates, and optimization." },
                            { q: "Can I upgrade my plan later?", a: "Absolutely! You can upgrade your services at any time. We'll work with you to seamlessly transition to more advanced solutions as your business grows." },
                            { q: "What are your payment terms?", a: "We accept bank transfers, credit cards, and offer flexible payment plans for larger projects. Enterprise clients can discuss custom payment terms." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 md:p-8"
                            >
                                <h4 className="text-xl font-bold mb-3 text-white flex gap-3 items-start">
                                    <span className="text-primary shrink-0 opacity-50">Q:</span> {faq.q}
                                </h4>
                                <p className="text-foreground/60 leading-relaxed font-light mt-2 pl-7 border-l border-white/5">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
