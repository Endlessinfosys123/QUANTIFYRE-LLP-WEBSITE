"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { theme } = useTheme();
    const isLight = theme === "light";

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            mobile: `${formData.get("countryCode")} ${formData.get("mobile")}`,
            service: formData.get("service"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errData = await response.json();
                setError(errData.error || "Failed to send message. Please try again.");
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
                title="Get in"
                gradientText="Touch"
                subtitle="Let's build something extraordinary together. Tell us your vision and we'll make it reality."
            />

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10 overflow-hidden">
                <FloatingServiceOrbs indices={[0, 1, 2, 3, 4, 5]} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start relative z-10">

                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 md:p-10 relative overflow-hidden"
                    >
                        {/* Decorative glow */}
                        <div
                            className="absolute -top-20 -left-20 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-30"
                            style={{ background: "var(--color-primary)" }}
                        />

                        <div className="relative z-10 mb-8 flex items-center gap-4">
                            <div
                                className="p-3 rounded-xl"
                                style={{ background: "rgba(27,109,133,0.12)", border: "1px solid rgba(27,109,133,0.25)" }}
                            >
                                <MessageSquare className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>
                                Send us a message
                            </h3>
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-80 flex flex-col items-center justify-center text-center space-y-4"
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                                    style={{
                                        background: "rgba(60,207,109,0.15)",
                                        border: "1px solid rgba(60,207,109,0.4)",
                                        boxShadow: "0 0 30px rgba(60,207,109,0.25)"
                                    }}
                                >
                                    <Send className="w-8 h-8" style={{ color: "var(--color-accent)" }} />
                                </div>
                                <h4 className="text-3xl font-bold" style={{ color: "var(--color-foreground)" }}>
                                    Message Sent! 🎉
                                </h4>
                                <p style={{ color: "var(--color-foreground-muted)" }} className="font-light">
                                    A team member will contact you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                            Email Address
                                        </label>
                                        <input
                                            name="email" required type="email" placeholder="john@company.com"
                                            className="theme-input"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                            Company Name
                                        </label>
                                        <input
                                            name="company" required type="text" placeholder="Quantifyre Inc."
                                            className="theme-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                            Mobile Number
                                        </label>
                                        <div className="flex gap-2">
                                            <select 
                                                name="countryCode" 
                                                className="theme-input w-[100px] text-xs px-2"
                                                defaultValue="+91"
                                            >
                                                <option value="+91">+91 (IN)</option>
                                                <option value="+1">+1 (US)</option>
                                                <option value="+44">+44 (UK)</option>
                                                <option value="+971">+971 (UAE)</option>
                                                <option value="+61">+61 (AU)</option>
                                                <option value="+65">+65 (SG)</option>
                                            </select>
                                            <input
                                                name="mobile" required type="tel" placeholder="9876543210"
                                                className="theme-input flex-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                        Interested Service
                                    </label>
                                    <select
                                        name="service" required
                                        className="theme-input appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="Software Development">Software Development</option>
                                        <option value="AI Automations">AI Automations</option>
                                        <option value="AI Tools Development">AI Tools Development</option>
                                        <option value="Application Development">Application Development</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Other">Other / Custom Solution</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold pl-1" style={{ color: "var(--color-foreground-muted)" }}>
                                        Project Description
                                    </label>
                                    <textarea
                                        name="message" required rows={4} placeholder="Tell us about your project or vision..."
                                        className="theme-input resize-none"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-500 text-sm font-semibold px-1 animate-pulse">
                                        ⚠️ {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full py-4 rounded-xl font-bold text-lg text-white flex justify-center items-center gap-2 group transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{
                                        background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                        boxShadow: "var(--shadow-glow-primary)"
                                    }}
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                    {!sending && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right: Contact Cards + Next Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>
                            Direct Contact
                        </h3>

                        {[
                            {
                                icon: <Mail className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
                                title: "Email Us",
                                lines: ["contact.quantifyrellp@gmail.com", "info.endlessinfosys@gmail.com"],
                                note: "Response within 24 hours"
                            },
                            {
                                icon: <Phone className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
                                title: "Call Us",
                                lines: ["+91 6356195625", "+91 7778095625"],
                                note: "Mon–Fri 9AM–6PM IST"
                            },
                            {
                                icon: <MapPin className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
                                title: "Visit Us",
                                lines: ["B-402, The Landmark, Near Kansar Hotel", "Kudasan, Gandhinagar – 382421, Gujarat"],
                                note: ""
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="glass-card p-5 flex items-start gap-5 group"
                            >
                                <div
                                    className="p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform"
                                    style={{ background: "rgba(27,109,133,0.1)", border: "1px solid rgba(27,109,133,0.2)" }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-base mb-1.5" style={{ color: "var(--color-foreground)" }}>
                                        {item.title}
                                    </h4>
                                    {item.lines.map((line, li) => (
                                        <p key={li} className="text-sm font-light mb-0.5" style={{ color: "var(--color-foreground-muted)" }}>
                                            {line}
                                        </p>
                                    ))}
                                    {item.note && (
                                        <p className="text-xs font-semibold mt-2" style={{ color: "var(--color-primary)" }}>
                                            {item.note}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* What Happens Next */}
                        <div className="pt-6" style={{ borderTop: `1px solid var(--color-divider)` }}>
                            <h4 className="font-bold text-lg mb-5" style={{ color: "var(--color-foreground)" }}>
                                What happens next?
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "We'll review your message within 24 hours",
                                    "A team member will schedule a discovery call",
                                    "We'll prepare a tailored proposal for your needs",
                                    "Upon approval, we kick off your project!"
                                ].map((step, si) => (
                                    <li key={si} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-foreground-muted)" }}>
                                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
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
