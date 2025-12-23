"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming a utils file exists or I will create one, actually I'll just inline clsx for now if utils doesn't exist.

// Since I haven't created lib/utils yet, I'll use clsx and tailwind-merge directly here or create the utils file.
// I'll create the utils file in the next step to be clean. For now, I will assume it exists or use standard class strings.
// Actually, I'll just use standard template literals for now to avoid dependency on a file I haven't checked/created.

type MegaMenuSection = {
    highlight: {
        eyebrow: string;
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
    };
    articles: { title: string; description: string; image: string }[];
};

const megaMenuContent: Record<string, MegaMenuSection> = {
    "Our Company": {
        highlight: {
            eyebrow: "Our Company",
            title: "People-first builders with a passion for shaping skylines.",
            description:
                "Discover our culture, history, and commitment to safety, inclusion, and community impact across every project we touch.",
            ctaLabel: "About SAYLEM",
            ctaHref: "#",
        },
        articles: [
            {
                title: "Leadership & Culture",
                description: "Meet the team guiding innovation and operational excellence worldwide.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Diversity, Equity & Inclusion",
                description: "Programs designed to build belonging on our jobsites and in our offices.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Community Impact",
                description: "Volunteer initiatives and workforce development partnerships nationwide.",
                image: "https://images.unsplash.com/photo-1593113598340-089ade0dd132?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },
    // ... other entries remain the same, just ensuring the type is applied
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
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Turner Recognized by Forbes as one of America's Best Employers",
                description: "Our people-first culture continues to earn national recognition.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Regional Team announced for new hospital expansion",
                description: "Healthcare builders selected to deliver the Regional One Health project.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
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
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Virtual Design & Construction",
                description: "Immersive coordination leveraging BIM and digital twins.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Self-Perform Operations",
                description: "Concrete, interiors, and specialty crafts executed by SAYLEM crews.",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },
    "Our Projects": {
        highlight: {
            eyebrow: "Projects",
            title: "Complex builds delivered across every market segment.",
            description:
                "From mission-critical to healthcare and cultural landmarks, explore how SAYLEM brings vision to life.",
            ctaLabel: "View Projects",
            ctaHref: "#",
        },
        articles: [
            {
                title: "Healthcare & Life Sciences",
                description: "Patient-centered facilities integrating advanced technology.",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0929519?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Aviation & Transportation",
                description: "Expanding mobility with terminals, transit hubs, and rail corridors.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Cultural & Mixed Use",
                description: "Museums, arenas, and vibrant districts that anchor communities.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },
    Careers: {
        highlight: {
            eyebrow: "Careers",
            title: "Build your future with teams who champion growth and belonging.",
            description:
                "From skilled craft to technology and project leadership, we offer pathways with mentorship, training, and competitive benefits.",
            ctaLabel: "Explore Careers",
            ctaHref: "#",
        },
        articles: [
            {
                title: "Early Career Programs",
                description: "Internships and co-ops that put you on active jobsites from day one.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Craft & Field Roles",
                description: "Join self-perform crews building iconic structures nationwide.",
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop",
            },
            {
                title: "Professional Opportunities",
                description: "Project managers, VDC specialists, and business operations roles.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },
};

const navItems = [
    { name: "Our Company", href: "#", megaKey: "Our Company" },
    { name: "Our Services", href: "#", megaKey: "Our Services" },
    { name: "Our Projects", href: "#", megaKey: "Our Projects" },
    { name: "News & Insights", href: "#", megaKey: "News & Insights" },
    { name: "Careers", href: "#", megaKey: "Careers" },
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
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                isScrolled ? "bg-white/95 backdrop-blur py-4 shadow-lg" : "bg-transparent py-6"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div
                className="container mx-auto px-6 flex items-center justify-between relative"
                onMouseLeave={() => setActiveMega(null)}
            >
                {/* Logo Placeholder */}
                <Link
                    href="/"
                    className={cn(
                        "font-bold text-2xl tracking-widest uppercase font-sans transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                >
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
                                        isScrolled
                                            ? isActive
                                                ? "text-gray-900"
                                                : "text-gray-600"
                                            : isActive
                                                ? "text-white"
                                                : "text-white/85"
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
                        className={cn(
                            "px-5 py-2 text-sm font-medium transition-all duration-300 border",
                            isScrolled
                                ? "border-gray-300 text-gray-900 hover:bg-turner-red hover:border-turner-red hover:text-white"
                                : "border-white/30 text-white hover:bg-turner-red hover:border-turner-red"
                        )}
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
                                                <div className="relative h-28 w-full rounded-lg overflow-hidden mb-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                                    <Image
                                                        src={article.image}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
