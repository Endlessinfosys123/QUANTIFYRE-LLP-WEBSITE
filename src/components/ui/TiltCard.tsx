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

        // Set CSS variables for the spotlight effect
        const localX = clientX - left;
        const localY = clientY - top;
        (currentTarget as HTMLElement).style.setProperty("--mouse-x", `${localX}px`);
        (currentTarget as HTMLElement).style.setProperty("--mouse-y", `${localY}px`);
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
            <div 
                className="running-glow-container h-full w-full"
                style={{ "--glow-color": accent } as any}
            >
                {/* Running Outer Glow Track */}
                <div className="running-glow-track" />

                {/* Main Card Content */}
                <div
                    style={{
                        transform: "translateZ(30px)",
                        background: isLight
                            ? "rgba(255,255,255,0.92)"
                            : "rgba(5, 8, 13, 0.4)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: `1px solid ${isLight ? "rgba(27,109,133,0.1)" : "rgba(255,255,255,0.05)"}`,
                        borderRadius: "1.5rem",
                        transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-full h-full p-8 flex flex-col relative overflow-hidden glass-card"
                >
                    {/* Shimmer line at top */}
                    <div
                        className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-line"
                    />

                    {/* Spotlight glow on hover - following mouse cursor more smoothly */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent}15, transparent 80%)`,
                            borderRadius: "1.5rem",
                        }}
                    />

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
