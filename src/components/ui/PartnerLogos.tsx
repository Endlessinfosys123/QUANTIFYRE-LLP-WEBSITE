"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_2012.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Adobe_Corporate_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

export default function PartnerLogos() {
    return (
        <div className="w-full py-10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <span className="text-xs font-bold tracking-widest uppercase opacity-50" style={{ color: "var(--color-foreground)" }}>
                    Official Partners & Clients
                </span>
            </div>

            <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[var(--color-background)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[var(--color-background)] after:to-transparent">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the array for seamless looping */}
                    {[...partners, ...partners].map((partner, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center px-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
