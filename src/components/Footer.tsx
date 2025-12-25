import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const navItems = [
    { label: "Our Company", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Our Projects", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
];

const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white">
            <div className="container mx-auto px-6">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 py-10 border-b border-white/20">
                    <div className="text-3xl font-black tracking-tight">SAYLEM</div>

                    <nav className="flex flex-wrap justify-center gap-7 text-base font-medium tracking-wide">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-white/80 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex justify-center md:justify-end gap-4">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                className="p-2 rounded-full border border-white/40 text-white hover:border-white hover:text-white/80 transition-colors"
                            >
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 text-sm text-white/90">
                    <div className="space-y-2">
                        <p>© 2025 SAYLEM Construction Company</p>
                        <p>All rights reserved</p>
                    </div>

                    <div className="space-y-4 leading-relaxed">
                        <p>
                            SAYLEM is an Equal Opportunity Employer – race, color, religion, sex, sexual orientation,
                            gender identity, national origin, disability, status as a protected veteran, or other
                            characteristics protected by applicable law.
                        </p>
                        <Link href="#" className="underline underline-offset-4 hover:text-white">
                            Human Rights Policy
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:justify-end">
                        <Link href="#" className="hover:text-white transition-colors">
                            Fraud Alert
                        </Link>
                        <span className="opacity-60">|</span>
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="opacity-60">|</span>
                        <Link href="#" className="hover:text-white transition-colors">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
