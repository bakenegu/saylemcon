"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

export function useParallax(offset: [string, string] = ["start end", "end start"]): {
    ref: RefObject<HTMLDivElement | null>;
    y: MotionValue<string>;
} {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as any,
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return { ref, y };
}
