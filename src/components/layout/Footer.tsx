"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden bg-background pt-24 pb-12 border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative w-48 h-12">
                            <Image
                                src="https://quantifyrellp.vercel.app/logo.png"
                                alt="QUANTIFYRE Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-foreground/60 leading-relaxed text-sm">
                            AI-powered digital, software, and automation solutions that quantify growth. The Future, Faster.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-foreground/60 hover:text-accent transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-4">
                            {['Digital Marketing', 'Website Development', 'Software Development', 'AI Automations'].map((item) => (
                                <li key={item}>
                                    <Link href={`/services/${item.toLowerCase().replace(' ', '-')}`} className="text-foreground/60 hover:text-accent transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:contact.quantifyrellp@gmail.com" className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors text-sm group">
                                    <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                    contact.quantifyrellp@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+916356195625" className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors text-sm group">
                                    <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                    +91 6356195625
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-foreground/60 text-sm">
                                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <span>
                                    B-402, The Landmark<br />Near Kansar Hotel, Kudasan<br />Gandhinagar - 382421, Gujarat
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/40 text-sm">
                        © {new Date().getFullYear()} QUANTIFYRE LLP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-foreground/40 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                        <Link href="/terms" className="text-foreground/40 hover:text-white transition-colors text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
