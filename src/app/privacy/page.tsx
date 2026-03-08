"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Globe, Mail, RefreshCw, AlertCircle } from "lucide-react";
import Link from "next/link";
import FloatingServiceOrbs from "@/components/ui/FloatingServiceOrbs";

const sections = [
    {
        id: "information-collected",
        icon: <Database className="w-5 h-5 text-accent" />,
        title: "Information We Collect",
        content: [
            {
                subtitle: "Personal Information",
                text: "When you interact with QUANTIFYRE LLP — whether through contact forms, service inquiries, or account creation — we may collect information such as your full name, email address, phone number, company name, and billing details. This information is provided voluntarily by you."
            },
            {
                subtitle: "Usage & Technical Data",
                text: "We automatically collect certain technical information when you visit our website, including your IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and other standard web analytics data. This helps us improve site performance and your browsing experience."
            },
            {
                subtitle: "Cookies & Tracking Technologies",
                text: "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyse trends, and administer the website. You may control cookie preferences through your browser settings; however, disabling cookies may affect certain features of our services."
            }
        ]
    },
    {
        id: "how-we-use",
        icon: <Eye className="w-5 h-5 text-accent" />,
        title: "How We Use Your Information",
        content: [
            {
                subtitle: "Service Delivery",
                text: "We use your information primarily to deliver, manage, and improve our services — including digital marketing, web development, software development, and AI automation solutions. Your data helps us tailor our offerings to your specific business needs."
            },
            {
                subtitle: "Communication",
                text: "We may use your contact details to send service-related communications, project updates, invoices, and responses to your inquiries. With your consent, we may also send promotional materials about new services, offers, and company news. You may opt out of marketing communications at any time."
            },
            {
                subtitle: "Analytics & Improvement",
                text: "Aggregated and anonymised usage data helps us understand how visitors interact with our website, enabling us to improve content, design, and functionality. We may also use data for internal research and to detect and prevent fraudulent activity."
            }
        ]
    },
    {
        id: "data-sharing",
        icon: <Globe className="w-5 h-5 text-accent" />,
        title: "Data Sharing & Disclosure",
        content: [
            {
                subtitle: "Third-Party Service Providers",
                text: "We may share your information with trusted third-party vendors who assist us in operating our business (e.g., cloud hosting providers, payment processors, CRM systems, and analytics platforms). These partners are contractually obligated to handle your data securely and only for the purposes we specify."
            },
            {
                subtitle: "Legal Requirements",
                text: "We may disclose your information when required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect the rights, property, or safety of QUANTIFYRE LLP, our clients, or the public."
            },
            {
                subtitle: "Business Transfers",
                text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any such change and your choices regarding your information."
            }
        ]
    },
    {
        id: "data-security",
        icon: <Lock className="w-5 h-5 text-accent" />,
        title: "Data Security",
        content: [
            {
                subtitle: "Security Measures",
                text: "We implement industry-standard technical, administrative, and physical security measures to protect your personal information from unauthorised access, disclosure, alteration, and destruction. These include SSL/TLS encryption for data in transit, secure server environments, and access controls."
            },
            {
                subtitle: "Retention",
                text: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymise it."
            }
        ]
    },
    {
        id: "your-rights",
        icon: <Shield className="w-5 h-5 text-accent" />,
        title: "Your Rights",
        content: [
            {
                subtitle: "Access & Correction",
                text: "You have the right to request access to the personal information we hold about you and to request corrections if the data is inaccurate or incomplete. To make such a request, please contact us at the email address provided below."
            },
            {
                subtitle: "Deletion & Portability",
                text: "Subject to applicable law, you may request deletion of your personal data or ask us to provide your data in a portable, machine-readable format. We will respond to such requests within 30 days and fulfil them to the extent required by applicable regulations."
            },
            {
                subtitle: "Opt-Out",
                text: "You may opt out of receiving marketing communications from us at any time by clicking the 'unsubscribe' link in any email or by contacting us directly. Opting out does not affect service-related communications essential to your active projects."
            }
        ]
    },
    {
        id: "updates",
        icon: <RefreshCw className="w-5 h-5 text-accent" />,
        title: "Policy Updates",
        content: [
            {
                subtitle: "Changes to This Policy",
                text: "We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will update the 'Last Updated' date at the top of this page and, where appropriate, notify you by email."
            }
        ]
    }
];

