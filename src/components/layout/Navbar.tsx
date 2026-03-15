"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
    ];

    const isLight = theme === "light";

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
                }`}
            style={{
                background: isScrolled ? "var(--color-glass-bg)" : "transparent",
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
                borderBottom: isScrolled ? `1px solid var(--color-glass-border)` : "none",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-10 flex items-center gap-2">
                        <div className="relative w-44 h-11">
                            <Image
                                src="/logo-navbar.png"
                                alt="QUANTIFYRE Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-all relative group"
                                style={{ color: "var(--color-foreground-muted)" }}
                            >
                                <span className="hover:text-current transition-colors">{link.name}</span>
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                />
                            </Link>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-110"
                            style={{
                                background: isLight ? "rgba(27,109,133,0.1)" : "rgba(255,255,255,0.05)",
                                borderColor: isLight ? "rgba(27,109,133,0.3)" : "rgba(255,255,255,0.12)",
                                boxShadow: isLight ? "0 0 15px rgba(27,109,133,0.2)" : "0 0 15px rgba(255,255,255,0.05)",
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isLight ? (
                                    <motion.span
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute"
                                    >
                                        <Moon className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="sun"
                                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute"
                                    >
                                        <Sun className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        <Link
                            href="/contact"
                            className="px-6 py-2 rounded-full text-white font-semibold text-sm transition-all"
                            style={{
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                boxShadow: "var(--shadow-glow-primary)",
                            }}
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Right Controls */}
                    <div className="md:hidden flex items-center gap-3 z-10">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
                            style={{
                                background: isLight ? "rgba(27,109,133,0.1)" : "rgba(255,255,255,0.05)",
                                borderColor: isLight ? "rgba(27,109,133,0.25)" : "rgba(255,255,255,0.1)",
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isLight ? (
                                    <motion.span key="moon-m" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute">
                                        <Moon className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                                    </motion.span>
                                ) : (
                                    <motion.span key="sun-m" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute">
                                        <Sun className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        <button
                            style={{ color: "var(--color-foreground)" }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-0 left-0 w-full pt-24 px-6 fixed inset-0 overflow-y-auto"
                        style={{
                            background: "var(--color-glass-bg)",
                            backdropFilter: "blur(30px)",
                            WebkitBackdropFilter: "blur(30px)",
                        }}
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold pb-4 transition-colors"
                                    style={{
                                        color: "var(--color-foreground)",
                                        borderBottom: `1px solid var(--color-divider)`,
                                    }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-8 px-6 py-4 rounded-xl text-center font-bold text-white"
                                style={{
                                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                    boxShadow: "var(--shadow-glow-primary)",
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
