import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
                            QUANTIFYRE
                        </Link>
                        <p className="text-sm text-foreground/70 mt-4 leading-relaxed">
                            AI-powered digital, software, and automation solutions that quantify growth. The Future, Faster.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><Link href="/services/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services/website-development" className="hover:text-primary transition-colors">Website Development</Link></li>
                            <li><Link href="/services/software-development" className="hover:text-primary transition-colors">Software Development</Link></li>
                            <li><Link href="/services/ai-automations" className="hover:text-primary transition-colors">AI Automations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><a href="mailto:contact.quantifyrellp@gmail.com" className="hover:text-primary transition-colors">contact.quantifyrellp@gmail.com</a></li>
                            <li><a href="mailto:info.endlessinfosys@gmail.com" className="hover:text-primary transition-colors">info.endlessinfosys@gmail.com</a></li>
                            <li><a href="tel:+916356195625" className="hover:text-primary transition-colors">+91 6356195625</a></li>
                            <li><a href="tel:+917778095625" className="hover:text-primary transition-colors">+91 7778095625</a></li>
                            <li className="pt-2">
                                B-402, The Landmark<br />Near Kansar Hotel, Kudasan<br />Gandhinagar - 382421, Gujarat
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-foreground/50">
                        © {new Date().getFullYear()} QUANTIFYRE LLP. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-foreground/50">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
