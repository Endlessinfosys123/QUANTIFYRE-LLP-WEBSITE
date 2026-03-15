'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ThreeDNeuralSynapse() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <div 
            className="relative w-full h-[600px] flex items-center justify-center preserve-3d cursor-crosshair overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Central Synapse Hub */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    transformStyle: "preserve-3d"
                }}
                className="relative z-10"
            >
                <div className="w-32 h-32 bg-primary/20 backdrop-blur-2xl rounded-full border border-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(27,109,133,0.5)]">
                    <div className="w-16 h-16 bg-accent rounded-full blur-[20px] opacity-60 animate-pulse" />
                </div>
            </motion.div>

            {/* Neural Dendrites (Random Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                {[...Array(15)].map((_, i) => (
                    <motion.path
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                        d={`M ${50 + Math.random() * 400} ${50 + Math.random() * 400} 
                           Q ${250} ${250} 
                           ${Math.random() * 1000} ${Math.random() * 600}`}
                        stroke="rgba(60,207,109,0.3)"
                        strokeWidth="1"
                        fill="none"
                    />
                ))}
            </svg>

            {/* Floating Information Packets */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                        y: [Math.random() * 600 - 300, Math.random() * 600 - 300],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
                />
            ))}

            {/* Background Perspective Grid */}
            <div 
                className="absolute inset-0 -z-10 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1b6d85 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)'
                }}
            />
        </div>
    );
}
