"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    gradientText?: string;
}

export default function PageHeader({ title, subtitle, gradientText }: PageHeaderProps) {
    return (
        <section className="relative w-full py-32 flex items-center justify-center overflow-hidden border-b border-white/5">
            {/* 3D Animated Background Grid */}
            <div className="absolute inset-0 bg-background z-0">
                <div
                    className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] perspective-1000"
                    style={{ transform: "rotateX(60deg) translateY(-100px) scale(2)" }}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                >
                    {title} {gradientText && <span className="gradient-text">{gradientText}</span>}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto font-light"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Floating Particles */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-primary"
            />
        </section>
    );
}
