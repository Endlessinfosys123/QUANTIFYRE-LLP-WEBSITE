'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart, Users } from 'lucide-react';

export default function ThreeDGrowthHelix() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center preserve-3d">
            {/* The Growth Helix Structure */}
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full preserve-3d flex items-center justify-center"
            >
                {[...Array(20)].map((_, i) => {
                    const angle = (i / 20) * Math.PI * 4; // 2 full rotations
                    const radius = 100;
                    const y = (i - 10) * 25;
                    const delay = i * 0.1;

                    return (
                        <React.Fragment key={i}>
                            {/* Helix Node 1 */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay }}
                                className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(27,109,133,0.8)]"
                                style={{
                                    transform: `rotateY(${angle}rad) translateZ(${radius}px) translateY(${y}px)`
                                }}
                            />
                            {/* Helix Node 2 (Mirror) */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
                                className="absolute w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(60,207,109,0.8)]"
                                style={{
                                    transform: `rotateY(${angle + Math.PI}rad) translateZ(${radius}px) translateY(${y}px)`
                                }}
                            />
                        </React.Fragment>
                    );
                })}
            </motion.div>

            {/* Floating Strategy Icons in 3D Space */}
            {[
                { Icon: Target, x: 150, y: -100, z: 50, color: "#3ccf6d" },
                { Icon: TrendingUp, x: -180, y: 50, z: -30, color: "#1b6d85" },
                { Icon: BarChart, x: 100, y: 150, z: 80, color: "white" },
                { Icon: Users, x: -120, y: -180, z: 20, color: "#3ccf6d" }
            ].map((node, i) => (
                <motion.div
                    key={i}
                    animate={{ 
                        y: [node.y - 10, node.y + 10, node.y - 10],
                        rotateY: [0, 360]
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                    style={{
                        transform: `translateX(${node.x}px) translateY(${node.y}px) translateZ(${node.z}px)`,
                        color: node.color
                    }}
                >
                    <node.Icon size={32} />
                </motion.div>
            ))}

            {/* Data Glow Core */}
            <div className="absolute w-32 h-[450px] bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20 blur-[60px] opacity-30 pointer-events-none" />
        </div>
    );
}
