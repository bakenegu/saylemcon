"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming a utils file exists or I will create one, actually I'll just inline clsx for now if utils doesn't exist.

// Since I haven't created lib/utils yet, I'll use clsx and tailwind-merge directly here or create the utils file.
// I'll create the utils file in the next step to be clean. For now, I will assume it exists or use standard class strings.
// Actually, I'll just use standard template literals for now to avoid dependency on a file I haven't checked/created.

const navItems = [
    { name: "Our Company", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Our Projects", href: "#" },
    { name: "News & Insights", href: "#" },
    { name: "Careers", href: "#" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Placeholder */}
                <Link href="/" className="text-white font-bold text-2xl tracking-widest uppercase font-sans">
                    SAYLEM
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turner-red transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="px-5 py-2 border border-white/30 text-white text-sm font-medium hover:bg-turner-red hover:border-turner-red transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
}
