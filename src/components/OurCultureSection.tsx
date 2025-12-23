"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "@/hooks/useParallax";
import { useState } from "react";

const CULTURE_TABS = [
    {
        id: "esg",
        number: "01",
        label: "ESG Strategy",
        eyebrow: "ENVIRONMENTAL, SOCIAL, AND GOVERNANCE STRATEGY",
        title: "Building Today to \nTransform Tomorrow",
        description: "We support a healthy and more equitable future for our people, our business, and our planet through our ESG strategy.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: "community",
        number: "02",
        label: "Community",
        eyebrow: "COMMUNITY IMPACT",
        title: "Strengthening Our \nNeighborhoods",
        description: "We are deeply invested in making a positive impact that extends far beyond the jobsite fence through volunteerism and local partnerships.",
        image: "https://images.unsplash.com/photo-1593113598340-089ade0dd132?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: "dei",
        number: "03",
        label: "DE&I",
        eyebrow: "DIVERSITY, EQUITY AND INCLUSION",
        title: "A Culture of \nBelonging",
        description: "We are building an inclusive environment where every employee feels valued, respected, and empowered to contribute their best work.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: "environmental",
        number: "04",
        label: "Environmental",
        eyebrow: "SUSTAINABILITY",
        title: "Building for a \nGreener Future",
        description: "From net-zero energy buildings to waste reduction, we use our technical expertise to minimize environmental impact.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: "innovation",
        number: "05",
        label: "Innovation",
        eyebrow: "INNOVATION & TECHNOLOGY",
        title: "Driving the \nIndustry Forward",
        description: "We leverage cutting-edge technology and lean practices to deliver better value and solve complex challenges.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: "safety",
        number: "06",
        label: "Safety",
        eyebrow: "SAFETY FIRST",
        title: "Living Injury \nFree Every Day",
        description: "Safety is not just a priority, it is our core value. We are committed to sending every worker home safe, every day.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 40 : -40,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 40 : -40,
        opacity: 0,
    }),
};

export default function OurCultureSection() {
    const [activeTabId, setActiveTabId] = useState("esg");
    const [direction, setDirection] = useState(0);
    const { ref, y } = useParallax();

    const activeIndex = CULTURE_TABS.findIndex((t) => t.id === activeTabId);
    const activeTab = CULTURE_TABS[activeIndex];

    const handleTabClick = (newId: string) => {
        const newIndex = CULTURE_TABS.findIndex((t) => t.id === newId);
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveTabId(newId);
    };

    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 max-w-4xl">
                        Our Culture
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                        Our vision is to be the highest-value provider of global construction services and
                        technical expertise while we make a difference in the lives of people, customers,
                        the community, and the environment.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr_1.2fr] gap-8 md:gap-12 items-start"
                    role="tablist"
                    aria-label="Our Culture Sections"
                >

                    {/* Left Column: Navigation Card */}
                    <div className="hidden md:flex items-center h-full">
                        {/* Wrapper for vertical centering on desktop */}
                        <div className="w-full bg-blue-600 rounded-[32px] px-8 py-10 md:px-10 md:py-12 shadow-2xl flex flex-col justify-center min-h-[460px] md:max-h-[520px]">
                            <div className="flex flex-col gap-6">
                                {CULTURE_TABS.map((item) => {
                                    const isActive = activeTabId === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            role="tab"
                                            aria-selected={isActive}
                                            aria-controls={`panel-${item.id}`}
                                            id={`tab-${item.id}`}
                                            onClick={() => handleTabClick(item.id)}
                                            className="group cursor-pointer text-left focus:outline-none w-full"
                                            onKeyDown={(e) => {
                                                if (e.key === "ArrowDown") {
                                                    e.preventDefault();
                                                    const nextIndex = (activeIndex + 1) % CULTURE_TABS.length;
                                                    handleTabClick(CULTURE_TABS[nextIndex].id);
                                                } else if (e.key === "ArrowUp") {
                                                    e.preventDefault();
                                                    const prevIndex = (activeIndex - 1 + CULTURE_TABS.length) % CULTURE_TABS.length;
                                                    handleTabClick(CULTURE_TABS[prevIndex].id);
                                                }
                                            }}
                                        >
                                            <div className="flex items-center gap-4">
                                                {/* Active Indicator Line */}
                                                <div className="w-6 flex justify-center">
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="active-indicator"
                                                            className="w-4 h-[2px] bg-white"
                                                        />
                                                    )}
                                                </div>

                                                <span className={`text-sm font-medium transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : "opacity-60 group-hover:opacity-100"}`}>
                                                    {item.number}
                                                </span>
                                                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isActive ? "text-white font-bold" : "text-blue-200 group-hover:text-white"}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet Nav (Stacked) */}
                    <div className="md:hidden bg-blue-600 rounded-2xl p-6 shadow-xl mb-8">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {CULTURE_TABS.map((item) => {
                                const isActive = activeTabId === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleTabClick(item.id)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${isActive ? "bg-white text-blue-600 shadow-sm" : "text-blue-100 hover:text-white"}`}
                                    >
                                        {item.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Middle + Right Columns: Animated Panels */}
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={activeTabId}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="md:col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center lg:items-start"
                            role="tabpanel"
                            id={`panel-${activeTabId}`}
                            aria-labelledby={`tab-${activeTabId}`}
                        >
                            {/* Middle Column: Text Content */}
                            <div className="flex flex-col justify-center h-full py-4 lg:py-12">
                                <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-6">
                                    {activeTab.eyebrow}
                                </p>
                                <h3 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-8 whitespace-pre-line">
                                    {activeTab.title}
                                </h3 >
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {activeTab.description}
                                </p>
                                <Link
                                    href={activeTab.link}
                                    className="inline-flex items-center gap-2 text-turner-red font-bold tracking-wide uppercase text-sm group"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Right Column: Parallax Image */}
                            <div className="flex items-center justify-center lg:justify-end w-full">
                                <div
                                    className="relative w-full max-w-xl rounded-[32px] overflow-hidden shadow-xl aspect-[16/10]"
                                >
                                    <motion.div style={{ y }} className="absolute left-0 w-full -top-[20%] h-[140%]">
                                        <Image
                                            src={activeTab.image}
                                            alt={activeTab.title.replace("\n", " ")}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
