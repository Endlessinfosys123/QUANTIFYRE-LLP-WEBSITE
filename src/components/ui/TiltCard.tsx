"use client";

import { motion, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    accentColor?: string;
}

export default function TiltCard({ children, className = "", accentColor }: TiltCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { theme } = useTheme();
    const isLight = theme === "light";

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 12;
        const y = (clientY - top - height / 2) / 12;
        mouseX.set(x);
        mouseY.set(-y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    const accent = accentColor || "var(--color-primary)";

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: mouseY,
                rotateY: mouseX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`relative group ${className}`}
        >
            {/* Animated border glow */}
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                    background: `linear-gradient(135deg, ${accent}40, transparent, ${accent}20)`,
                    transform: "translateZ(-1px)",
                }}
            />

            <div
                style={{
                    transform: "translateZ(30px)",
                    background: isLight
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(255,255,255,0.025)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: `1px solid ${isLight ? "rgba(27,109,133,0.15)" : accent + "30"}`,
                    borderRadius: "1.5rem",
                    transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isLight
                        ? `0 4px 20px rgba(27,109,133,0.08)`
                        : `0 4px 20px ${accent}10`,
                }}
                className="w-full h-full p-8 flex flex-col relative overflow-hidden group-hover:border-opacity-60 group-hover:-translate-y-1 transition-transform"
            >
                {/* Shimmer line at top */}
                <div
                    className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-line"
                />

                {/* Spotlight glow on hover - following mouse */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 350px at ${mouseX}px ${-mouseY}px, ${accent}15, transparent 70%)`,
                        borderRadius: "1.5rem",
                    }}
                />

                {children}
            </div>
        </motion.div>
    );
}
