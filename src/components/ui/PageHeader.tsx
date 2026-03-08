"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    gradientText?: string;
}

export default function PageHeader({ title, subtitle, gradientText }: PageHeaderProps) {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
        <section
            className="relative w-full py-32 flex items-center justify-center overflow-hidden"
            style={{
                borderBottom: `1px solid var(--color-divider)`,
                background: "var(--color-background)",
            }}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-x-0 bottom-0 h-full"
                    style={{
                        backgroundImage: `linear-gradient(to_right,${isLight ? "#1B6D8514" : "#80808012"} 1px,transparent 1px),linear-gradient(to_bottom,${isLight ? "#1B6D8514" : "#80808012"} 1px,transparent 1px)`,
                        backgroundSize: "4rem 4rem",
                        maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                        transform: "rotateX(60deg) translateY(-100px) scale(2)",
                    }}
                />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] rounded-full blur-[100px] pointer-events-none"
                    style={{ background: "var(--color-primary)", opacity: isLight ? 0.12 : 0.18, mixBlendMode: "screen" }}
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-5"
                >
                    <span
                        className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase badge-glow"
                        style={{ color: "var(--color-accent)" }}
                    >
                        ✦ QUANTIFYRE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                    style={{ color: "var(--color-foreground)" }}
                >
                    {title}{" "}
                    {gradientText && <span className="gradient-text">{gradientText}</span>}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl max-w-2xl mx-auto font-light"
                    style={{ color: "var(--color-foreground-muted)" }}
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Floating particles */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                style={{ background: "var(--color-accent)" }}
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full"
                style={{ background: "var(--color-primary)" }}
            />
            <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-accent)" }}
            />
        </section>
    );
}
