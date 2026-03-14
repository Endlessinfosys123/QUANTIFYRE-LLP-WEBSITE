"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import { Check, ShieldAlert, Sparkles, Terminal, ArrowRight } from "lucide-react";
import PartnerLogos from "@/components/ui/PartnerLogos";
import Link from 'next/link';
import { useTheme } from "@/components/layout/ThemeProvider";

export default function PricingPage() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const plans = [
        {
            name: "Starter",
            tag: "Ideal for new businesses",
            desc: "Get started with a professional digital presence powered by AI analytics.",
            features: ["Basic website development", "Mobile-responsive design", "SEO optimisation", "3 months support", "Basic analytics setup", "Social media integration"],
            actionText: "Get Started",
            featured: false,
            icon: <Terminal className="w-7 h-7" />,
            color: "#1B6D85",
        },
        {
            name: "Growth",
            tag: "Most Popular ⭐",
            desc: "Comprehensive AI solutions for businesses ready to scale.",
            features: ["Advanced web application", "Custom UI/UX design", "AI-powered analytics", "6 months support", "API integrations", "Performance optimisation", "Marketing automation", "Priority support"],
            actionText: "Get Started",
            featured: true,
            icon: <Sparkles className="w-7 h-7" />,
            color: "#3CCF6D",
        },
        {
            name: "Enterprise",
            tag: "For large organisations",
            desc: "Fully custom AI solutions with dedicated team and 24/7 support.",
            features: ["Custom AI development", "Full-stack solutions", "Dedicated team", "24/7 premium support", "Advanced security", "Scalable architecture", "Custom integrations", "Training & documentation", "SLA guarantees"],
            actionText: "Contact Sales",
            featured: false,
            icon: <ShieldAlert className="w-7 h-7" />,
            color: "#A020F0",
        }
    ];

    const faqs = [
        { q: "How long do projects typically take?", a: "Project timelines vary based on complexity. A starter website typically takes 2–4 weeks, while enterprise solutions can take 2–6 months. We provide detailed timelines during consultation." },
        { q: "Do you offer ongoing support?", a: "Yes! All plans include initial support periods. We also offer monthly maintenance packages for continued support, updates, and optimisation." },
        { q: "Can I upgrade my plan later?", a: "Absolutely! You can upgrade your services at any time. We'll seamlessly transition you to more advanced solutions as your business grows." },
        { q: "What are your payment terms?", a: "We accept bank transfers, credit cards, and offer flexible payment plans for larger projects. Enterprise clients can discuss custom payment terms." }
    ];

    return (
        <div
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            <PageHeader
                title="Transparent"
                gradientText="Pricing"
                subtitle="Choose the plan that best fits your needs. All plans include our core commitment to quality and innovation."
            />

            {/* Pricing Cards */}
            <section className="w-full py-28 relative z-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <FloatingServiceOrbs indices={[0, 1, 4, 5]} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 overflow-hidden ${plan.featured ? "lg:-translate-y-4 shadow-2xl" : ""
                                    }`}
                                style={{
                                    background: plan.featured
                                        ? isLight
                                            ? `linear-gradient(135deg, rgba(21,95,116,0.08), rgba(255,255,255,0.95), rgba(24,167,74,0.06))`
                                            : `linear-gradient(135deg, rgba(27,109,133,0.12), var(--color-background-2), rgba(60,207,109,0.08))`
                                        : "var(--color-card-bg)",
                                    backdropFilter: "blur(14px)",
                                    border: `1px solid ${plan.featured ? plan.color + "55" : "var(--color-card-border)"}`,
                                    boxShadow: plan.featured ? `0 0 50px ${plan.color}30` : undefined,
                                }}
                            >
                                {/* Featured glow orb */}
                                {plan.featured && (
                                    <motion.div
                                        animate={{
                                            opacity: [0.3, 0.5, 0.3],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-40"
                                        style={{ background: plan.color }}
                                    />
                                )}

                                {/* Tag */}
                                <div className="mb-5">
                                    <span
                                        className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                                        style={{ background: `${plan.color}15`, color: plan.color, border: `1px solid ${plan.color}35` }}
                                    >
                                        {plan.tag}
                                    </span>
                                </div>

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black mb-1.5" style={{ color: "var(--color-foreground)" }}>
                                            {plan.name}
                                        </h3>
                                        <p className="text-sm font-light" style={{ color: "var(--color-foreground-muted)" }}>
                                            {plan.desc}
                                        </p>
                                    </div>
                                    <div
                                        className="p-3 rounded-2xl shrink-0 ml-3"
                                        style={{ background: `${plan.color}15`, color: plan.color, border: `1px solid ${plan.color}30` }}
                                    >
                                        {plan.icon}
                                    </div>
                                </div>

                                <div className="my-5 h-[1px]" style={{ background: "var(--color-divider)" }} />

                                {/* Features */}
                                <ul className="space-y-3 flex-grow mb-8">
                                    {plan.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-center gap-3 text-sm">
                                            <div
                                                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                                style={{ background: `${plan.color}20` }}
                                            >
                                                <Check className="w-3 h-3" style={{ color: plan.color }} strokeWidth={3} />
                                            </div>
                                            <span style={{ color: "var(--color-foreground-muted)" }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="w-full py-3.5 text-center rounded-xl font-bold text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                    style={
                                        plan.featured
                                            ? {
                                                background: `linear-gradient(135deg, ${plan.color}, var(--color-primary))`,
                                                color: "#fff",
                                                boxShadow: `0 0 20px ${plan.color}40`,
                                            }
                                            : {
                                                background: "var(--color-card-bg)",
                                                border: `1px solid var(--color-card-border)`,
                                                color: "var(--color-foreground)",
                                            }
                                    }
                                >
                                    {plan.actionText} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom CTA Banner */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 relative overflow-hidden">
                <FloatingServiceOrbs indices={[2, 3]} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] p-10 lg:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
                    style={{
                        background: isLight
                            ? "linear-gradient(135deg, rgba(21,95,116,0.08), rgba(255,255,255,0.85))"
                            : "linear-gradient(135deg, rgba(27,109,133,0.15), rgba(8,12,18,0.9))",
                        border: "1px solid var(--color-card-border)",
                        backdropFilter: "blur(14px)"
                    }}
                >
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-25" style={{ background: "var(--color-primary)" }} />
                    <div className="relative z-10 md:max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: "var(--color-foreground)" }}>
                            AI Tools & <span className="gradient-text">Custom Dev</span>
                        </h2>
                        <p className="font-light text-lg" style={{ color: "var(--color-foreground-muted)" }}>
                            Custom AI solutions, ML models, and specialised software require personalised pricing based on complexity, scope, and requirements.
                        </p>
                    </div>
                    <div className="relative z-10 w-full md:w-auto">
                        <Link
                            href="/contact"
                            className="px-8 py-4 font-bold text-lg w-full md:w-auto flex items-center justify-center gap-2 rounded-full transition-all hover:scale-105"
                            style={{
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                color: "#fff",
                                boxShadow: "var(--shadow-glow-primary)"
                            }}
                        >
                            Request Custom Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Partner Logos Strip */}
            <PartnerLogos />

            {/* FAQ */}
            <section
                className="w-full py-24"
                style={{ background: "var(--color-section-alt)", borderTop: `1px solid var(--color-divider)` }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 badge-glow" style={{ color: "var(--color-accent)" }}>
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--color-foreground)" }}>
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-5">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-6 md:p-8"
                            >
                                <h4 className="text-base font-bold mb-3 flex gap-3 items-start" style={{ color: "var(--color-foreground)" }}>
                                    <span className="shrink-0 font-mono font-black" style={{ color: "var(--color-primary)", opacity: 0.6 }}>Q:</span>
                                    {faq.q}
                                </h4>
                                <p
                                    className="text-sm leading-relaxed font-light pl-7"
                                    style={{
                                        color: "var(--color-foreground-muted)",
                                        borderLeft: `2px solid var(--color-divider)`
                                    }}
                                >
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
