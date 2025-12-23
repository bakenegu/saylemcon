"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurServicesSection() {
    return (
        <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-3/5 relative aspect-[16/10] lg:aspect-[16/9] rounded-[24px] overflow-hidden shadow-2xl"
                    >
                        {/* Using Unsplash image for construction interior/people */}
                        <Image
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                            alt="Construction team discussing plans on site"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Subtle overlay for depth if needed */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-2/5 flex flex-col justify-center relative pl-0 lg:pl-12"
                    >
                        {/* Thin Vertical Line Separator (Desktop only position) */}
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200" />

                        <div className="flex flex-col gap-6 lg:gap-8">
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                                    Comprehensive Services
                                </p>
                                <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                                    Comprehensive Construction Services
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                At SAYLEM, we deliver more than just buildings. We provide a complete suite of construction services tailored to your goals, from pre-construction planning and virtual design to self-perform execution and sustainable LEED certification.
                            </p>

                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-turner-red font-bold tracking-wide uppercase text-sm group mt-4 w-fit"
                            >
                                Explore Our Services
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
