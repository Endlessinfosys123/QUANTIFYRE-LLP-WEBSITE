"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Globe, Code2, Smartphone, Zap, Bot } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

const floatingIcons = [
    { Icon: BarChart2, label: "Marketing", color: "#FF8C00", top: "15%", left: "8%", delay: 0, size: "w-10 h-10" },
    { Icon: Globe, label: "Web Dev", color: "#1B6D85", top: "25%", right: "6%", delay: 0.7, size: "w-9 h-9" },
    { Icon: Code2, label: "Software", color: "#A020F0", top: "60%", left: "5%", delay: 1.2, size: "w-11 h-11" },
    { Icon: Smartphone, label: "App Dev", color: "#3CCF6D", top: "70%", right: "8%", delay: 0.4, size: "w-10 h-10" },
    { Icon: Zap, label: "AI Auto", color: "#FF3C50", top: "45%", left: "3%", delay: 1.8, size: "w-8 h-8" },
    { Icon: Bot, label: "AI Tools", color: "#00B4FF", top: "55%", right: "4%", delay: 1.0, size: "w-9 h-9" },
];

const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "AI Solutions" },
    { value: "5★", label: "Rated Service" },
];

function AnimatedCounter({ target }: { target: string }) {
    const [display, setDisplay] = useState("0");
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            const isNum = /^\d+/.test(target);
            if (!isNum) { setDisplay(target); return; }
            const num = parseInt(target);
            const suffix = target.replace(/^\d+/, "");
            let start = 0;
            const step = Math.ceil(num / 60);
            const timer = setInterval(() => {
                start += step;
                if (start >= num) { setDisplay(`${num}${suffix}`); clearInterval(timer); }
                else setDisplay(`${start}${suffix}`);
            }, 25);
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref} className="counter-number">{display}</span>;
}

export default function AnimatedHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { theme } = useTheme();
    const isLight = theme === "light";

    useEffect(() => {
        const update = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", update);
        return () => window.removeEventListener("mousemove", update);
    }, []);

    return (
        <section
            className="relative min-h-[97vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24"
            style={{ background: "var(--color-background)" }}
        >
            {/* Mesh Gradient Background */}
            <div className={`absolute inset-0 ${isLight ? "mesh-gradient-light" : "mesh-gradient-dark"}`} />

            {/* Mouse parallax orb */}
            <motion.div
                animate={{ translateX: mousePosition.x / 35 - 20, translateY: mousePosition.y / 35 - 20 }}
                transition={{ type: "tween", ease: "circOut", duration: 1.2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div
                    className="absolute top-1/3 left-1/3 w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-30"
                    style={{ background: "var(--color-primary)" }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[22rem] h-[22rem] rounded-full blur-[100px] opacity-20"
                    style={{ background: "var(--color-accent)" }}
                />
            </motion.div>

            {/* Animated Floating Service Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {floatingIcons.map(({ Icon, label, color, top, left, right, delay, size }, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: delay + 1, duration: 0.8, ease: "backOut" }}
                        style={{
                            position: "absolute",
                            top,
                            left: left ?? undefined,
                            right: right ?? undefined,
                            animationDelay: `${delay}s`,
                        }}
                        className={`float-animate${i % 3 === 1 ? "-delay" : i % 3 === 2 ? "-slow" : ""}`}
                    >
                        <div
                            className="relative rounded-2xl p-3 flex flex-col items-center gap-1.5 group cursor-default"
                            style={{
                                background: isLight
                                    ? `rgba(255,255,255,0.7)`
                                    : `rgba(255,255,255,0.04)`,
                                backdropFilter: "blur(12px)",
                                border: `1px solid ${color}30`,
                                boxShadow: `0 4px 24px ${color}22, inset 0 0 20px ${color}15`,
                            }}
                        >
                            <Icon className={`${size}`} style={{ color }} />
                            <span
                                className="text-[10px] font-semibold tracking-wider uppercase"
                                style={{ color: isLight ? "#0A1628" : "rgba(255,255,255,0.6)" }}
                            >
                                {label}
                            </span>
                            {/* Pulse ring */}
                            <div
                                className="absolute inset-0 rounded-2xl pulse-ring"
                                style={{ border: `1px solid ${color}55` }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span
                        className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase badge-glow"
                        style={{ color: "var(--color-accent)" }}
                    >
                        ⚡ QUANTIFYRE · AI-POWERED SOLUTIONS
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h1
                        className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none"
                        style={{ color: "var(--color-foreground)" }}
                    >
                        The Future,{" "}
                        <br className="sm:hidden" />
                        <span className="gradient-text">Faster.</span>
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-4"
                        style={{ color: "var(--color-foreground-muted)" }}
                    >
                        Transforming businesses with AI-powered digital solutions, intelligent
                        automation, and cutting-edge technology that{" "}
                        <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>quantifies growth</span>.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 w-full px-6 sm:px-0"
                >
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                            boxShadow: "var(--shadow-glow-primary)",
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-accent), var(--color-primary))"
                            }}
                        />
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-lg flex justify-center items-center transition-all hover:scale-105 border"
                        style={{
                            background: isLight ? "rgba(27,109,133,0.08)" : "rgba(255,255,255,0.05)",
                            borderColor: isLight ? "rgba(27,109,133,0.25)" : "rgba(255,255,255,0.12)",
                            color: "var(--color-foreground)",
                        }}
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-10"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span
                                className="text-3xl font-black gradient-text"
                            >
                                <AnimatedCounter target={stat.value} />
                            </span>
                            <span
                                className="text-xs font-semibold tracking-widest uppercase mt-1"
                                style={{ color: "var(--color-foreground-muted)" }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div
                    className="w-7 h-11 rounded-full flex justify-center pt-2 border-2"
                    style={{ borderColor: "var(--color-foreground-muted)" }}
                >
                    <div
                        className="w-1 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: "var(--color-accent)" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
