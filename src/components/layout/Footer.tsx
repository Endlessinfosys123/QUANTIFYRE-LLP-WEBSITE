"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const socialLinks = [
        { Icon: Twitter, href: "#", label: "Twitter" },
        { Icon: Linkedin, href: "#", label: "LinkedIn" },
        { Icon: Instagram, href: "#", label: "Instagram" },
        { Icon: Github, href: "#", label: "GitHub" },
    ];

    return (
        <footer
            className="w-full relative overflow-hidden pt-20 pb-12"
            style={{
                background: "var(--color-background)",
                borderTop: `1px solid var(--color-divider)`,
            }}
        >
            {/* Gradient Line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent 0%, var(--color-primary) 30%, var(--color-accent) 70%, transparent 100%)" }}
            />

            {/* Background Glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[18rem] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "var(--color-primary)", opacity: 0.07 }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative w-52 h-14">
                            <Image
                                src="/logo-footer.png"
                                alt="QUANTIFYRE Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed font-light" style={{ color: "var(--color-foreground-muted)" }}>
                            AI-powered digital, software, and automation solutions that quantify growth. The Future, Faster.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <MagneticButton key={label}>
                                    <motion.a
                                        href={href}
                                        aria-label={label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all"
                                        style={{
                                            background: isLight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.04)",
                                            borderColor: "var(--color-card-border)",
                                            color: "var(--color-foreground-muted)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </motion.a>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black tracking-widest uppercase" style={{ color: "var(--color-foreground)" }}>Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Pricing', href: '/pricing' },
                                { label: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm transition-colors hover:text-current group flex items-center gap-1.5"
                                        style={{ color: "var(--color-foreground-muted)" }}
                                    >
                                        <span
                                            className="w-0 h-[1px] group-hover:w-3 transition-all duration-300 rounded-full inline-block"
                                            style={{ background: "var(--color-accent)" }}
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black tracking-widest uppercase" style={{ color: "var(--color-foreground)" }}>Services</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Digital Marketing', href: '/services/digital-marketing' },
                                { label: 'Website Development', href: '/services/website-development' },
                                { label: 'Software Development', href: '/services/software-development' },
                                { label: 'AI Automations', href: '/services/ai-automations' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm transition-colors group flex items-center gap-1.5"
                                        style={{ color: "var(--color-foreground-muted)" }}
                                    >
                                        <span
                                            className="w-0 h-[1px] group-hover:w-3 transition-all duration-300 rounded-full inline-block"
                                            style={{ background: "var(--color-accent)" }}
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black tracking-widest uppercase" style={{ color: "var(--color-foreground)" }}>Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:contact.quantifyrellp@gmail.com"
                                    className="flex items-start gap-3 text-sm group transition-colors"
                                    style={{ color: "var(--color-foreground-muted)" }}
                                >
                                    <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "var(--color-primary)" }} />
                                    contact.quantifyrellp@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+916356195625"
                                    className="flex items-center gap-3 text-sm group transition-colors"
                                    style={{ color: "var(--color-foreground-muted)" }}
                                >
                                    <Phone className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "var(--color-primary)" }} />
                                    +91 6356195625
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm" style={{ color: "var(--color-foreground-muted)" }}>
                                <MapPin className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--color-primary)" }} />
                                <span>
                                    B-402, The Landmark<br />Near Kansar Hotel, Kudasan<br />Gandhinagar - 382421, Gujarat
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: `1px solid var(--color-divider)` }}
                >
                    <p className="text-sm" style={{ color: "var(--color-foreground-muted)", opacity: 0.6 }}>
                        © {new Date().getFullYear()} QUANTIFYRE LLP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm transition-colors"
                            style={{ color: "var(--color-foreground-muted)", opacity: 0.6 }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm transition-colors"
                            style={{ color: "var(--color-foreground-muted)", opacity: 0.6 }}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/data-deletion"
                            className="text-sm transition-colors"
                            style={{ color: "var(--color-foreground-muted)", opacity: 0.6 }}
                        >
                            Data Deletion
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
