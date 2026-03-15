'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ThreeDAICore() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center preserve-3d">
            {/* The Core Pulsating Octahedron (3D CSS) */}
            <motion.div
                animate={{ 
                    rotateY: 360,
                    rotateX: [0, 10, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-64 h-64 preserve-3d flex items-center justify-center"
            >
                {/* 3D Faces of the Core */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-40 h-40 border border-accent/40 bg-accent/5 backdrop-blur-sm"
                        style={{
                            transform: `rotateY(${i * 45}deg) rotateX(45deg) translateZ(80px)`,
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                            boxShadow: "0 0 30px rgba(60,207,109,0.2)"
                        }}
                    >
                        {/* Data Streams on faces */}
                        <motion.div 
                            className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent"
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                    </div>
                ))}

                {/* Internal Glow */}
                <div className="absolute w-20 h-20 bg-accent rounded-full blur-[60px] opacity-40 animate-pulse" />
                <div className="absolute w-10 h-10 bg-white rounded-full blur-[20px] opacity-60" />
            </motion.div>

            {/* Orbiting Data Rings */}
            {[
                { radius: 300, rotation: 60, duration: 40, color: "rgba(27,109,133,0.2)" },
                { radius: 240, rotation: -45, duration: 30, color: "rgba(60,207,109,0.2)" },
                { radius: 180, rotation: 15, duration: 20, color: "white" }
            ].map((ring, i) => (
                <motion.div
                    key={i}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                    className="absolute rounded-full border border-dashed border-white/10"
                    style={{
                        width: ring.radius,
                        height: ring.radius,
                        transform: `rotateX(${ring.rotation}deg)`,
                        borderColor: ring.color,
                        opacity: 0.3
                    }}
                />
            ))}

            {/* Neural Connections (Connecting Lines) */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
                <svg width="100%" height="100%" className="blur-[1px]">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3ccf6d" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <motion.path 
                        d="M 500,200 L 400,300 M 500,400 L 600,300 M 300,300 L 500,300" 
                        stroke="url(#lineGrad)" 
                        strokeWidth="1"
                        animate={{ strokeDashoffset: [0, 100] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        style={{ strokeDasharray: 50 }}
                    />
                </svg>
            </div>
        </div>
    );
}
