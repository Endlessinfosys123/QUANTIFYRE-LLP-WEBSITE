"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, CreditCard, Scale, RefreshCw, AlertTriangle, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

const sections = [
    {
        id: "acceptance",
        icon: <CheckCircle className="w-5 h-5 text-accent" />,
        title: "Acceptance of Terms",
        content: [
            {
                subtitle: "Agreement to Terms",
                text: "By accessing or using any services offered by QUANTIFYRE LLP ('Company', 'we', 'us', or 'our'), including our website, digital marketing, website development, software development, and AI automation services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services."
            },
            {
                subtitle: "Eligibility",
                text: "Our services are intended for businesses and individuals who are at least 18 years of age and have the legal authority to enter into binding contracts. By using our services, you represent and warrant that you meet these eligibility requirements."
            }
        ]
    },
    {
        id: "services",
        icon: <FileText className="w-5 h-5 text-accent" />,
        title: "Our Services",
        content: [
            {
                subtitle: "Scope of Services",
                text: "QUANTIFYRE LLP provides a range of digital and technology services including, but not limited to: AI-powered digital marketing, website and web application development, custom software development, AI automation solutions, and business intelligence consulting. The specific scope, deliverables, and timeline of each engagement are defined in a Statement of Work (SOW) or Service Agreement executed between the parties."
            },
            {
                subtitle: "Service Modifications",
                text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. For ongoing retainer or subscription-based clients, we will provide a minimum of 30 days' notice before making significant changes that affect your active services."
            },
            {
                subtitle: "Third-Party Integrations",
                text: "Some of our services may involve integration with third-party platforms (e.g., Google Analytics, Meta Ads, CRM tools, cloud providers). Your use of those platforms is subject to their respective terms of service. We are not responsible for any disruption, policy change, or data handling by third-party platforms."
            }
        ]
    },
    {
        id: "client-obligations",
        icon: <CheckCircle className="w-5 h-5 text-accent" />,
        title: "Client Obligations",
        content: [
            {
                subtitle: "Accurate Information",
                text: "You agree to provide accurate, current, and complete information as reasonably required for us to perform our services. This includes timely provision of assets, access credentials, content, approvals, and feedback. Delays caused by the client may affect project timelines and deliverables."
            },
            {
                subtitle: "Lawful Use",
                text: "You agree to use our services only for lawful purposes and in compliance with all applicable local, state, national, and international laws and regulations. You must not use our services to create, promote, or distribute content that is illegal, defamatory, harassing, infringing on intellectual property rights, or otherwise harmful."
            },
            {
                subtitle: "Account Security",
                text: "If we create accounts or provide credentials for project management tools or client portals, you are responsible for maintaining the confidentiality of those credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use."
            }
        ]
    },
    {
        id: "payment",
        icon: <CreditCard className="w-5 h-5 text-accent" />,
        title: "Payment Terms",
        content: [
            {
                subtitle: "Fees & Invoicing",
                text: "Service fees are as outlined in your project proposal or service agreement. Invoices are typically issued upon project milestones or on a monthly basis for retainer engagements. All amounts are in Indian Rupees (INR) unless otherwise specified. Applicable taxes (including GST) will be added to all invoices."
            },
            {
                subtitle: "Payment Schedule",
                text: "For project-based engagements, we typically require a deposit of 50% before work commences, with the balance due upon project completion or as specified in the SOW. For recurring services, payment is due within 14 days of the invoice date."
            },
            {
                subtitle: "Late Payments",
                text: "Invoices not paid within the agreed payment terms are subject to a late payment charge of 1.5% per month on the outstanding balance. We reserve the right to pause or suspend services on accounts with overdue balances until payment is received in full."
            },
            {
                subtitle: "Refund Policy",
                text: "Due to the custom nature of our work, deposits are generally non-refundable once work has commenced. Refund requests for specific deliverables are handled on a case-by-case basis and assessed against the work completed at the time of the request. Where a refund is agreed, it will be processed within 15 business days."
            }
        ]
    },
    {
        id: "intellectual-property",
        icon: <ShieldCheck className="w-5 h-5 text-accent" />,
        title: "Intellectual Property",
        content: [
            {
                subtitle: "Ownership of Deliverables",
                text: "Upon receipt of full payment, QUANTIFYRE LLP assigns to the client all intellectual property rights in the final custom deliverables created specifically for that client under the relevant engagement, unless otherwise agreed in writing. This assignment does not include ownership of pre-existing tools, frameworks, libraries, or methodologies."
            },
            {
                subtitle: "Our Proprietary Materials",
                text: "All content on our website, including text, graphics, logos, designs, and software, is the exclusive property of QUANTIFYRE LLP or its licensors. You may not reproduce, distribute, or create derivative works from our proprietary materials without our express written permission."
            },
            {
                subtitle: "Portfolio & Testimonials",
                text: "Unless you expressly object in writing, we reserve the right to describe our work for you in our portfolio, case studies, and marketing materials. We will never disclose confidential business information without your consent."
            }
        ]
    },
    {
        id: "liability",
        icon: <Scale className="w-5 h-5 text-accent" />,
        title: "Limitation of Liability",
        content: [
            {
                subtitle: "Disclaimer of Warranties",
                text: "Our services are provided on an 'as is' and 'as available' basis. To the fullest extent permitted by law, QUANTIFYRE LLP disclaims all express or implied warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement."
            },
            {
                subtitle: "Limitation of Damages",
                text: "In no event shall QUANTIFYRE LLP be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of the possibility of such damages. Our total aggregate liability for any claims arising under these terms shall not exceed the total fees paid by you to us in the 3 months preceding the claim."
            },
            {
                subtitle: "Indemnification",
                text: "You agree to indemnify, defend, and hold harmless QUANTIFYRE LLP, its directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your breach of these Terms or your misuse of our services."
            }
        ]
    },
    {
        id: "termination",
        icon: <XCircle className="w-5 h-5 text-accent" />,
        title: "Termination",
        content: [
            {
                subtitle: "Termination by Client",
                text: "You may terminate a project or service engagement by providing written notice as specified in your service agreement — typically 30 days for ongoing services. Any work completed up to the point of termination is billable at the agreed rates."
            },
            {
                subtitle: "Termination by QUANTIFYRE LLP",
                text: "We may suspend or terminate our services immediately, without prior notice, if you breach these Terms or engage in conduct we reasonably determine to be harmful, illegal, or contrary to our values. In such cases, no refunds will be issued for work already completed."
            }
        ]
    },
    {
        id: "governing-law",
        icon: <RefreshCw className="w-5 h-5 text-accent" />,
        title: "Governing Law & Updates",
        content: [
            {
                subtitle: "Governing Law",
                text: "These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Gandhinagar, Gujarat, India."
            },
            {
                subtitle: "Changes to These Terms",
                text: "We reserve the right to update or modify these Terms of Service at any time. Material changes will be communicated via email or a prominent notice on our website at least 14 days before they take effect. Your continued use of our services after the effective date constitutes acceptance of the revised terms."
            }
        ]
    }
];

