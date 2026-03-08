"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, BarChart2, Globe, Code2, Smartphone,
    Zap, Bot, Sparkles, TrendingUp, Shield
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

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

/* ─── always-upright orbital icon ───
   The outer span rotates around the ring center using transform-origin.
   The inner icon counter-rotates at the same speed — net rotation = 0 = always upright.
*/
function OrbitalIcon({
    Icon, label, color, radius, startAngle, duration, isLight,
}: {
    Icon: React.ElementType; label: string; color: string;
    radius: number; startAngle: number; duration: number; isLight: boolean;
}) {
    const delay = (startAngle / 360) * duration;
    return (
        <div
            style={{
                position: "absolute",
                left: "50%", top: "50%",
                width: 0, height: 0,
                /* pivot is at the center of the ring */
                transformOrigin: "0 0",
                animation: `orbitCW ${duration}s linear infinite`,
                animationDelay: `-${delay}s`,
            }}
        >
            {/* translate to ring edge so the icon appears at radius */}
            <div
                style={{
                    transform: `translate(${radius}px, -28px)`,
                }}
            >
                {/* counter-rotate so the card stays upright */}
                <div
                    style={{
                        animation: `orbitCCW ${duration}s linear infinite`,
                        animationDelay: `-${delay}s`,
                    }}
                >
                    <div
                        className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-1"
                        style={{
                            background: isLight ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.07)",
                            backdropFilter: "blur(12px)",
                            border: `1.5px solid ${color}45`,
                            boxShadow: `0 4px 24px ${color}35`,
                        }}
                    >
                        <Icon style={{ color, width: 20, height: 20 }} />
                        <span style={{
                            color: isLight ? "#0D1B2A" : "rgba(255,255,255,0.65)",
                            fontSize: 8, fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase" as const,
                        }}>
                            {label}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════ MAIN HERO ═══ */
export default function AnimatedHero() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    /* word cycle */
    const [wordIdx, setWordIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setWordIdx(p => (p + 1) % rotatingWords.length), 2400);
        return () => clearInterval(t);
    }, []);

    /* smooth mouse parallax */
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

    /* word colour cycle */
    const wordColors = ["#3CCF6D", "#1B6D85", "#FF8C00", "#A020F0"];

    return (
        <section
            className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-20"
            style={{ background: "var(--color-background)" }}
        >
            {/* ── Dot Grid ── */}
            <div className="absolute inset-0 pointer-events-none">
                <DotGrid isLight={isLight} />
            </div>

            {/* ── Mesh gradient layer ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: isLight
                        ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,109,133,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(60,207,109,0.07) 0%, transparent 70%)"
                        : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,109,133,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(60,207,109,0.10) 0%, transparent 70%)",
                }}
            />

            {/* ── Mouse-parallax orbs ── */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute inset-0 pointer-events-none"
            >
                <div
                    className="absolute rounded-full blur-[120px]"
                    style={{
                        width: 520, height: 520,
                        top: "15%", left: "10%",
                        background: isLight ? "rgba(27,109,133,0.15)" : "rgba(27,109,133,0.28)",
                        animation: "breathe 6s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute rounded-full blur-[100px]"
                    style={{
                        width: 400, height: 400,
                        bottom: "10%", right: "8%",
                        background: isLight ? "rgba(60,207,109,0.12)" : "rgba(60,207,109,0.20)",
                        animation: "breathe 8s ease-in-out infinite reverse",
                    }}
                />
                <div
                    className="absolute rounded-full blur-[80px]"
                    style={{
                        width: 300, height: 300,
                        top: "50%", right: "20%",
                        background: isLight ? "rgba(160,32,240,0.07)" : "rgba(160,32,240,0.14)",
                        animation: "breathe 7s ease-in-out infinite 2s",
                    }}
                />
            </motion.div>

            {/* ── Orbital Rings (desktop only) ── */}
            <div className="absolute inset-0 pointer-events-none hidden xl:flex items-center justify-center overflow-hidden">
                {/* Visual dashed rings */}
                <OrbitalRing radius={360} duration={40} isLight={isLight} />
                <OrbitalRing radius={240} duration={28} reverse isLight={isLight} />

                {/* Service icon nodes — always upright */}
                {orbitals.map(({ Icon, label, color, angle }, i) => (
                    <OrbitalIcon
                        key={i}
                        Icon={Icon}
                        label={label}
                        color={color}
                        radius={360}
                        startAngle={angle}
                        duration={44}
                        isLight={isLight}
                    />
                ))}

                {/* Innermost glow ring */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 160, height: 160,
                        border: `1px solid ${isLight ? "rgba(27,109,133,0.3)" : "rgba(27,109,133,0.4)"}`,
                        boxShadow: `0 0 40px rgba(27,109,133,0.15)`,
                        animation: "pulseRing 3s ease-in-out infinite",
                    }}
                />
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center gap-7">

                {/* Badge */}
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

                {/* Headline */}
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

                    {/* Rotating Gradient Word */}
                    <div className="h-[1.2rem] sm:h-[1.5rem] md:h-[1.8rem] flex items-center justify-center mt-4 mb-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={wordIdx}
                                className="flex"
                            >
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
                                        className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter leading-none"
                                        style={{
                                            color: wordColors[wordIdx],
                                            textShadow: isLight
                                                ? `0 0 20px ${wordColors[wordIdx]}20`
                                                : `0 0 30px ${wordColors[wordIdx]}40`,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Subheadline */}
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

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
                >
                    <Link
                        href="/contact"
                        className="group relative w-full sm:w-auto px-9 py-4 rounded-full font-bold text-lg text-white flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)",
                            backgroundSize: "200% 100%",
                            boxShadow: "0 0 30px rgba(27,109,133,0.45), 0 4px 20px rgba(0,0,0,0.15)",
                        }}
                    >
                        {/* shimmer overlay */}
                        <span
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)",
                                backgroundSize: "200% 100%",
                                animation: "shimmerBtn 2.4s linear infinite",
                            }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/services"
                        className="group w-full sm:w-auto px-9 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                        style={{
                            background: isLight ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.05)",
                            border: `1.5px solid ${isLight ? "rgba(27,109,133,0.22)" : "rgba(255,255,255,0.12)"}`,
                            color: "var(--color-foreground)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        Explore Services
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                </motion.div>

                {/* Stats Bar */}
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
                                {/* subtle colour accent at top */}
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

            {/* ── Scroll indicator ── */}
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

            {/* ── keyframes ── */}
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
