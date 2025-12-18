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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-2">
                            Latest
                        </p>
                        <h2 className="text-4xl font-extrabold text-slate-900">
                            News &amp; Insights
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="group inline-flex items-center gap-2 text-turner-red font-semibold"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-[32px] shadow-[0_25px_80px_rgba(15,23,42,0.08)] border border-gray-100 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-8 pb-6">
                                <div className="flex items-center gap-3 text-sm font-medium text-gray-500 mb-4">
                                    <span className="text-turner-red">{item.category}</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-6 leading-snug group-hover:text-turner-red transition-colors">
                                    {item.title}
                                </h3>
                                <Link
                                    href={item.link}
                                    className="mt-auto inline-flex items-center gap-2 text-turner-red font-semibold text-sm"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
