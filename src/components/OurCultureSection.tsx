"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "@/hooks/useParallax";

const navItems = [
    { id: "01", label: "ESG Strategy", active: true },
    { id: "02", label: "Community", active: false },
    { id: "03", label: "DE&I", active: false },
    { id: "04", label: "Environmental", active: false },
    { id: "05", label: "Innovation", active: false },
    { id: "06", label: "Safety", active: false },
];

export default function OurCultureSection() {
    const { ref, y } = useParallax();

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
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr_1.2fr] gap-8 md:gap-12 items-start">

                    {/* Left Column: Navigation Card */}
                    <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-xl h-full min-h-[500px] flex flex-col">
                        <div className="flex flex-col gap-6 mt-auto">
                            {navItems.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="flex items-center gap-6">
                                        <span className={`text-sm font-medium ${item.active ? "opacity-100" : "opacity-60 group-hover:opacity-100 transition-opacity"}`}>
                                            {item.id}
                                        </span>
                                        <span className={`text-lg md:text-xl font-medium ${item.active ? "text-white" : "text-blue-200 group-hover:text-white transition-colors"}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                    {item.active && (
                                        <div className="w-8 h-[1px] bg-white mt-4 opacity-50" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column: Text Content */}
                    <div className="flex flex-col justify-center h-full py-4 lg:py-12">
                        <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-6">
                            Environmental, Social, and Governance Strategy
                        </p>
                        <h3 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
                            Building Today to <br /> Transform Tomorrow
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We support a healthy and more equitable future for our people, our business,
                            and our planet through our ESG strategy.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-turner-red font-bold tracking-wide uppercase text-sm group"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Column: Parallax Image */}
                    <div
                        ref={ref}
                        className="relative w-full aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden shadow-2xl md:col-span-2 lg:col-span-1"
                    >
                        <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                            <Image
                                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Aerial view of construction site"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