export default function TermsPage() {
    return (
        <div className="flex flex-col items-center overflow-x-hidden min-h-screen bg-background pt-20">

            {/* Hero Header */}
            <section className="relative w-full py-28 flex flex-col items-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[20rem] bg-accent/5 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                        <FileText className="w-4 h-4" />
                        <span>Legal Document</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        Terms of{" "}
                        <span className="gradient-text">Service</span>
                    </h1>

                    <p className="max-w-2xl text-foreground/60 text-lg font-light leading-relaxed">
                        Please read these Terms of Service carefully before engaging QUANTIFYRE LLP for any services. These terms govern the relationship between you and us.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-foreground/40 border border-white/5 bg-white/[0.02] px-4 py-2 rounded-full">
                        <AlertTriangle className="w-4 h-4" />
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
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Table of Contents
                    </h2>
                    <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sections.map((s, i) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors text-sm group"
                            >
                                <span className="text-accent/50 font-mono">{String(i + 1).padStart(2, "0")}.</span>
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
                        transition={{ duration: 0.5, delay: idx * 0.04 }}
                        className="glass-card p-8 md:p-10 scroll-mt-28"
                    >
                        {/* Section Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                                {section.icon}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                        </div>

                        {/* Sub-sections */}
                        <div className="space-y-7">
                            {section.content.map((item, i) => (
                                <div key={i} className={i !== 0 ? "pt-7 border-t border-white/5" : ""}>
                                    <h3 className="text-base font-semibold text-primary mb-2">{item.subtitle}</h3>
                                    <p className="text-foreground/60 leading-relaxed text-sm font-light">{item.text}</p>
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
                    className="relative rounded-3xl p-10 overflow-hidden border border-accent/30 bg-gradient-to-br from-accent/10 via-background to-primary/10"
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[80px] pointer-events-none rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <h3 className="text-xl font-bold text-white">Questions About These Terms?</h3>
                            </div>
                            <p className="text-foreground/60 text-sm font-light max-w-md">
                                If you have any questions about these Terms of Service or need clarification on any clause, our team is here to help. We respond to all legal enquiries within 2 business days.
                            </p>
                        </div>
                        <Link
                            href="mailto:contact.quantifyrellp@gmail.com"
                            className="shrink-0 px-7 py-3 rounded-full bg-accent text-black font-semibold text-sm hover:bg-accent/80 transition-all shadow-[0_0_20px_rgba(60,207,109,0.3)] hover:shadow-[0_0_30px_rgba(60,207,109,0.5)] whitespace-nowrap"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
