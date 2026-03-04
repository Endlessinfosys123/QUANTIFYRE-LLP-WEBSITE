"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Map mouse position to -10 to 10 degrees
        const x = (clientX - left - width / 2) / 10;
        const y = (clientY - top - height / 2) / 10;

        mouseX.set(x);
        mouseY.set(-y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

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
                style={{ transform: "translateZ(30px)" }}
                className="w-full h-full glass-card p-8 flex flex-col relative overflow-hidden"
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

                {children}
            </div>
        </motion.div>
    );
}
