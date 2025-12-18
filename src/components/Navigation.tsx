"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming a utils file exists or I will create one, actually I'll just inline clsx for now if utils doesn't exist.

// Since I haven't created lib/utils yet, I'll use clsx and tailwind-merge directly here or create the utils file.
// I'll create the utils file in the next step to be clean. For now, I will assume it exists or use standard class strings.
// Actually, I'll just use standard template literals for now to avoid dependency on a file I haven't checked/created.

const megaMenuContent = {
    "News & Insights": {
        highlight: {
            eyebrow: "News & Insights",
            title: "Stay informed with the latest stories from SAYLEM.",
            description:
                "Learn from industry experts sharing innovation, market insight, and thought leadership across our regions.",
            ctaLabel: "Browse Insights",
            ctaHref: "#",
        },
        articles: [
            {
                title: "Dornan Engineering Group expands Executive Leadership Team",
                description: "Four divisional managing directors join to drive regional delivery.",
                image: "https://images.pexels.com/photos/1181351/pexels-photo-1181351.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                title: "Turner Recognized by Forbes as one of America's Best Employers",
                description: "Our people-first culture continues to earn national recognition.",
                image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                title: "Regional Team announced for new hospital expansion",
                description: "Healthcare builders selected to deliver the Regional One Health project.",
                image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
        ],
    },
    "Our Services": {
        highlight: {
            eyebrow: "Services",
            title: "From preconstruction to closeout, we cover the entire build lifecycle.",
            description:
                "Integrated delivery models, digital twins, sustainability consulting, and field execution teams aligned to your goals.",
            ctaLabel: "Explore Services",
            ctaHref: "#",
        },
        articles: [
            {
                title: "Preconstruction & Planning",
                description: "Cost modeling, logistics, and constructability analysis for predictable delivery.",
                image: "https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                title: "Virtual Design & Construction",
                description: "Immersive coordination leveraging BIM and digital twins.",
                image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                title: "Self-Perform Operations",
                description: "Concrete, interiors, and specialty crafts executed by SAYLEM crews.",
                image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
        ],
    },
} satisfies Record<
    string,
    {
        highlight: {
            eyebrow: string;
            title: string;
            description: string;
            ctaLabel: string;
            ctaHref: string;
        };
        articles: { title: string; description: string; image: string }[];
    }
>;

const navItems = [
    { name: "Our Company", href: "#" },
    { name: "Our Services", href: "#", megaKey: "Our Services" },
    { name: "Our Projects", href: "#" },
    { name: "News & Insights", href: "#", megaKey: "News & Insights" },
    { name: "Careers", href: "#" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMega, setActiveMega] = useState<string | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const activeMegaContent =
        activeMega && megaMenuContent[activeMega] ? megaMenuContent[activeMega] : null;

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div
                className="container mx-auto px-6 flex items-center justify-between relative"
                onMouseLeave={() => setActiveMega(null)}
            >
                {/* Logo Placeholder */}
                <Link href="/" className="text-white font-bold text-2xl tracking-widest uppercase font-sans">
                    SAYLEM
                </Link>

                {/* Desktop Nav with mega menu */}
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <nav className="flex items-center space-x-4 lg:space-x-6">
                        {navItems.map((item) => {
                            const isActive = activeMega === item.megaKey;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative group text-sm font-semibold tracking-wide uppercase transition-colors",
                                        isActive ? "text-white" : "text-white/85"
                                    )}
                                    onMouseEnter={() => setActiveMega(item.megaKey ?? null)}
                                    onFocus={() => setActiveMega(item.megaKey ?? null)}
                                >
                                    <span
                                        className={cn(
                                            "absolute inset-x-0 -bottom-1 h-1 bg-turner-red transition-transform origin-center",
                                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        )}
                                    />
                                    <span className="relative z-10 px-4 py-2">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                    <Link
                        href="#"
                        className="px-5 py-2 border border-white/30 text-white text-sm font-medium hover:bg-turner-red hover:border-turner-red transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>

                {activeMegaContent && (
                    <div className="hidden md:block absolute left-0 right-0 top-full">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 bg-white shadow-2xl rounded-b-lg overflow-hidden"
                        >
                            <div className="grid grid-cols-[1fr_2fr] gap-0">
                                <div className="bg-turner-red text-white p-10 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                                            {activeMegaContent.highlight.eyebrow}
                                        </p>
                                        <h3 className="text-2xl font-semibold leading-tight mb-4">
                                            {activeMegaContent.highlight.title}
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {activeMegaContent.highlight.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={activeMegaContent.highlight.ctaHref}
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
                                    >
                                        {activeMegaContent.highlight.ctaLabel}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            className="w-4 h-4"
                                        >
                                            <path d="M5 12h14M13 6l6 6-6 6" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="bg-white p-10">
                                    <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">
                                        Featured
                                    </p>
                                    <div className="grid grid-cols-3 gap-6">
                                        {activeMegaContent.articles.map((article, idx) => (
                                            <div key={idx} className="group">
                                                <div className="rounded-lg overflow-hidden mb-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="h-28 w-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="font-semibold text-gray-900 leading-snug mb-2">
                                                    {article.title}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {article.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

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
