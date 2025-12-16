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
        image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "#",
    },
    {
        id: 2,
        category: "News",
        date: "Oct 18, 2025",
        title: "SAYLEM Awarded Contract for New City Hospital Wing",
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "#",
    },
    {
        id: 3,
        category: "Project Update",
        date: "Oct 15, 2025",
        title: "Topping Out Ceremony at the Skyline Tower",
        image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "#",
    },
];

export default function NewsSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
                        News & Insights
                    </h2>
                    <Link
                        href="#"
                        className="group flex items-center gap-2 text-turner-red font-semibold hover:text-red-700 transition-colors"
                    >
                        View All
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <span className="font-medium text-turner-red">{item.category}</span>
                                    <span>|</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-turner-red transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-turner-red font-medium text-sm mt-auto">
                                    Read More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
