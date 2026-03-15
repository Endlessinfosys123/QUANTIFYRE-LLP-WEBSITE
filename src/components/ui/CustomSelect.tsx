"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    className?: string;
}

export default function CustomSelect({
    options,
    placeholder = "Select an option",
    value,
    onChange,
    name,
    className = "",
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(value || "");
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === selected);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
        setSelected(val);
        setIsOpen(false);
        if (onChange) onChange(val);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {/* Hidden Input for Form Submission */}
            <input type="hidden" name={name} value={selected} />

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between text-left transition-all px-4 py-3 ${className.includes('theme-input') ? '' : 'theme-input'} ${className}`}
                style={{
                    borderColor: isOpen ? "var(--color-primary)" : "var(--color-input-border)",
                    boxShadow: (isOpen && !className.includes('border-none')) ? "0 0 0 2px rgba(27,109,133,0.2)" : "none",
                }}
            >
                <span className={`${selected ? "text-fg" : "text-muted"} truncate pr-2`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "var(--color-foreground-muted)" }}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 5, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full rounded-xl overflow-hidden border shadow-2xl"
                        style={{
                            background: "var(--color-glass-bg)",
                            backdropFilter: "blur(20px)",
                            borderColor: "var(--color-glass-border)",
                        }}
                    >
                        <div className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className="w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary/10 flex items-center justify-between group"
                                    style={{
                                        color: selected === option.value ? "var(--color-primary)" : "var(--color-foreground)",
                                        background: selected === option.value ? "rgba(27,109,133,0.08)" : "transparent",
                                    }}
                                >
                                    {option.label}
                                    {selected === option.value && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="w-1.5 h-1.5 rounded-full bg-primary"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
