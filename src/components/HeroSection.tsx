"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mouse, Search } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                    poster="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                >
                    <source
                        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Cerro_Armazones_drone_footage.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">

                {/* Main Typography */}
                <div className="mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white leading-tight"
                    >
                        <span className="block font-roboto font-light text-6xl md:text-8xl tracking-wide mb-2">
                            Making a
                        </span>
                        <span className="relative inline-block font-allura text-7xl md:text-9xl ml-4 md:ml-12 brush-underline pb-4">
                            Difference
                        </span>
                    </motion.h1>
                </div>

                {/* Interactive Search Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute right-0 bottom-1/3 md:bottom-1/4 w-full md:w-auto px-6 md:px-0 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
                >
                    <div className="flex items-center gap-3 text-white">
                        <span className="text-lg md:text-xl font-bold tracking-wider uppercase">
                            What do you want to build?
                        </span>
                        <ArrowRight className="text-turner-red w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <div className="relative group w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search Projects, Services..."
                            className="w-full bg-white/10 backdrop-blur-sm border-b border-white/50 text-white placeholder-white/70 px-4 py-3 focus:outline-none focus:border-turner-red transition-colors"
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                        <Search className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isSearchFocused ? "text-turner-red" : "text-white/70"}`} />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-8 md:left-12 flex flex-col items-center gap-2 text-white/80"
            >
                <span className="text-xs uppercase tracking-widest writing-vertical-lr rotate-180 hidden md:block">
                    Scroll
                </span>
                <Mouse className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
}