export default function PrivacyPage() {
    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen pt-20" style={{ background: "var(--color-background)" }}>

            {/* Hero Header */}
            <section className="relative w-full py-28 flex flex-col items-center text-center px-4 overflow-hidden">
                <FloatingServiceOrbs indices={[0, 1, 4, 5]} />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[20rem] orb-primary" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-3 px-5 py-2 rounded-full badge-glow text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                        <Shield className="w-4 h-4" />
                        <span>Legal Document</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight" style={{ color: "var(--color-foreground)" }}>
                        Privacy{" "}
                        <span className="gradient-text">Policy</span>
                    </h1>

                    <p className="max-w-2xl text-lg font-light leading-relaxed" style={{ color: "var(--color-foreground-muted)" }}>
                        At QUANTIFYRE LLP, we are committed to protecting your privacy and handling your data with full transparency and care.
                    </p>

                    <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full" style={{ color: "var(--color-foreground-muted)", border: "1px solid var(--color-divider)" }}>
                        <AlertCircle className="w-4 h-4" />
                        <span>Last Updated: March 7, 2026</span>
                    </div>
                </motion.div>
            </section>

            {/* Table of Contents */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-card p-8"
                >
                    <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "var(--color-foreground)" }}>
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Table of Contents
                    </h2>
                    <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sections.map((s, i) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center gap-3 transition-colors text-sm group hover:opacity-100"
                                style={{ color: "var(--color-foreground-muted)" }}
                            >
                                <span className="font-mono" style={{ color: "var(--color-primary)", opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}.</span>
                                <span className="group-hover:underline underline-offset-4">{s.title}</span>
                            </a>
                        ))}
                    </nav>
                </motion.div>
            </section>

            {/* Content Sections */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-8">
                {sections.map((section, idx) => (
                    <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="glass-card p-8 md:p-10 scroll-mt-28"
                    >
                        {/* Section Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl" style={{ background: "rgba(60,207,109,0.1)", border: "1px solid rgba(60,207,109,0.25)" }}>
                                {section.icon}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>{section.title}</h2>
                        </div>

                        {/* Sub-sections */}
                        <div className="space-y-7">
                            {section.content.map((item, i) => (
                                <div key={i} className={i !== 0 ? "pt-7" : ""} style={i !== 0 ? { borderTop: "1px solid var(--color-divider)" } : {}}>
                                    <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-primary)" }}>{item.subtitle}</h3>
                                    <p className="leading-relaxed text-sm font-light" style={{ color: "var(--color-foreground-muted)" }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Contact Block */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl p-10 overflow-hidden glass-card"
                    style={{ border: "1px solid rgba(27,109,133,0.35)", boxShadow: "0 0 40px rgba(27,109,133,0.15)" }}
                >
                    <div className="absolute top-0 right-0 w-48 h-48 orb-primary pointer-events-none rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                                <h3 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>Privacy Enquiries</h3>
                            </div>
                            <p className="text-sm font-light max-w-md" style={{ color: "var(--color-foreground-muted)" }}>
                                If you have any questions about this Privacy Policy or how we handle your data, please reach out to our team. We aim to respond to all enquiries within 2 business days.
                            </p>
                        </div>
                        <Link
                            href="mailto:contact.quantifyrellp@gmail.com"
                            className="shrink-0 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all whitespace-nowrap hover:scale-105"
                            style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))", boxShadow: "var(--shadow-glow-primary)" }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
