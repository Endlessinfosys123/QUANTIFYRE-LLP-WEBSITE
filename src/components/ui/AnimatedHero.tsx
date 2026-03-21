"use client";

import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, BarChart2, Globe, Code2, Smartphone,
    Zap, Bot, Sparkles, TrendingUp, Shield, Rocket, ChevronDown, CheckCircle2, Star, Orbit
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import TechParticles from "./TechParticles";
import TechFloatingIcons from "./TechFloatingIcons";
import MagneticButton from "./MagneticButton";

/* ─── rotating words ─── */
const rotatingWords = ["Faster.", "Smarter.", "Bolder.", "Greater."];

/* ─── orbital service icons ─── */
const orbitals = [
    { Icon: BarChart2, label: "Marketing", color: "#FF8C00", angle: 0 },
    { Icon: Globe, label: "Web Dev", color: "#1B6D85", angle: 60 },
    { Icon: Code2, label: "Software", color: "#A020F0", angle: 120 },
    { Icon: Smartphone, label: "App Dev", color: "#3CCF6D", angle: 180 },
    { Icon: Zap, label: "AI Auto", color: "#FF3C50", angle: 240 },
    { Icon: Bot, label: "AI Tools", color: "#00B4FF", angle: 300 },
];

/* ─── animated stats ─── */
const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered", icon: TrendingUp, color: "#1B6D85" },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: Sparkles, color: "#3CCF6D" },
    { value: 50, suffix: "+", label: "AI Solutions Built", icon: Bot, color: "#A020F0" },
    { value: 5, suffix: "★", label: "Rated Service", icon: Shield, color: "#FF8C00" },
];

/* ─── counter ─── */
function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting || started.current) return;
            started.current = true;
            let cur = 0;
            const step = Math.max(1, Math.ceil(value / 55));
            const t = setInterval(() => {
                cur = Math.min(cur + step, value);
                setCount(cur);
                if (cur >= value) clearInterval(t);
            }, 22);
        }, { threshold: 0.4 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── dot grid SVG ─── */
function DotGrid({ isLight }: { isLight: boolean }) {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: isLight ? 0.18 : 0.10 }}
            aria-hidden
        >
            <defs>
                <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" fill={isLight ? "#1B6D85" : "#fff"} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
    );
}

/* ─── orbital ring — pure visual dashed ring ─── */
function OrbitalRing({ radius, reverse, isLight, duration }: { radius: number; reverse?: boolean; isLight: boolean; duration: number }) {
    return (
        <div
            className="absolute rounded-full"
            style={{
                width: radius * 2,
                height: radius * 2,
                left: "50%", top: "50%",
                marginLeft: -radius, marginTop: -radius,
                border: `1px dashed ${isLight ? "rgba(27,109,133,0.22)" : "rgba(255,255,255,0.08)"}`,
                animation: `${reverse ? "orbitCCW" : "orbitCW"} ${duration}s linear infinite`,
            }}
        />
    );
}

function OrbitalIcon({
    Icon, label, color, radius, startAngle, duration, isLight,
}: {
    Icon: React.ElementType; label: string; color: string;
    radius: number; startAngle: number; duration: number; isLight: boolean;
}) {
    const delay = (startAngle / 360) * duration;
    const tilt = (startAngle % 90) - 45;

    return (
        <motion.div
            className="absolute flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                rotateY: [0, 360],
            }}
            transition={{
                rotateY: { duration, repeat: Infinity, ease: "linear", delay: -delay },
                opacity: { duration: duration / 2, repeat: Infinity, ease: "easeInOut", delay: -delay }
            }}
            style={{
                width: 0, height: 0,
                transformStyle: "preserve-3d",
                transform: `rotateX(${tilt}deg)`,
            }}
        >
            <motion.div
                className="absolute flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl glass-3d"
                style={{
                    width: 80, height: 80,
                    left: radius,
                    background: isLight ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                    border: `1.5px solid ${color}80`,
                    boxShadow: `0 8px 32px ${color}40`,
                    rotateY: 0,
                }}
            >
                <Icon style={{ color, width: 28, height: 28 }} />
                <span style={{
                    color: isLight ? "#0D1B2A" : "rgba(255,255,255,0.9)",
                    fontSize: 9, fontWeight: "bold",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    textAlign: "center"
                }}>
                    {label}
                </span>
            </motion.div>
        </motion.div>
    );
}

