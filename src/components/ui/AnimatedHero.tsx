"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnimatedHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
            {/* Background Animated Gradient Layer */}
            <div className="absolute inset-0 bg-background z-0">
                <motion.div
                    animate={{
                        translateX: mousePosition.x / 40,
                        translateY: mousePosition.y / 40,
                    }}
                    transition={{ type: "tween", ease: "circOut", duration: 1 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(27,109,133,0.15),_rgba(11,15,20,1)_70%)]"
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex"
                >
                    <span className="px-5 py-2 rounded-full border border-accent/40 bg-accent/5 text-accent text-xs sm:text-sm font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(60,207,109,0.2)]">
                        QUANTIFYRE IRIS
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white">
                        The Future, <br className="md:hidden" />
                        <span className="gradient-text font-black">Faster.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-4">
                        Transforming businesses with AI-powered digital solutions, intelligent
                        automation, and cutting-edge technology that quantifies growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 w-full px-8 sm:px-0"
                >
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden rounded-full bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(27,109,133,0.5)] flex items-center justify-center gap-3"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex justify-center items-center"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* 3D Floating Element representation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-2">
                        <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
