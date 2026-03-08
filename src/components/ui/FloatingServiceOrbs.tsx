"use client";

import { motion } from "framer-motion";
import { BarChart2, Globe, Code2, Smartphone, Zap, Bot, Brain, Palette } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

interface OrbConfig {
    Icon: React.ElementType;
    color: string;
    size: number;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay: number;
    animClass: string;
    opacity?: number;
}

const allOrbs: OrbConfig[] = [
    { Icon: BarChart2, color: "#FF8C00", size: 36, top: "12%", left: "4%", delay: 0, animClass: "float-animate", opacity: 0.7 },
    { Icon: Globe, color: "#1B6D85", size: 32, top: "20%", right: "5%", delay: 0.8, animClass: "float-animate-delay", opacity: 0.65 },
    { Icon: Code2, color: "#A020F0", size: 30, top: "55%", left: "3%", delay: 1.5, animClass: "float-animate-slow", opacity: 0.6 },
    { Icon: Smartphone, color: "#3CCF6D", size: 34, top: "65%", right: "4%", delay: 0.4, animClass: "float-animate", opacity: 0.65 },
    { Icon: Zap, color: "#FF3C50", size: 28, top: "38%", left: "2%", delay: 2.0, animClass: "float-animate-delay", opacity: 0.55 },
    { Icon: Bot, color: "#00B4FF", size: 32, top: "80%", right: "3%", delay: 1.2, animClass: "float-animate-slow", opacity: 0.6 },
    { Icon: Brain, color: "#18A74A", size: 30, bottom: "8%", left: "6%", delay: 0.6, animClass: "float-animate", opacity: 0.55 },
    { Icon: Palette, color: "#FF6B6B", size: 28, top: "44%", right: "2%", delay: 1.8, animClass: "float-animate-delay", opacity: 0.5 },
];

interface Props {
    /** Which orbs to show — pass indices of allOrbs, or omit for all */
    indices?: number[];
    /** Extra className on the container div */
    className?: string;
}

export default function FloatingServiceOrbs({ indices, className = "" }: Props) {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const orbs = indices ? indices.map((i) => allOrbs[i]) : allOrbs;

    return (
        <div
            className={`absolute inset-0 pointer-events-none select-none overflow-hidden hidden lg:block ${className}`}
            aria-hidden="true"
        >
            {orbs.map(({ Icon, color, size, top, bottom, left, right, delay, animClass, opacity }, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: opacity ?? 0.65, scale: 1, y: 0 }}
                    transition={{ delay: delay + 0.5, duration: 0.8, ease: "backOut" }}
                    className={animClass}
                    style={{ position: "absolute", top, bottom, left, right, animationDelay: `${delay}s` }}
                >
                    <div
                        className="relative rounded-2xl p-2.5 flex flex-col items-center justify-center gap-1"
                        style={{
                            background: isLight
                                ? `rgba(255,255,255,0.75)`
                                : `rgba(255,255,255,0.04)`,
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: `1px solid ${color}35`,
                            boxShadow: `0 4px 20px ${color}20, inset 0 0 15px ${color}12`,
                        }}
                    >
                        <Icon style={{ color, width: size, height: size }} strokeWidth={1.6} />
                        {/* Subtle pulse ring */}
                        <div
                            className="absolute inset-0 rounded-2xl pulse-ring"
                            style={{ border: `1px solid ${color}40` }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
