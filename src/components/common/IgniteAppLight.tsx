"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Heart, X, MessageCircle, User, Flame, Compass, Star, Settings, Zap, Info } from 'lucide-react';

enum AppScreen {
    Splash = 'splash',
    Discover = 'discover',
    Matches = 'matches',
    Profile = 'profile'
}

interface Profile {
    id: string;
    name: string;
    age: number;
    bio: string;
    image: string;
    distance: string;
    matchScore: number;
}

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
    },
    {
        id: '3',
        name: 'Aurora',
        age: 25,
        bio: 'Stargazer, coffee enthusiast, and weekend adventurer seeking cosmic connections.',
        image: 'https://picsum.photos/id/177/600/800',
        distance: '3 miles away',
        matchScore: 95
    },
    {
        id: '4',
        name: 'Kael',
        age: 28,
        bio: 'Mountain climber and open-source contributor. Looking for someone to share the summit with.',
        image: 'https://picsum.photos/id/91/600/800',
        distance: '8 miles away',
        matchScore: 88
    },
    {
        id: '5',
        name: 'Elena',
        age: 23,
        bio: 'Abstract painter and plant mom. My studio is my sanctuary, but I\'m ready to explore.',
        image: 'https://picsum.photos/id/103/600/800',
        distance: '1 mile away',
        matchScore: 94
    },
    {
        id: '6',
        name: 'Marcus',
        age: 30,
        bio: 'Chef and world traveler. I believe the best way to someone\'s heart is through their stomach.',
        image: 'https://picsum.photos/id/129/600/800',
        distance: '4 miles away',
        matchScore: 91
    }
];

interface IgniteAppProps {
    initialScreen?: AppScreen;
}

