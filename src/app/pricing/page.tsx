"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from 'next/link';

export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            desc: "Perfect for small businesses exploring digital growth.",
            price: "Custom",
            features: [
                "Basic Website Development",
                "Essential SEO Optimization",
                "Social Media Setup",
                "Standard Support"
            ]
        },
        {
            name: "Professional",
            desc: "Comprehensive solutions for growing enterprises.",
            price: "Custom",
            isPopular: true,
            features: [
                "Advanced Web & App Development",
                "AI-Driven Marketing Campaigns",
                "Basic Workflow Automation",
                "Priority 24/7 Support",
                "Monthly Performance Reports"
            ]
        },
        {
            name: "Enterprise",
            desc: "Architectural transformations with deep AI integration.",
            price: "Custom",
            features: [
                "Custom Software Architecture",
                "Bespoke AI Tool Development",
                "Full-Scale Workflow Automation",
                "Dedicated Account Manager",
                "Predictive Business Analytics"
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Invest in Your <span className="gradient-text">Future</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                    We build custom, scalable solutions tailored exactly to your unique business needs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`glass-card p-8 relative flex flex-col h-full ${plan.isPopular ? 'border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] md:-translate-y-4 md:hover:-translate-y-6' : 'hover:-translate-y-2'
                            } transition-transform duration-300`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-foreground/60 text-sm h-10">{plan.desc}</p>
                        </div>

                        <div className="mb-8 p-4 bg-background/50 rounded-xl text-center">
                            <span className="text-3xl font-black">{plan.price}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start text-sm">
                                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                    <span className="text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/contact"
                            className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.isPopular
                                    ? 'bg-primary text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                }`}
                        >
                            Get a Quote
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
