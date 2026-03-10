"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import { Send, Trash2, ShieldCheck, Mail, Info } from "lucide-react";
import { FormEvent, useState } from "react";

export default function DataDeletionPage() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            reason: formData.get("reason"),
        };

        try {
            const response = await fetch("/api/data-deletion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errData = await response.json();
                setError(errData.error || "Failed to submit request. Please try again.");
            }
        } catch (err) {
            setError("A network error occurred. Please check your connection.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div
            className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20 relative"
            style={{ background: "var(--color-background)" }}
        >
            <PageHeader
                title="Data Deletion"
                gradientText="Request"
                subtitle="Request the permanent deletion of your personal data from our systems."
            />

            <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <FloatingServiceOrbs indices={[1, 3, 5]} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Instructions */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-1 space-y-6"
                    >
                        <div className="glass-card p-6 border-l-4" style={{ borderColor: "var(--color-primary)" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <Info className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                                <h3 className="font-bold text-lg">Process</h3>
                            </div>
                            <ul className="space-y-4 text-sm font-light leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                                <li>1. Submit your details through the form.</li>
                                <li>2. We will verify your identity via email.</li>
                                <li>3. Once verified, your data will be purged within 30 days.</li>
                                <li>4. You will receive a final confirmation email.</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                                <h3 className="font-bold text-lg">Your Privacy</h3>
                            </div>
                            <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                                This process is irreversible. All account information, project history, and personal details will be permanently removed.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form Component */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden"
                    >
                         {/* Decorative glow */}
                         <div
                            className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20"
                            style={{ background: "var(--color-accent)" }}
                        />

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                                    style={{
                                        background: "rgba(60,207,109,0.15)",
                                        border: "1px solid rgba(60,207,109,0.4)",
                                        boxShadow: "0 0 30px rgba(60,207,109,0.25)"
                                    }}
                                >
                                    <ShieldCheck className="w-10 h-10" style={{ color: "var(--color-accent)" }} />
                                </div>
                                <h4 className="text-3xl font-bold" style={{ color: "var(--color-foreground)" }}>
                                    Request Received
                                </h4>
                                <p style={{ color: "var(--color-foreground-muted)" }} className="font-light max-w-sm mx-auto">
                                    We have received your deletion request. Please check your email for the next steps to verify your identity.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="p-3 rounded-xl"
                                        style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)" }}
                                    >
                                        <Trash2 className="w-6 h-6 text-red-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>
                                        Deletion Details
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                            Full Name
                                        </label>
                                        <input
                                            name="name" required type="text" placeholder="John Doe"
                                            className="theme-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                            Registered Email Address
                                        </label>
                                        <input
                                            name="email" required type="email" placeholder="john@example.com"
                                            className="theme-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                            Optional: Why are you leaving us?
                                        </label>
                                        <textarea
                                            name="reason" rows={3} placeholder="We'd love to know if we could have done better..."
                                            className="theme-input resize-none"
                                        />
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                                        <input 
                                            type="checkbox" 
                                            required 
                                            id="confirm" 
                                            className="mt-1 w-4 h-4 rounded border-red-500/50 text-red-500 focus:ring-red-500"
                                        />
                                        <label htmlFor="confirm" className="text-xs font-light leading-tight" style={{ color: "var(--color-foreground-muted)" }}>
                                            I understand that this action is permanent and my data cannot be recovered once the deletion process is complete.
                                        </label>
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-red-500 text-sm font-semibold px-1">
                                        ⚠️ {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full py-4 rounded-xl font-bold text-lg text-white flex justify-center items-center gap-2 group transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{
                                        background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                                        boxShadow: "0 10px 20px -10px rgba(239, 68, 68, 0.5)"
                                    }}
                                >
                                    {sending ? "Processing..." : "Submit Deletion Request"}
                                    {!sending && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Additional Help */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm font-light" style={{ color: "var(--color-foreground-muted)" }}>
                        Need help? Email us directly at{" "}
                        <a href="mailto:privacy@quantifyre.com" className="font-semibold underline underline-offset-4" style={{ color: "var(--color-primary)" }}>
                            privacy@quantifyre.com
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
