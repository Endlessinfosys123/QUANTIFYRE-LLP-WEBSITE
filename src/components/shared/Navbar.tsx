"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            QUANTIFYRE
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/80'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="h-0.5 bg-primary mt-1 rounded-full"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link href="/contact" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
