'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ThreeDAppDevice() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center preserve-3d">
            {/* The Floating Glass Phone */}
            <motion.div
                animate={{ 
                    rotateY: [-15, 15, -15],
                    y: [-20, 20, -20]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="relative w-[280px] h-[580px] rounded-[3rem] border-8 border-white/10 bg-black/40 backdrop-blur-xl preserve-3d shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
                {/* Internal Screen Layers */}
                {[
                    { color: "rgba(60,207,109,0.3)", z: 40, delay: 0.5, label: "Neural UI" },
                    { color: "rgba(27,109,133,0.3)", z: 80, delay: 0.7, label: "Performance" }
                ].map((layer, i) => (
                    <motion.div
                        key={i}
                        animate={{ translateZ: [layer.z, layer.z + 20, layer.z] }}
                        transition={{ duration: 4, repeat: Infinity, delay: layer.delay }}
                        className="absolute inset-4 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-md"
                        style={{ 
                            backgroundColor: layer.color,
                            transform: `translateZ(${layer.z}px)`
                        }}
                    >
                        <div className="text-[10px] font-bold text-white uppercase tracking-widest">{layer.label}</div>
                    </motion.div>
                ))}

                {/* Main Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1118]/80 to-background/50 rounded-[2.5rem] overflow-hidden p-6 pt-12">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 bg-black rounded-b-xl z-20" />
                    
                    <div className="space-y-4">
                        <div className="h-8 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                        <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
                        <div className="grid grid-cols-2 gap-3 pt-6">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-24 rounded-xl bg-white/5 border border-white/5" />
                            ))}
                        </div>
                    </div>

                    {/* Dock */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 flex items-center justify-around">
                         {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-lg bg-white/10" />
                        ))}
                    </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute -right-2 top-24 w-1 h-12 bg-white/20 rounded-l-md" />
                <div className="absolute -right-2 top-40 w-1 h-20 bg-white/20 rounded-l-md" />
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] border border-white/5 rounded-full border-dashed -z-10" 
            />
        </div>
    );
}