export default function AnimatedHero() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const [wordIdx, setWordIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setWordIdx(p => (p + 1) % rotatingWords.length), 2400);
        return () => clearInterval(t);
    }, []);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springX = useSpring(rawX, { stiffness: 60, damping: 25 });
    const springY = useSpring(rawY, { stiffness: 60, damping: 25 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            rawX.set((e.clientX / window.innerWidth - 0.5) * 40);
            rawY.set((e.clientY / window.innerHeight - 0.5) * 40);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [rawX, rawY]);

    const wordColors = ["#3CCF6D", "#1B6D85", "#FF8C00", "#A020F0"];

    const { scrollYProgress } = useScroll();
    const rotateX = useTransform(scrollYProgress, [0, 0.2], [0, 15]);
    const translateZ = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <section
            className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-20"
            style={{ 
                background: "var(--color-background)",
                perspective: "1200px"
            }}
        >
            <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{ rotateX, translateZ, opacity: 1 }}
            >
                <DotGrid isLight={isLight} />
                <div className="neural-surface opacity-[0.05]" />
                <motion.div 
                    className="glow-cursor-follow"
                    style={{ x: springX, y: springY, left: "50%", top: "50%", marginLeft: -300, marginTop: -300 }}
                />
            </motion.div>

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: isLight
                        ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(8,145,178,0.1) 0%, transparent 80%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16,185,129,0.06) 0%, transparent 70%)"
                        : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,109,133,0.22) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(60,207,109,0.12) 0%, transparent 70%)",
                }}
            />

            <TechParticles />
            <TechFloatingIcons />
            <div className="tech-grid opacity-[0.15]" />
            
            <motion.div
                style={{ x: springX, y: springY, rotateX, translateZ }}
                className="absolute inset-0 pointer-events-none"
            >
                <div
                    className="absolute rounded-full blur-[140px]"
                    style={{
                        width: 600, height: 600,
                        top: "10%", left: "5%",
                        background: isLight ? "rgba(8,145,178,0.12)" : "rgba(27,109,133,0.35)",
                        animation: "breathe 7s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute rounded-full blur-[120px]"
                    style={{
                        width: 500, height: 500,
                        bottom: "5%", right: "5%",
                        background: isLight ? "rgba(16,185,129,0.1)" : "rgba(60,207,109,0.25)",
                        animation: "breathe 9s ease-in-out infinite reverse",
                    }}
                />
            </motion.div>

            <motion.div 
                className="absolute inset-0 pointer-events-none hidden xl:flex items-center justify-center overflow-hidden preserve-3d"
                style={{ rotateX, translateZ, opacity }}
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <div style={{ transform: "rotateX(70deg) rotateY(10deg)", transformStyle: "preserve-3d" }} className="absolute inset-0 flex items-center justify-center">
                    <OrbitalRing radius={480} duration={50} isLight={isLight} />
                    <OrbitalRing radius={320} duration={35} reverse isLight={isLight} />
                </div>

                <div style={{ transform: "rotateX(-50deg) rotateY(-15deg)", transformStyle: "preserve-3d" }} className="absolute inset-0 flex items-center justify-center">
                    <OrbitalRing radius={420} duration={45} isLight={isLight} />
                </div>

                {orbitals.map(({ Icon, label, color, angle }, i) => (
                    <OrbitalIcon
                        key={i}
                        Icon={Icon}
                        label={label}
                        color={color}
                        radius={400 + (i % 2) * 50}
                        startAngle={angle}
                        duration={45 + i * 3}
                        isLight={isLight}
                    />
                ))}

                <div
                    className="absolute rounded-full"
                    style={{
                        width: 240, height: 240,
                        border: `2px solid ${isLight ? "rgba(27,109,133,0.2)" : "rgba(27,109,133,0.3)"}`,
                        boxShadow: `0 0 80px rgba(27,109,133,0.3)`,
                        background: "radial-gradient(circle, rgba(27,109,133,0.15) 0%, transparent 80%)",
                        animation: "pulseRing 5s ease-in-out infinite",
                    }}
                />
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center gap-7">
                <motion.div
                    initial={{ opacity: 0, y: -24, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{
                            background: isLight
                                ? "rgba(27,109,133,0.08)"
                                : "rgba(27,109,133,0.15)",
                            border: `1px solid ${isLight ? "rgba(27,109,133,0.25)" : "rgba(27,109,133,0.35)"}`,
                            color: "var(--color-primary)",
                            boxShadow: "0 0 20px rgba(27,109,133,0.20)",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
                        QUANTIFYRE · AI-Powered Solutions
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-2"
                >
                    <h1
                        className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter leading-[0.95] select-none"
                        style={{ color: "var(--color-foreground)" }}
                    >
                        The Future,
                    </h1>

                    <div className="h-[1.2rem] sm:h-[1.5rem] md:h-[1.8rem] flex items-center justify-center mt-4 mb-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={wordIdx}
                                className="flex relative"
                            >
                                <div 
                                    className="absolute inset-0 blur-[60px] opacity-30"
                                    style={{ background: wordColors[wordIdx] }}
                                />
                                {rotatingWords[wordIdx].split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                        exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.04,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter leading-none relative z-10"
                                        style={{
                                            color: wordColors[wordIdx],
                                            textShadow: isLight
                                                ? `0 0 20px ${wordColors[wordIdx]}20`
                                                : `0 0 40px ${wordColors[wordIdx]}60`,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed"
                    style={{ color: "var(--color-foreground-muted)" }}
                >
                    Transforming businesses with <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>AI-powered digital solutions</span>, intelligent automation, and cutting-edge technology that{" "}
                    <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>quantifies growth</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    <MagneticButton>
                        <Link
                            href="/services"
                            className="px-10 py-5 rounded-full bg-accent text-background font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(60,207,109,0.5)] flex items-center gap-3 group relative overflow-hidden"
                        >
                            <span className="relative z-10">Explore Our Tech</span>
                            <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="px-10 py-5 rounded-full border text-lg font-bold transition-all backdrop-blur-xl flex items-center gap-3 group"
                            style={{
                                background: isLight ? "rgba(15,23,42,0.03)" : "rgba(255,255,255,0.05)",
                                borderColor: isLight ? "rgba(15,23,42,0.15)" : "rgba(255,255,255,0.1)",
                                color: "var(--color-foreground)",
                            }}
                        >
                            Book a Consultation
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </MagneticButton>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.75 }}
                    className="mt-2 w-full max-w-3xl"
                >
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
                        style={{
                            background: isLight ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${isLight ? "rgba(27,109,133,0.14)" : "rgba(255,255,255,0.08)"}`,
                            backdropFilter: "blur(14px)",
                        }}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center py-5 px-2 relative"
                                style={{
                                    borderRight: i < stats.length - 1
                                        ? `1px solid ${isLight ? "rgba(27,109,133,0.10)" : "rgba(255,255,255,0.06)"}`
                                        : "none",
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-full"
                                    style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                                />
                                <stat.icon
                                    className="w-4 h-4 mb-2"
                                    style={{ color: stat.color }}
                                />
                                <span
                                    className="text-2xl sm:text-3xl font-black"
                                    style={{ color: stat.color }}
                                >
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </span>
                                <span
                                    className="text-[10px] font-semibold tracking-wider uppercase mt-1 text-center leading-tight"
                                    style={{ color: "var(--color-foreground-muted)" }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--color-foreground-muted)", opacity: 0.5 }}>
                    Scroll
                </span>
                <div
                    className="w-6 h-10 rounded-full flex justify-center pt-1.5 border"
                    style={{ borderColor: "var(--color-foreground-muted)", opacity: 0.35 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                    />
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes orbitCW  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
                @keyframes orbitCCW { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
                @keyframes breathe {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50%       { transform: scale(1.12); opacity: 0.75; }
                }
                @keyframes pulseRing {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50%       { transform: scale(1.08); opacity: 1; }
                }
                @keyframes shimmerBtn {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </section>
    );
}
