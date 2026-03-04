"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    // Note: Just simulating form submission for UX display
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // reset after 5s
    };

    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">
            <PageHeader
                title="Get in"
                gradientText="Touch"
                subtitle="Ready to transform your business with AI-powered solutions? Let's discuss how we can help you achieve your goals."
            />

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Glassmorphic Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 md:p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(27,109,133,0.1)]"
                    >
                        {/* Decorative form glow */}
                        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-1000" />

                        <div className="relative z-10 mb-8 flex items-center gap-4">
                            <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl">
                                <MessageSquare className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold">Send us a message</h3>
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-96 flex flex-col items-center justify-center text-center space-y-4"
                            >
                                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 border border-accent/40 shadow-[0_0_30px_rgba(60,207,109,0.3)]">
                                    <Send className="w-8 h-8 text-accent" />
                                </div>
                                <h4 className="text-3xl font-bold text-white">Message Sent!</h4>
                                <p className="text-foreground/60 font-light">We will review your message and a team member will contact you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/80 pl-1">Full Name</label>
                                        <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-light" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/80 pl-1">Email Address</label>
                                        <input required type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-light" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/80 pl-1">Company / Organization</label>
                                    <input type="text" placeholder="Your Company Ltd." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-light" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/80 pl-1">How can we help you?</label>
                                    <textarea required rows={4} placeholder="Describe your project, goals, or the solutions you are looking for..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-light resize-none" />
                                </div>

                                <button type="submit" className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(27,109,133,0.4)] flex justify-center items-center gap-2 group">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right: Contact Information Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Direct Contact Mapping</h3>
                            <div className="grid gap-6">

                                <div className="glass-card p-6 flex flex-col md:flex-row items-start gap-6 border-transparent hover:border-primary/30 group">
                                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-white/90">Email Us</h4>
                                        <a href="mailto:contact.quantifyrellp@gmail.com" className="block text-foreground/60 hover:text-accent font-light mb-1">contact.quantifyrellp@gmail.com</a>
                                        <a href="mailto:info.endlessinfosys@gmail.com" className="block text-foreground/60 hover:text-accent font-light">info.endlessinfosys@gmail.com</a>
                                        <p className="text-sm text-primary mt-3 font-medium">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="glass-card p-6 flex flex-col md:flex-row items-start gap-6 border-transparent hover:border-primary/30 group">
                                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-white/90">Call Us</h4>
                                        <a href="tel:+916356195625" className="block text-foreground/60 hover:text-accent font-light mb-1">+91 6356195625</a>
                                        <a href="tel:+917778095625" className="block text-foreground/60 hover:text-accent font-light">+91 7778095625</a>
                                        <p className="text-sm text-primary mt-3 font-medium">Mon-Fri 9AM-6PM IST</p>
                                    </div>
                                </div>

                                <div className="glass-card p-6 flex flex-col md:flex-row items-start gap-6 border-transparent hover:border-primary/30 group">
                                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-white/90">Visit Us</h4>
                                        <p className="text-foreground/60 font-light leading-relaxed">
                                            B-402, The Landmark, Near Kansar Hotel<br />
                                            Kudasan, Gandhinagar - 382421<br />
                                            Gujarat, India
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Process Timeline */}
                        <div className="pt-8 border-t border-white/10">
                            <h4 className="font-bold text-xl mb-6">What happens next?</h4>
                            <ul className="space-y-4">
                                {[
                                    "We'll review your message within 24 hours",
                                    "A team member will schedule a discovery call",
                                    "We'll prepare a tailored proposal for your needs",
                                    "Upon approval, we kick off your project"
                                ].map((step, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-4 text-foreground/70 font-light">
                                        <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/10 text-xs font-bold font-mono text-primary">
                                            {sIdx + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                </div>
            </section>

        </div>
    );
}
