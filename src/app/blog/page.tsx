"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function BlogPage() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
        <div
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            <PageHeader
                title="Latest"
                gradientText="Insights"
                subtitle="Expert perspectives on AI, technology, and the future of digital engineering."
            />

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card overflow-hidden group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span 
                                        className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
                                        style={{ 
                                            background: "var(--color-primary)", 
                                            color: "white",
                                            boxShadow: "0 0 15px rgba(27,109,133,0.5)"
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider font-bold mb-4" style={{ color: "var(--color-foreground-muted)" }}>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </div>
                                </div>

                                <h3 
                                    className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors"
                                    style={{ color: "var(--color-foreground)" }}
                                >
                                    {post.title}
                                </h3>
                                
                                <p 
                                    className="text-sm font-light leading-relaxed mb-6 line-clamp-3"
                                    style={{ color: "var(--color-foreground-muted)" }}
                                >
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                                            <User className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-xs font-semibold" style={{ color: "var(--color-foreground)" }}>{post.author}</span>
                                    </div>

                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                                    >
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
