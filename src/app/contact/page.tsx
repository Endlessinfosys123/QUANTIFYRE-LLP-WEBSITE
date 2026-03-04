"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                    Get in Touch
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Ready to accelerate your digital transformation? Contact our team of AI and software experts today.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary/20 p-3 rounded-lg mr-4 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium">Email Us</p>
                                    <a href="mailto:contact.quantifyrellp@gmail.com" className="text-foreground/70 hover:text-primary transition-colors block">contact.quantifyrellp@gmail.com</a>
                                    <a href="mailto:info.endlessinfosys@gmail.com" className="text-foreground/70 hover:text-primary transition-colors block">info.endlessinfosys@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary/20 p-3 rounded-lg mr-4 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium">Call Us</p>
                                    <a href="tel:+916356195625" className="text-foreground/70 hover:text-primary transition-colors block">+91 6356195625</a>
                                    <a href="tel:+917778095625" className="text-foreground/70 hover:text-primary transition-colors block">+91 7778095625</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary/20 p-3 rounded-lg mr-4 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium">Visit Us</p>
                                    <p className="text-foreground/70">
                                        B-402, The Landmark<br />
                                        Near Kansar Hotel, Kudasan<br />
                                        Gandhinagar - 382421, Gujarat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="+91 12345 67890"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="flex items-center text-green-400 bg-green-400/10 p-3 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <p>Message sent successfully! We'll be in touch soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center text-red-400 bg-red-400/10 p-3 rounded-lg">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                <p>Failed to send message. Please try again or email us directly.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        >
                            <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                            {!status && <Send className="w-5 h-5" />}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
