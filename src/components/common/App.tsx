"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Heart, X, MessageCircle, User, Flame, Compass, Star, Settings, Zap } from 'lucide-react';
import { AppScreen, Profile } from '@/lib/types';
import { GooeyBackground } from './gooey-effect';

const MOCK_PROFILES: Profile[] = [
    {
        id: '1',
        name: 'Seraphina',
        age: 24,
        bio: 'Digital architect by day, neon-dreamer by night. Catch me in the metaverse.',
        image: 'https://picsum.photos/id/64/600/800',
        distance: '2 miles away',
        matchScore: 98
    },
    {
        id: '2',
        name: 'Julian',
        age: 27,
        bio: 'Collector of vinyl and obscure code snippets. Let\'s find the perfect frequency.',
        image: 'https://picsum.photos/id/65/600/800',
        distance: '5 miles away',
        matchScore: 92
    }
];

interface IgniteAppProps {
    initialScreen: AppScreen;
}

export const IgniteApp: React.FC<IgniteAppProps> = ({ initialScreen }) => {
    const [screen, setScreen] = useState<AppScreen>(initialScreen);
    const [currentIndex, setCurrentIndex] = useState(0);

    const dragX = useMotionValue(0);
    const rotate = useTransform(dragX, [-100, 100], [-10, 10]);
    const opacity = useTransform(dragX, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);
    const likeOpacity = useTransform(dragX, [20, 100], [0, 1]);
    const nopeOpacity = useTransform(dragX, [-100, -20], [1, 0]);

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.x > 100) {
            setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
        } else if (info.offset.x < -100) {
            setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
        }
    };

    const renderScreen = () => {
        switch (screen) {
            case AppScreen.Splash:
                return (
                    <div className="relative w-full h-full bg-gradient-to-b from-[#1a0001] to-black flex flex-col items-center justify-center p-8 overflow-hidden">
                        <GooeyBackground />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="z-10 flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-red-600 rounded-[24px] flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] rotate-12 mb-6">
                                <Flame size={40} color="white" fill="white" />
                            </div>
                            <h1 className="text-4xl font-black text-white tracking-tighter mb-2 italic">IGNITE</h1>
                            <p className="text-red-500/80 text-xs font-bold uppercase tracking-[0.3em]">Pure Attraction</p>
                        </motion.div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setScreen(AppScreen.Discover)}
                            className="absolute bottom-20 left-10 right-10 glass-red text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] overflow-hidden"
                        >
                            <span className="relative z-10">Start Swiping</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.button>
                    </div>
                );

            case AppScreen.Discover:
                const currentProfile = MOCK_PROFILES[currentIndex];
                return (
                    <div className="w-full h-full bg-black flex flex-col pt-16 pb-12 px-4 relative">
                        <div className="flex justify-between items-center mb-6 px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/20">
                                    <Flame size={16} color="white" fill="white" />
                                </div>
                                <span className="font-bold text-white tracking-tight">Discover</span>
                            </div>
                            <div className="flex gap-4">
                                <Compass size={20} className="text-zinc-400" />
                                <Settings size={20} className="text-zinc-400" />
                            </div>
                        </div>

                        <div className="relative flex-1 w-full flex items-center justify-center perspective-1000">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={currentProfile.id}
                                    style={{ x: dragX, rotate, opacity }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={handleDragEnd}
                                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                >
                                    <div className="relative w-full h-full rounded-[38px] overflow-hidden glass border border-white/10">
                                        <img src={currentProfile.image} alt={currentProfile.name} className="w-full h-full object-cover" />

                                        {/* Swipe Overlays */}
                                        <motion.div style={{ opacity: likeOpacity }} className="absolute top-10 left-6 z-20 border-4 border-emerald-500 rounded-xl px-4 py-2 rotate-[-15deg]">
                                            <span className="text-emerald-500 font-black text-3xl uppercase tracking-tighter">IGNITE</span>
                                        </motion.div>
                                        <motion.div style={{ opacity: nopeOpacity }} className="absolute top-10 right-6 z-20 border-4 border-rose-500 rounded-xl px-4 py-2 rotate-[15deg]">
                                            <span className="text-rose-500 font-black text-3xl uppercase tracking-tighter">PASS</span>
                                        </motion.div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                        <div className="absolute bottom-0 left-0 w-full p-6 space-y-2">
                                            <div className="flex items-end gap-2">
                                                <h2 className="text-3xl font-bold text-white">{currentProfile.name}, {currentProfile.age}</h2>
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mb-2 animate-pulse" />
                                            </div>
                                            <div className="flex items-center gap-2 text-zinc-400 text-xs">
                                                <Compass size={12} />
                                                <span>{currentProfile.distance}</span>
                                            </div>
                                            <p className="text-zinc-300 text-sm line-clamp-2 font-medium">
                                                {currentProfile.bio}
                                            </p>
                                            <div className="flex items-center gap-3 pt-4">
                                                <div className="bg-red-600/20 px-3 py-1 rounded-full border border-red-500/30">
                                                    <span className="text-[10px] font-black text-red-500 uppercase">Top Choice</span>
                                                </div>
                                                <div className="bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                                    <span className="text-[10px] font-black text-zinc-300 uppercase">{currentProfile.matchScore}% Match</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex justify-center items-center gap-6 mt-6 pb-2">
                            <button className="w-14 h-14 rounded-full glass flex items-center justify-center text-rose-500 hover:scale-110 transition-transform">
                                <X size={28} />
                            </button>
                            <button className="w-12 h-12 rounded-full glass-red flex items-center justify-center text-amber-400 hover:scale-110 transition-transform">
                                <Star size={22} fill="currentColor" />
                            </button>
                            <button className="w-14 h-14 rounded-full glass flex items-center justify-center text-emerald-500 hover:scale-110 transition-transform">
                                <Heart size={28} fill="currentColor" />
                            </button>
                        </div>

                        {/* Bottom Nav */}
                        <div className="flex justify-around items-center pt-4 border-t border-white/5">
                            <Flame size={24} className="text-red-500" fill="currentColor" onClick={() => setScreen(AppScreen.Discover)} />
                            <MessageCircle size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Matches)} />
                            <User size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Profile)} />
                        </div>
                    </div>
                );

            case AppScreen.Matches:
                return (
                    <div className="w-full h-full bg-black flex flex-col pt-16 px-6">
                        <h2 className="text-2xl font-black text-white mb-6 tracking-tight">Recent Sparks</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {MOCK_PROFILES.map((p, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={p.id}
                                    className="relative aspect-[3/4] rounded-3xl overflow-hidden glass group"
                                >
                                    <img src={p.image} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                        <p className="text-white font-bold text-sm">{p.name}</p>
                                        <div className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">New</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-red flex items-center justify-center">
                                        <Heart size={14} className="text-white" fill="white" />
                                    </div>
                                </motion.div>
                            ))}
                            <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                                    <Star size={20} className="text-zinc-700" />
                                </div>
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Find More</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Messages</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-500 p-0.5">
                                        <img src="https://picsum.photos/id/101/100/100" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-bold text-sm">Elena</p>
                                        <p className="text-zinc-500 text-xs">Sent a flame to you</p>
                                    </div>
                                    <span className="text-[10px] text-zinc-600">2m</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pb-12 flex justify-around items-center pt-4 border-t border-white/5">
                            <Flame size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Discover)} />
                            <MessageCircle size={24} className="text-red-500" fill="currentColor" onClick={() => setScreen(AppScreen.Matches)} />
                            <User size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Profile)} />
                        </div>
                    </div>
                );

            case AppScreen.Profile:
                return (
                    <div className="w-full h-full bg-black flex flex-col overflow-y-auto">
                        <div className="relative h-72 w-full clip-slant overflow-hidden">
                            <img src="https://picsum.photos/id/177/600/800" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-red-900/40 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                            <div className="absolute top-16 left-6 right-6 flex justify-between">
                                <button className="w-10 h-10 rounded-full glass-red flex items-center justify-center text-white" onClick={() => setScreen(AppScreen.Discover)}>
                                    <Compass size={20} />
                                </button>
                                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
                                    <Settings size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="px-8 -mt-12 relative z-10">
                            <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-black mb-4 rotate-3">
                                <img src="https://picsum.photos/id/177/200/200" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-3xl font-black text-white">Xavier, 26</h2>
                            <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest mt-1">Founder & Designer</p>

                            <div className="grid grid-cols-2 gap-3 mt-8">
                                <div className="glass-red p-4 rounded-3xl flex flex-col gap-2">
                                    <Star size={18} className="text-amber-400" fill="currentColor" />
                                    <span className="text-white font-bold text-xl">12</span>
                                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Active Sparks</span>
                                </div>
                                <div className="glass p-4 rounded-3xl flex flex-col gap-2">
                                    <Flame size={18} className="text-red-500" fill="currentColor" />
                                    <span className="text-white font-bold text-xl">842</span>
                                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Burn Rate</span>
                                </div>
                            </div>

                            <div className="mt-10 mb-20 space-y-6">
                                <div className="flex items-center justify-between p-4 glass rounded-[28px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center">
                                            <Zap size={18} className="text-white" />
                                        </div>
                                        <span className="text-white font-bold text-sm">Ignite Plus+</span>
                                    </div>
                                    <span className="bg-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="fixed bottom-12 left-4 right-4 z-50 flex justify-around items-center pt-4 pb-4 border-t border-white/5 bg-black/80 backdrop-blur-md rounded-t-[40px]">
                            <Flame size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Discover)} />
                            <MessageCircle size={24} className="text-zinc-600" onClick={() => setScreen(AppScreen.Matches)} />
                            <User size={24} className="text-red-500" fill="currentColor" onClick={() => setScreen(AppScreen.Profile)} />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="w-full h-full relative overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={screen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                    {renderScreen()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
