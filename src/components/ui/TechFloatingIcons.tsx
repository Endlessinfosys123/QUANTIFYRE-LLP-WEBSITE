'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Cpu, Database, Layout, 
  Terminal, Globe, Layers, Binary,
  Braces, Cloud
} from 'lucide-react';

const icons = [
  { Icon: Code, color: '#61DAFB' },     // React Blue
  { Icon: Database, color: '#336791' }, // Postgres Blue
  { Icon: Cpu, color: '#FF9900' },     // AWS Orange
  { Icon: Binary, color: '#2b64a1' },   // TS Blue
  { Icon: Braces, color: '#f7df1e' },   // JS Yellow
  { Icon: Terminal, color: '#4E9F3D' }, // Bash Green
  { Icon: Cloud, color: '#00A4EF' },    // Azure/Cloud Blue
  { Icon: Globe, color: '#3CCF6D' },    // Web Green
];

export default function TechFloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {icons.map((item, i) => {
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = 20 + Math.random() * 20;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${initialX}%`, 
              y: `${initialY}%`, 
              opacity: 0,
              scale: 0.5,
              rotate: 0
            }}
            animate={{
              x: [
                `${initialX}%`, 
                `${(initialX + 15) % 100}%`, 
                `${(initialX - 15 + 100) % 100}%`, 
                `${initialX}%`
              ],
              y: [
                `${initialY}%`, 
                `${(initialY - 15 + 100) % 100}%`, 
                `${(initialY + 15) % 100}%`, 
                `${initialY}%`
              ],
              opacity: [0, 0.15, 0.15, 0],
              scale: [0.5, 0.8, 0.8, 0.5],
              rotate: 360
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ color: item.color }}
          >
            <item.Icon size={Math.random() * 20 + 30} strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}
