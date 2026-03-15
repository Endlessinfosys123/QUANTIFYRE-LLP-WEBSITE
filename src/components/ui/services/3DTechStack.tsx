'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ThreeDTechStack() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center preserve-3d">
            {/* Visual Layers of a Website */}
            {[
                { label: "User Interface", color: "rgba(60,207,109,0.2)", z: 120, delay: 0 },
                { label: "Business Logic", color: "rgba(27,109,133,0.3)", z: 60, delay: 0.2 },
                { label: "Data Layer", color: "rgba(255,255,255,0.05)", z: 0, delay: 0.4 },
                { label: "Infrastructure", color: "rgba(13,27,42,0.5)", z: -60, delay: 0.6 }
            ].map((layer, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, rotateX: 60, rotateZ: -25, y: 100 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        rotateX: 60,
                        rotateZ: -25,
                        translateZ: layer.z
                    }}
                    whileHover={{ 
                        translateZ: layer.z + 40,
                        backgroundColor: "rgba(60,207,109,0.1)",
                        transition: { duration: 0.3 }
                    }}
                    transition={{ 
                        duration: 1, 
                        delay: layer.delay,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute w-[300px] h-[200px] rounded-2xl border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group"
                    style={{ 
                        backgroundColor: layer.color,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Inner Content */}
                    <div className="relative z-10 text-center">
                        <div className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">Layer {4-i}</div>
                        <div className="text-white font-bold tracking-wider">{layer.label}</div>
                    </div>

                    {/* Animated Shine */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full"
                        animate={{ translateX: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    />

                    {/* Content Wireframe simulation */}
                    <div className="absolute inset-4 border border-white/5 rounded-lg pointer-events-none opacity-20">
                        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/10" />
                        <div className="absolute top-4 left-12 w-20 h-2 bg-white/10 rounded-full" />
                        <div className="absolute bottom-4 left-2 right-2 h-12 bg-white/5 rounded-md" />
                    </div>
                </motion.div>
            ))}

            {/* Connecting Verticals (The "Stack" Spine) */}
            <div className="absolute w-[1px] h-[300px] bg-gradient-to-t from-transparent via-accent/30 to-transparent -translate-z-20" />
        </div>
    );
}
