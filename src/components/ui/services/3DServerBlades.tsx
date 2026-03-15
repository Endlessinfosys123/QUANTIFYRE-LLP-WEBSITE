'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ThreeDServerBlades() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center preserve-3d">
            {/* Server Rack Frame */}
            <div className="absolute w-[400px] h-[550px] border-4 border-white/10 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col p-8 gap-4 shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                 style={{ transform: "rotateY(-20deg) rotateX(10deg)", transformStyle: "preserve-3d" }}>
                
                {/* Visual Rack Details */}
                <div className="absolute inset-y-0 left-2 w-1 bg-white/10" />
                <div className="absolute inset-y-0 right-2 w-1 bg-white/10" />

                {[1, 2, 3, 4, 5, 6].map((blade, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ 
                            x: 40, 
                            backgroundColor: "rgba(27,109,133,0.3)",
                            borderColor: "rgba(27,109,133,0.5)",
                        }}
                        className="relative w-full h-12 bg-black/60 border border-white/5 rounded-md flex items-center px-4 gap-4 cursor-pointer group transition-all"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Status Lights */}
                        <div className="flex gap-1.5 shrink-0">
                            <motion.div 
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                className="w-2 h-2 rounded-full bg-accent" 
                            />
                            <motion.div 
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.5 }}
                                className="w-2 h-2 rounded-full bg-primary" 
                            />
                        </div>

                        {/* ID */}
                        <div className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase">
                            BLK-{1024 + i * 16}
                        </div>

                        {/* Capacity Bar */}
                        <div className="flex-grow h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${40 + Math.random() * 50}%` }}
                                transition={{ duration: 2, delay: 1 }}
                                className="h-full bg-gradient-to-r from-primary to-accent" 
                            />
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-primary/10 to-transparent blur-sm" />
                    </motion.div>
                ))}

                {/* Bottom Stats */}
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center opacity-30">
                    <div className="text-[8px] font-mono text-white uppercase tracking-widest">Uptime: 99.999%</div>
                    <div className="text-[8px] font-mono text-white uppercase tracking-widest">Temp: 24°C</div>
                </div>
            </div>

            {/* Background 3D Depth Elements */}
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full border-dashed animate-[spin_60s_linear_infinite] -z-10" />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-20" 
            />
        </div>
    );
}
