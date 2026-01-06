"use client"
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Check, Star, ArrowRight, Terminal, Cloud, Github } from 'lucide-react';
import Header from './Header';

export interface ShopItem {
    uniqid: string;
    title: string;
    category: string;
    imageUrl: string;
}

export interface Stat {
    value: string;
    label: string;
    hasRating?: boolean;
}
const MOCK_PRODUCTS: ShopItem[] = [
    { uniqid: '1', title: 'Edge Compute', category: 'Infrastructure', imageUrl: '/card-1.jpg' },
    { uniqid: '2', title: 'CI/CD Pipeline', category: 'DevOps', imageUrl: '/card-2.jpg' },
    { uniqid: '3', title: 'Cloud Database', category: 'Storage', imageUrl: '/card-3.jpg' },
    { uniqid: '4', title: 'API Gateway', category: 'Network', imageUrl: '/card-4.jpg' },
    { uniqid: '5', title: 'Bare Metal', category: 'Compute', imageUrl: '/card-5.jpg' },
    { uniqid: '6', title: 'Auth Service', category: 'Security', imageUrl: '/card-1.jpg' },
];

const STATS: Stat[] = [
    { value: '99.99%', label: 'Uptime' },
    { value: '150+', label: 'Regions' },
    { value: '4.9', label: 'Reliability', hasRating: true },
];

const BULLETS = [
    'Auto-scaling edge infrastructure',
    'Git-integrated deployment flows',
    'SOC2 Type II certified security',
    'Unified observability dashboard',
];

export default function Hero3() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
            <Header />
            {/* Background Ambience - Reverted to Pink/Violet */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600/10 blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-center min-h-[85vh]">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8"
                        >
                            <Github size={12} className="text-white/40" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Trusted by 12,000+ Teams</span>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-4 mb-8">
                            <motion.h1
                                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Unify your <br />
                                <span className="text-[#FF84C0]">Cloud Stack</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl sm:text-2xl text-white/40 font-medium max-w-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                The modern engine for cloud-native engineering. Deploy, scale, and monitor in one unified platform.
                            </motion.p>
                        </div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                            {BULLETS.map((bullet, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#FF84C0]/10 border border-[#FF84C0]/20 flex items-center justify-center">
                                        <Check size={12} className="text-[#FF84C0]" />
                                    </div>
                                    <span className="text-sm font-medium text-white/60">{bullet}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
                            {STATS.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col gap-1 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + idx * 0.1 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-black text-white">{stat.value}</span>
                                        {stat.hasRating && <Star size={14} className="text-[#FF84C0] fill-[#FF84C0]" />}
                                    </div>
                                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-pink-50 active:scale-95">
                                <Cloud size={20} />
                                <span>Start Building</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl text-lg font-bold transition-all">
                                <Terminal size={20} className="text-white/40" />
                                <span>CLI Docs</span>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Simplified Marquee Visual - Fixed 80% Height */}
                    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                        {/* Simple vertical marquee container set to 80% height of parent */}
                        <motion.div
                            className="relative w-full h-full flex gap-4 sm:gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Vertical Masking (Top and Bottom only) */}
                            <div
                                className="absolute inset-0 z-20 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 10%, transparent 90%, #0A0A0A 100%)'
                                }}
                            />

                            {/* Column 1 */}
                            <div className="flex-1">
                                <Marquee
                                    items={MOCK_PRODUCTS}
                                    direction="up"
                                    speed={35}
                                />
                            </div>

                            {/* Column 2 */}
                            <div className="flex-1 mt-12">
                                <Marquee
                                    items={[...MOCK_PRODUCTS].reverse()}
                                    direction="down"
                                    speed={45}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};




interface MarqueeProps {
    items: ShopItem[];
    direction?: 'up' | 'down';
    speed?: number;
}

const Marquee = ({ items, direction = 'up', speed = 40 }: MarqueeProps) => {
    const duplicatedItems = useMemo(() => [...items, ...items, ...items, ...items], [items]);

    return (
        <div className="relative h-full w-full">
            <motion.div
                className="flex flex-col gap-6 py-4"
                animate={{
                    y: direction === 'up' ? ['0%', '-25%'] : ['-25%', '0%'],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <ProductCard key={`${item.uniqid}-${idx}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
};


interface ProductCardProps {
    item: ShopItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
    return (
        <div className="w-full h-72 shrink-0 rounded-[32px] relative group transition-all duration-700 overflow-hidden">
            {/* Image Background */}
            <div className="absolute inset-0">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 group-hover:from-black/40 group-hover:to-black/70 transition-all duration-500" />
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-white/[0.08] rounded-[32px] group-hover:border-[#FF84C0]/30 transition-all duration-500" />

            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF84C0]/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                </h3>

                <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
                    {item.category}
                </p>
            </div>

            {/* Decorative Bottom Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white/20 rounded-full group-hover:w-12 group-hover:bg-[#FF84C0] transition-all duration-500" />
        </div>
    );
};



