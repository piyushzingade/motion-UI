"use client";

import React from "react";
import {
    Disc,
    Sparkles,
    Waves,
    Flower2,
    Sprout,
    Zap,
    Aperture,
    Hexagon,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero1() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-white overflow-x-hidden text-slate-900 selection:bg-blue-200 selection:text-blue-900 font-sans">
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300/10 via-orange-100/20 to-transparent blur-3xl"></div>
                <div className="absolute top-[0%] right-[0%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent blur-3xl"></div>
            </div>

            {/* Navbar */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <nav className="w-full max-w-[1200px] bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-sm px-6 py-1 flex items-center justify-between transition-all">
                    <div className="flex items-center gap-2.5 cursor-pointer">
                        <div className="text-blue-600 flex items-center justify-center">
                            <Disc size={28} strokeWidth={2} />
                        </div>
                        <span className="font-semibold tracking-tight text-slate-900 text-lg">
                            Orren
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 pl-8">
                        {["Home", "Features", "Solutions", "Resources", "Pricing"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    {/* Right: Auth Actions */}
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                            Sign in
                        </button>
                        <button className="bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_12px_-2px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95">
                            Sign up
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Hero Section */}
            <main className="flex flex-col overflow-hidden min-h-screen w-full pt-24 relative">
                <div className="w-full max-w-[1600px] mx-auto grid lg:grid-cols-[40%_60%] gap-8 lg:gap-16 items-start px-6 lg:px-12 pt-16">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="flex flex-col items-start justify-between min-h-[80vh] z-20 relative"
                    >
                        <div className="flex flex-col items-start">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold mb-8 shadow-sm">
                                <Sparkles size={12} />
                                Powered by GPT-5 AI Agent
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-slate-900 leading-[1.05] tracking-tight mb-6">
                                The System That <br /> Works With You
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10 font-medium">
                                From planning to execution, every step of your process becomes
                                seamless, organized, and insight-driven.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
                                <button className="bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_12px_-2px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5">
                                    Start Your Free Trial
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm font-semibold text-base px-8 py-3.5 rounded-lg transition-colors hover:border-slate-300">
                                    Learn More
                                </button>
                            </div>
                        </div>


                    </motion.div>

                    {/* Right Column: Large Dashboard Image */}
                    <div className="relative w-full flex justify-center items-center lg:justify-end perspective-container pl-12">
                        {/* Dashboard Image */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 10, rotateY: -18, rotateZ: 2 }}
                            animate={{ opacity: 1, rotateX: 8, rotateY: -15, rotateZ: 2 }}
                            whileHover={{ rotateX: 6, rotateY: -12, rotateZ: 1 }}
                            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                            style={{
                                perspective: 2500,
                                transformStyle: "preserve-3d",
                                boxShadow:
                                    "-80px 80px 160px -40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.9) inset",
                                maskImage:
                                    "linear-gradient(to bottom, black 65%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, black 65%, transparent 100%)",
                            }}
                            className="relative rounded-2xl w-full max-w-[1400px] overflow-hidden select-none scale-[1.1] lg:scale-[1.3]"
                        >
                            <Image
                                width={2400}
                                height={2400}
                                src="/dashboard.png"
                                alt="Dashboard Preview"
                                className="w-full h-full object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Marquee Section */}
                <section className="absolute bottom-20 left-0 w-full lg:w-[45%] pl-6 lg:pl-12 pr-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="w-full"
                    >
                        <p className="text-xl font-bold text-slate-500 mb-8 text-start pl-2">
                            Trusted by the world's fastest growing teams
                        </p>

                        <div className="relative w-full overflow-hidden h-20 flex items-center bg-gradient-to-r from-transparent via-blue-50/30 to-transparent rounded-lg">
                            <motion.div
                                className="flex items-center"
                                animate={{ x: [0, "-50%"] }}
                                transition={{
                                    duration: 40,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                style={{ willChange: "transform" }}
                            >
                                {[0, 1].map((setIndex) => (
                                    <div
                                        key={setIndex}
                                        className="flex items-center gap-16 px-6 shrink-0"
                                    >
                                        <MarqueeLogo icon={<Waves size={32} />} label="ome" />
                                        <MarqueeLogo icon={<Flower2 size={32} />} label="Mindfulness" />
                                        <MarqueeLogo icon={<Sprout size={32} />} label="Blossom" />
                                        <MarqueeLogo icon={<Zap size={32} />} label="Proline" />
                                        <MarqueeLogo icon={<Aperture size={32} />} label="luma" />
                                        <MarqueeLogo icon={<Hexagon size={32} />} label="vertex" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
}

function MarqueeLogo({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <div className="flex items-center gap-3 text-slate-700 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <span className="flex items-center justify-center">{icon}</span>
            <span className="text-xl font-bold tracking-tight whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}
