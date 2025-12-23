"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "@/hooks/useParallax";
export default function CommunitySection() {
    const { ref: containerRef, y } = useParallax();

    return (
        <section className="bg-white py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Column: Parallax Image Card */}
                    <div
                        ref={containerRef}
                        className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden shadow-2xl"
                    >
                        <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1260&auto=format&fit=crop"
                                alt="Construction worker overlooking city skyline"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Optional Overlay for text readability if needed, or style effect */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div>
                            <p className="text-sm uppercase tracking-[0.4em] text-turner-red font-bold mb-4">
                                Community
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Our Work In Your <br /> Local Community
                            </h2>
                        </div>

                        <div className="text-lg text-gray-600 leading-relaxed flex flex-col gap-6">
                            <p>
                                Every project we build leaves a lasting legacy. Beyond the concrete and steel,
                                we are committed to strengthening the neighborhoods where we live and work.
                            </p>
                            <p>
                                From local workforce development to supporting small businesses and volunteerism,
                                our teams are deeply invested in making a positive impact that extends far beyond
                                the jobsite fence.
                            </p>
                        </div>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-turner-red font-bold tracking-wide uppercase text-sm mt-4 group w-fit"
                        >
                            See Our Impact
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>

            {/* CTA Row - Animate on scroll */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto px-6 mt-20"
            >
                <div className="border-t border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
                    {/* Left CTA */}
                    <Link
                        href="#"
                        className="group flex items-center justify-between md:justify-start px-4 py-8 md:py-10 border-b md:border-b-0 border-gray-200 md:border-r hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold uppercase group-hover:text-slate-900 transition-colors">
                            Meet the Türkiye Team
                        </span>
                        <ArrowRight className="w-5 h-5 text-turner-red md:ml-4 transition-transform group-hover:translate-x-2" />
                    </Link>

                    {/* Right CTA */}
                    <Link
                        href="#"
                        className="group flex items-center justify-between md:justify-start md:pl-8 px-4 py-8 md:py-10 hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold uppercase group-hover:text-slate-900 transition-colors">
                            Choose another location
                        </span>
                        <ArrowRight className="w-5 h-5 text-turner-red md:ml-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
