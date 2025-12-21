"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
    {
        id: 1,
        category: "Insight",
        date: "Oct 20, 2025",
        title: "Sustainable Construction: Building for a Greener Future",
        description: "Exploring new materials and methodologies that reduce carbon footprints in large-scale commercial projects.",
        image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
    },
    {
        id: 2,
        category: "News",
        date: "Oct 18, 2025",
        title: "SAYLEM Awarded Contract for New City Hospital Wing",
        description: "A $500M partnership to deliver state-of-the-art healthcare facilities to the downtown metro area.",
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
    },
    {
        id: 3,
        category: "Project Update",
        date: "Oct 15, 2025",
        title: "Topping Out Ceremony at the Skyline Tower",
        description: "Celebrating a major milestone with our dedicated workforce and partners as the final beam is placed.",
        image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
    },
    {
        id: 4,
        category: "Community",
        date: "Oct 10, 2025",
        title: "SAYLEM Volunteers Revitalize Local Park",
        description: "Over 100 employees gathered this weekend to plant trees and rebuild playgrounds in our community.",
        image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
    },
    {
        id: 5,
        category: "Innovation",
        date: "Oct 05, 2025",
        title: "Implementing AI in Construction Safety Plans",
        description: "How predictive analytics are helping us prevent accidents before they happen on jobsites.",
        image: "https://images.pexels.com/photos/8961408/pexels-photo-8961408.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
    },
];

export default function NewsSection() {
    return (
        <section className="bg-gray-50 py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Sticky */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start mb-12 lg:mb-0">
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">
                                    Latest
                                </p>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                    News &amp; <br /> Insights
                                </h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg max-w-sm">
                                Discover how our teams are driving innovation, celebrating milestones, and building a better future across the globe.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-turner-red font-bold tracking-wide uppercase text-sm mt-2 hover:opacity-80 transition-opacity"
                            >
                                View All Stories
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </aside>

                    {/* Right Column - Scrollable List */}
                    <div className="lg:w-2/3 flex flex-col gap-10">
                        {newsItems.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col gap-6 pb-10 border-b border-gray-200 last:border-0"
                            >
                                {/* Card Image */}
                                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 rounded-full">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-col gap-3">
                                    <div className="text-sm font-medium text-gray-500">
                                        {item.date}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-turner-red transition-colors leading-tight">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-turner-red font-semibold text-sm mt-2 group-hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
