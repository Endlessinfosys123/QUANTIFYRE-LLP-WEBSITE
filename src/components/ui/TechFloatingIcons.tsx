'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Code, Cpu, Database, Layout, 
  Terminal, Globe, Layers, Binary,
  Braces, Cloud
} from 'lucide-react';

const icons = [
  { Icon: Code, color: '#61DAFB', label: 'React' },
  { Icon: Braces, color: '#f7df1e', label: 'JS' },
  { Icon: Binary, color: '#2b64a1', label: 'TS' },
  { Icon: Terminal, color: '#4E9F3D', label: 'Python' }, // Terminal as a proxy for scripting/python
  { Icon: Database, color: '#336791', label: 'SQL' },
  { Icon: Cloud, color: '#00A4EF', label: 'Cloud' },
  { Icon: Layout, color: '#E44D26', label: 'HTML' },
  { Icon: Cpu, color: '#FF9900', label: 'AI' },
];

function FloatingIcon({ item, index }: { item: typeof icons[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Initial random positions
  const { initialX, initialY, duration, size } = useMemo(() => ({
    initialX: Math.random() * 80 + 10,
    initialY: Math.random() * 80 + 10,
    duration: 15 + Math.random() * 15,
    size: Math.random() * 20 + 35
  }), []);

  // Mouse repulsion spring
  const springConfig = { stiffness: 150, damping: 20 };
  const dx = useSpring(0, springConfig);
  const dy = useSpring(0, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = (initialX / 100) * window.innerWidth;
      const centerY = (initialY / 100) * window.innerHeight;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      
      if (dist < 300) {
        const power = (300 - dist) / 300;
        dx.set((centerX - e.clientX) * power * 0.5);
        dy.set((centerY - e.clientY) * power * 0.5);
      } else {
        dx.set(0);
        dy.set(0);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [initialX, initialY, dx, dy]);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center p-4"
      initial={{ x: `${initialX}%`, y: `${initialY}%`, opacity: 0 }}
      animate={{
        opacity: [0, 0.4, 0.4, 0],
        rotate: [0, 360],
        scale: [0.8, 1.1, 1.1, 0.8]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ 
        color: item.color,
        translateX: dx,
        translateY: dy,
        left: `${initialX}%`,
        top: `${initialY}%`
      }}
    >
      <item.Icon size={size} strokeWidth={1} style={{ filter: `drop-shadow(0 0 10px ${item.color}40)` }} />
      <span className="text-[10px] font-bold mt-1 opacity-50 uppercase tracking-tighter" style={{ color: item.color }}>{item.label}</span>
    </motion.div>
  );
}

export default function TechFloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {icons.map((item, i) => (
        <FloatingIcon key={i} item={item} index={i} />
      ))}
    </div>
  );
}
