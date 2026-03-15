"use client";

import { useParams } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import PageHeader from "@/components/ui/PageHeader";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const found = blogPosts.find(p => p.slug === slug);
        if (found) setPost(found);
    }, [slug]);

    if (!post) return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Article not found</h1>
        </div>
    );

    return (
        <div 
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            <PageHeader
                title={post.category === "Case Study" ? "Case" : post.category}
                gradientText={post.category === "Case Study" ? "Study" : "Insight"}
                subtitle={post.title}
            />

            <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                {/* Back Link */}
                <Link 
                    href="/blog"
                    className="flex items-center gap-2 text-sm font-bold text-primary mb-12 hover:-translate-x-1 transition-transform"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Insights
                </Link>

                {/* Cover Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-[450px] rounded-[2rem] overflow-hidden mb-12 border border-white/10"
                >
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>

                {/* Article Info */}
                <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                            <User className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-foreground-muted)" }}>Author</span>
                            <span className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>{post.author}</span>
                        </div>
                    </div>

                    <div className="h-6 w-px bg-white/10 hidden sm:block" />

                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 opacity-50" />
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-foreground-muted)" }}>Published</span>
                            <span className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>{post.date}</span>
                        </div>
                    </div>

                    <div className="h-6 w-px bg-white/10 hidden sm:block" />

                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 opacity-50" />
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-foreground-muted)" }}>Read Time</span>
                            <span className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <article 
                    className="prose prose-invert prose-lg max-w-none"
                    style={{ color: "var(--color-foreground-muted)" }}
                >
                    <p className="text-xl leading-relaxed font-light mb-8 italic" style={{ color: "var(--color-foreground)" }}>
                        {post.excerpt}
                    </p>
                    
                    <div className="space-y-6 font-light leading-relaxed">
                        <p>
                            In the rapidly evolving landscape of the digital era, technological integration is no longer a luxury but a cornerstone of competitive advantage. At Quantifyre, we've observed a fundamental shift in how enterprises approach problem-solving, moving from reactive mitigation to proactive, AI-driven architectures.
                        </p>
                        
                        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "var(--color-foreground)" }}>The Paradigm Shift</h2>
                        <p>
                            Traditional workflows often suffer from bottleneck fragmentation—points in a process where human intervention slows down high-frequency data streams. By implementing neural triggers and intelligent agent layers, we can automate these intersections, allowing for sub-second decision making at scale.
                        </p>

                        <div className="my-12 p-8 glass-card border-l-4 border-l-primary relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10" style={{ background: "var(--color-primary)" }} />
                            <p className="text-xl font-bold relative z-10 italic" style={{ color: "var(--color-foreground)" }}>
                                "The goal isn't just to do things faster, but to do things that were previously impossible."
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "var(--color-foreground)" }}>Conclusion</h2>
                        <p>
                            Whether it's scaling customer support with RAG-based LLMs or optimizing cloud infrastructure with predictive analytics, the focus remains the same: Quantifying growth through intelligence. As we move further into 2026, those who embrace these 'quantum' shifts in digital engineering will define the market standards of tomorrow.
                        </p>
                    </div>
                </article>

                {/* Share */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <h4 className="text-lg font-bold" style={{ color: "var(--color-foreground)" }}>Share this insight:</h4>
                    <div className="flex gap-4">
                        {[
                            { Icon: Facebook, color: "#1877F2" },
                            { Icon: Twitter, color: "#1DA1F2" },
                            { Icon: Linkedin, color: "#0A66C2" },
                            { Icon: Share2, color: "var(--color-primary)" }
                        ].map(({ Icon, color }, i) => (
                            <button 
                                key={i}
                                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all hover:bg-white/5"
                                style={{ color }}
                            >
                                <Icon className="w-5 h-5" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
