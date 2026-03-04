"use client";

import { motion } from "framer-motion";
import { Brain, Code, Globe, Zap, Presentation, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            id: "digital-marketing",
            title: 'Digital Marketing',
            desc: 'AI-driven analytics and marketing strategies that maximize ROI. Precision targeting and smart campaign automation.',
            icon: <Presentation className="w-10 h-10" />
        },
        {
            id: "website-development",
            title: 'Website Development',
            desc: 'Neural web architectures built for performance and scale. We build stunning, highly responsive websites.',
            icon: <Globe className="w-10 h-10" />
        },
        {
            id: "software-development",
            title: 'Software Development',
            desc: 'Custom software solutions powered by intelligent design. Streamline your core business processes.',
            icon: <Code className="w-10 h-10" />
        },
        {
            id: "application-development",
            title: 'Application Development',
            desc: 'Mobile-first applications with AI-enhanced experiences on both iOS and Android platforms.',
            icon: <Brain className="w-10 h-10" />
        },
        {
            id: "ai-automations",
            title: 'AI Automations',
            desc: 'Workflow automation that learns and adapts to your business. Cut manual data entry by up to 90%.',
            icon: <Zap className="w-10 h-10" />
        },
        {
            id: "ai-tools-development",
            title: 'AI Tools Development',
            desc: 'Custom AI tools that transform your operations. Bespoke LLMs and generative agents.',
            icon: <Bot className="w-10 h-10" />
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
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Architects of <span className="gradient-text">Growth</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                    Explore our comprehensive suite of advanced technical services designed to push your business ahead of the competition.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-card p-8 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="mb-6 p-4 rounded-xl bg-primary/10 text-primary self-start group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
                            {service.desc}
                        </p>
                        <Link
                            href={`/contact`}
                            className="mt-auto flex items-center text-primary font-semibold hover:text-white transition-colors w-fit"
                        >
                            Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
