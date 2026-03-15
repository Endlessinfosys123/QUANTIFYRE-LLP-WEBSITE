"use client";

import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black/40 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden ${className}`}
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            {icon}
          </div>
          <div className="font-bold text-white text-2xl mb-2 mt-2">
            {title}
          </div>
          <div className="font-light text-foreground/60 text-sm leading-relaxed">
            {description}
          </div>
        </div>
        {header && <div className="mt-4">{header}</div>}
      </div>
    </motion.div>
  );
};