export default function IgniteApp({ initialScreen = AppScreen.Splash }: IgniteAppProps) {
    const [screen, setScreen] = useState<AppScreen>(initialScreen);
    const [prevScreen, setPrevScreen] = useState<AppScreen>(initialScreen);
    const [currentIndex, setCurrentIndex] = useState(0);

    const screenOrder = [AppScreen.Discover, AppScreen.Matches, AppScreen.Profile];

    const handleScreenChange = (newScreen: AppScreen) => {
        setPrevScreen(screen);
        setScreen(newScreen);
    };

    const getAnimationDirection = () => {
        const prevIndex = screenOrder.indexOf(prevScreen);
        const currentScreenIndex = screenOrder.indexOf(screen);

        if (prevIndex < currentScreenIndex) {
            return 1;
        } else if (prevIndex > currentScreenIndex) {
            return -1;
        }
        return 0;
    };

    const direction = getAnimationDirection();

    const dragX = useMotionValue(0);
    const rotate = useTransform(dragX, [-100, 100], [-8, 8]);
    const opacity = useTransform(dragX, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);
    const likeOpacity = useTransform(dragX, [20, 100], [0, 1]);
    const nopeOpacity = useTransform(dragX, [-100, -20], [1, 0]);

    const handleDragEnd = (_: any, info: any) => {
        if (Math.abs(info.offset.x) > 100) {
            setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
            dragX.set(0); // Reset drag position for the next card
        }
    };

    const liquidGlassClass = "liquid-glass";

    const navBarClass = "absolute bottom-6 left-1/2 z-50 w-[80%] flex justify-around items-center py-3 rounded-full liquid-glass";

    const renderScreen = () => {
        switch (screen) {
            case AppScreen.Splash:
                return (
                    <div className="relative w-full h-full bg-[#ff4165] flex flex-col items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4165] via-[#ff5577] to-[#ff6688]" />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="z-10 flex flex-col items-center text-center"
                        >
                            <motion.div
                                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-[28px] flex items-center border border-white/30 justify-center shadow-2xl mb-8"
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Flame size={48} color="white" fill="white" />
                            </motion.div>

                            <motion.h1
                                className="text-6xl font-black text-white tracking-tighter mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                IGNITE
                            </motion.h1>

                            <motion.p
                                className="text-white/90 text-xs font-bold uppercase tracking-[0.3em] mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Pure Attraction
                            </motion.p>

                            <motion.p
                                className="text-white/80 text-sm max-w-xs leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Where connections spark and chemistry ignites
                            </motion.p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handleScreenChange(AppScreen.Discover)}
                            className="absolute bottom-12 left-8 right-8 bg-white/20 backdrop-blur-md border border-white/40 text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden shadow-2xl"
                        >
                            <span className="relative z-10">Start Swiping</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.button>
                    </div>
                );

            case AppScreen.Discover:
                const currentProfile = MOCK_PROFILES[currentIndex];
                return (
                    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col relative">
                        <div className="flex-1 pt-14 px-5 pb-28 flex flex-col">
                            <div className="flex justify-between items-center mb-5 px-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-[#ff4165] flex items-center justify-center shadow-lg shadow-[#ff4165]/30">
                                        <Flame size={18} color="white" fill="white" />
                                    </div>
                                    <span className="font-bold text-gray-900 tracking-tight text-lg">Discover</span>
                                </div>
                                <div className="flex gap-3">
                                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                                        <Compass size={20} className="text-gray-600" />
                                    </button>
                                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                                        <Settings size={20} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex-1 w-full flex items-center justify-center mb-5 perspective-1000">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={currentProfile.id}
                                        style={{ x: dragX, rotate, opacity }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={handleDragEnd}
                                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                    >
                                        <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white shadow-2xl">
                                            <img src={currentProfile.image} alt={currentProfile.name} className="w-full h-full object-cover" />

                                            <motion.div
                                                style={{ opacity: likeOpacity }}
                                                className="absolute top-12 left-8 z-20 border-[5px] border-emerald-500 rounded-2xl px-5 py-3 rotate-[-20deg] bg-white/20 backdrop-blur-sm"
                                            >
                                                <span className="text-emerald-500 font-black text-4xl uppercase tracking-tighter">LIKE</span>
                                            </motion.div>

                                            <motion.div
                                                style={{ opacity: nopeOpacity }}
                                                className="absolute top-12 right-8 z-20 border-[5px] border-rose-500 rounded-2xl px-5 py-3 rotate-[20deg] bg-white/20 backdrop-blur-sm"
                                            >
                                                <span className="text-rose-500 font-black text-4xl uppercase tracking-tighter">NOPE</span>
                                            </motion.div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                                                <div className="flex items-end gap-2">
                                                    <h2 className="text-4xl font-bold text-white tracking-tight">{currentProfile.name}, {currentProfile.age}</h2>
                                                    <div className="w-3 h-3 rounded-full bg-emerald-400 mb-2.5 animate-pulse shadow-lg shadow-emerald-400/50" />
                                                </div>

                                                <div className="flex items-center gap-2 text-white/80 text-sm">
                                                    <Compass size={14} />
                                                    <span>{currentProfile.distance}</span>
                                                </div>

                                                <p className="text-white/90 text-base leading-relaxed pt-1">
                                                    {currentProfile.bio}
                                                </p>

                                                <div className="flex items-center gap-3 pt-3">
                                                    <div className={`px-4 py-2 rounded-full ${liquidGlassClass}`}>
                                                        <span className="text-xs font-black text-[#ff4165] uppercase">Top Pick</span>
                                                    </div>
                                                    <div className={`px-4 py-2 rounded-full ${liquidGlassClass}`}>
                                                        <span className="text-xs font-black text-white uppercase">{currentProfile.matchScore}% Match</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex justify-center items-center gap-5">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center ${liquidGlassClass}`}
                                    onClick={() => setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length)}
                                >
                                    <X size={32} className="text-rose-500" strokeWidth={2.5} />
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 rounded-full flex items-center justify-center ${liquidGlassClass}`}
                                >
                                    <Star size={24} className="text-amber-400" fill="currentColor" />
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center ${liquidGlassClass}`}
                                    onClick={() => setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length)}
                                >
                                    <Heart size={32} className="text-emerald-500" fill="currentColor" />
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${liquidGlassClass}`}
                                >
                                    <Info size={20} className="text-blue-500" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                );

            case AppScreen.Matches:
                return (
                    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col relative pt-14">
                        <div className="flex-shrink-0 mb-6 px-5">
                            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Recent Sparks</h2>
                            <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
                                {[...MOCK_PROFILES, ...MOCK_PROFILES].map((p, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05, type: "spring" }}
                                        key={`${p.id}-${i}`}
                                        className="relative w-24 h-32 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    >
                                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white font-bold text-xs truncate">{p.name}</p>
                                            <p className="text-white/70 text-[10px]">{p.age}</p>
                                        </div>
                                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ff4165] animate-pulse shadow-lg shadow-[#ff4165]/50" />
                                    </motion.div>
                                ))}

                                <div className="w-24 h-32 flex-shrink-0 rounded-3xl flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
                                    <Star size={20} className="text-[#ff4165]" />
                                    <span className="text-[10px] font-bold text-gray-600">See All</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-28">
                            <h3 className="text-gray-500 text-xs font-black uppercase tracking-wider mb-4">Messages</h3>
                            <div className="pr-1">
                                {[...MOCK_PROFILES, ...MOCK_PROFILES].map((p, i) => (
                                    <motion.div
                                        key={`${p.id}-${i}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-4 p-4 rounded-sm bg-white cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff4165] p-0.5">
                                            <img src={p.image} className="w-full h-full rounded-full object-cover" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-900 font-bold text-sm">{p.name}</p>
                                            <p className="text-gray-500 text-xs truncate">Sent a flame to you • {2 + i}m ago</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4165] animate-pulse" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case AppScreen.Profile:
                return (
                    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col relative">
                        <div className="flex-1 overflow-y-auto scrollbar-hide pb-28">
                            <div className="relative h-80 w-full overflow-hidden">
                                <img src="https://picsum.photos/id/177/600/800" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />

                                <div className="absolute top-14 left-5 right-5 flex justify-between z-10">
                                    <button className={`w-11 h-11 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                                        <Compass size={20} className="text-gray-700" />
                                    </button>
                                    <button className={`w-11 h-11 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                                        <Settings size={20} className="text-gray-700" />
                                    </button>
                                </div>
                            </div>

                            <div className="px-6 -mt-16 relative z-10">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-28 h-28 rounded-[36px] overflow-hidden border-4 border-white shadow-2xl mb-4"
                                    style={{ transform: 'rotate(3deg)' }}
                                >
                                    <img src="https://picsum.photos/id/177/200/200" className="w-full h-full object-cover" />
                                </motion.div>

                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">Xavier, 26</h2>
                                <p className="text-[#ff4165] font-bold text-xs uppercase tracking-widest mt-2">Founder & Designer</p>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className={`p-5 rounded-3xl flex flex-col gap-2 ${liquidGlassClass}`}>
                                        <Star size={22} className="text-amber-400" fill="currentColor" />
                                        <span className="text-gray-900 font-black text-2xl">12</span>
                                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Active Sparks</span>
                                    </div>
                                    <div className={`p-5 rounded-3xl flex flex-col gap-2 ${liquidGlassClass}`}>
                                        <Flame size={22} className="text-[#ff4165]" fill="currentColor" />
                                        <span className="text-gray-900 font-black text-2xl">842</span>
                                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Burn Rate</span>
                                    </div>
                                </div>

                                <div className="mt-8 mb-6 space-y-4">
                                    <div className={`flex items-center justify-between p-5 rounded-3xl ${liquidGlassClass}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4165] to-[#ff6688] flex items-center justify-center shadow-lg">
                                                <Zap size={20} className="text-white" fill="white" />
                                            </div>
                                            <div>
                                                <span className="text-gray-900 font-bold text-base block">Ignite Plus+</span>
                                                <span className="text-gray-500 text-xs">Premium features</span>
                                            </div>
                                        </div>
                                        <span className="bg-[#ff4165] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">Active</span>
                                    </div>

                                    <div className={`p-5 rounded-3xl ${liquidGlassClass}`}>
                                        <h3 className="text-gray-900 font-bold text-sm mb-3">About Me</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Building products that spark joy. When I'm not coding, you'll find me exploring new coffee shops or planning my next adventure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={screen}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full"
                >
                    {renderScreen()}
                </motion.div>
            </AnimatePresence>

            {screen !== AppScreen.Splash && (
                <motion.div
                    initial={{ y: 100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    className={navBarClass}
                >
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleScreenChange(AppScreen.Discover)}
                        className="p-2"
                    >
                        <Flame
                            size={26}
                            className={screen === AppScreen.Discover ? "text-[#ff4165]" : "text-gray-400"}
                            fill={screen === AppScreen.Discover ? "currentColor" : "none"}
                            strokeWidth={2}
                        />
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleScreenChange(AppScreen.Matches)}
                        className="p-2"
                    >
                        <MessageCircle
                            size={26}
                            className={screen === AppScreen.Matches ? "text-[#ff4165]" : "text-gray-400"}
                            fill={screen === AppScreen.Matches ? "currentColor" : "none"}
                            strokeWidth={2}
                        />
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleScreenChange(AppScreen.Profile)}
                        className="p-2"
                    >
                        <User
                            size={26}
                            className={screen === AppScreen.Profile ? "text-[#ff4165]" : "text-gray-400"}
                            fill={screen === AppScreen.Profile ? "currentColor" : "none"}
                            strokeWidth={2}
                        />
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
}