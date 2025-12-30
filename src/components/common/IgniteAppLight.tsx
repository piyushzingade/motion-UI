"use client"
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, MotionValue, animate } from 'motion/react';
import { Heart, X, MessageCircle, User, Flame, Compass, Star, Settings, Zap } from 'lucide-react';

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

const TABS = [
    { key: AppScreen.Discover, icon: Flame },
    { key: AppScreen.Matches, icon: MessageCircle },
    { key: AppScreen.Profile, icon: User },
];

const SCREEN_ORDER = [AppScreen.Discover, AppScreen.Matches, AppScreen.Profile];


const SplashScreen = React.memo(({ onStart }: { onStart: () => void }) => (
    <div className="relative w-full h-full bg-[#ff4165] flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4165]" />

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
            onClick={onStart}
            className="absolute liquid-glass-2 bottom-12 left-8 right-8 bg-white/20 backdrop-blur-md border border-white/40 text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden shadow-2xl"
        >
            <span className="relative z-10">Start Swiping</span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
        </motion.button>
    </div>
));
SplashScreen.displayName = 'SplashScreen';

const ProfileCard = React.memo(({
    profile,
    onSwipe,
    liquidGlassClass
}: {
    profile: Profile,
    onSwipe: (direction: 'like' | 'nope') => void,
    liquidGlassClass: string
}) => {
    const dragX = useMotionValue(0);
    const rotate = useTransform(dragX, [-200, 200], [-25, 25]);
    const opacity = useTransform(dragX, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    const likeOpacity = useTransform(dragX, [50, 150], [0, 1]);
    const nopeOpacity = useTransform(dragX, [-150, -50], [1, 0]);
    const likeScale = useTransform(dragX, [50, 150], [0.5, 1]);
    const nopeScale = useTransform(dragX, [-150, -50], [1, 0.5]);

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.x > 100) {
            animate(dragX, 500, { duration: 0.2 }).then(() => onSwipe('like'));
        } else if (info.offset.x < -100) {
            animate(dragX, -500, { duration: 0.2 }).then(() => onSwipe('nope'));
        } else {
            animate(dragX, 0, { type: "spring", stiffness: 300, damping: 20 });
        }
    };

    const handleAction = (direction: 'like' | 'nope') => {
        const targetX = direction === 'like' ? 500 : -500;
        animate(dragX, targetX, { duration: 0.2, ease: "easeOut" }).then(() => {
            onSwipe(direction);
        });
    };

    return (
        <motion.div
            key={profile.id}
            style={{ x: dragX, rotate, opacity }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 28
            }}
        >
            <div className="relative w-full h-full rounded-[48px] p-3 bg-white shadow-2xl flex flex-col">
                {/* Image & Badge Container */}
                <div className="relative w-full">
                    <div className="relative w-full aspect-[4.4/5] rounded-[36px] overflow-hidden bg-gray-100 select-none">
                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-full h-full object-cover pointer-events-none"
                            draggable="false"
                        />

                        {/* Swipe Overlays */}
                        <motion.div
                            style={{ opacity: likeOpacity, scale: likeScale }}
                            className="absolute top-8 left-6 z-20 border-[4px] border-emerald-500 rounded-xl px-4 py-2 rotate-[-15deg] bg-white/20 backdrop-blur-sm"
                        >
                            <span className="text-emerald-500 font-black text-3xl uppercase tracking-tighter">Like</span>
                        </motion.div>

                        <motion.div
                            style={{ opacity: nopeOpacity, scale: nopeScale }}
                            className="absolute top-8 right-6 z-20 border-[4px] border-rose-500 rounded-xl px-4 py-2 rotate-[15deg] bg-white/20 backdrop-blur-sm"
                        >
                            <span className="text-rose-500 font-black text-3xl uppercase tracking-tighter">Pass</span>
                        </motion.div>
                    </div>

                    {/* Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-50">
                        <div className="bg-[#ff4165] px-6 py-2 rounded-full shadow-lg shadow-[#ff4165]/30 flex items-center justify-center">
                            <span className="text-[10px] font-black text-white uppercase tracking-wider text-center">
                                {profile.matchScore}% Similarities
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 px-4 pt-7 pb-1 flex flex-col items-center text-center overflow-hidden">
                    <div className="mb-1.5 flex-shrink-0">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">{profile.name}, {profile.age}</h2>
                    </div>

                    <div className="flex-1 flex flex-col justify-center min-h-0">
                        <p className="text-gray-400 text-xs leading-relaxed max-w-full">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Action Buttons Inside Card */}
                    <div className="mt-auto w-full flex items-center justify-between px-2 pb-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all ${liquidGlassClass}`}
                        >
                            <Star size={18} className="text-amber-400" fill="currentColor" />
                        </motion.button>

                        <div className="flex items-center gap-5">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100 text-gray-400 hover:text-gray-600 transition-colors`}
                                onClick={() => handleAction('nope')}
                            >
                                <X size={32} strokeWidth={2.5} />
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 transition-all bg-[#ff4165] shadow-xl shadow-[#ff4165]/40 text-white`}
                                onClick={() => handleAction('like')}
                            >
                                <Heart size={32} fill="currentColor" />
                            </motion.button>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all ${liquidGlassClass}`}
                        >
                            <Zap size={18} className="text-[#ff4165]" fill="currentColor" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

ProfileCard.displayName = 'ProfileCard';

const DiscoverScreen = React.memo(({
    currentProfile,
    onSwipe,
    liquidGlassClass
}: {
    currentProfile: Profile,
    onSwipe: (direction: 'like' | 'nope') => void,
    liquidGlassClass: string
}) => (
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col relative">
        <div className="absolute top-14 left-5 right-5 flex justify-between z-10">
            <button className={`w-11 h-11 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                <Compass size={20} className="text-gray-700" />
            </button>
            <button className={`w-11 h-11 rounded-full flex items-center justify-center ${liquidGlassClass}`}>
                <Settings size={20} className="text-gray-700" />
            </button>
        </div>

        <div className="flex-1 pt-14 px-5 pb-24 flex flex-col">
            <div className="h-14" />
            <div className="relative flex-1 w-full flex items-center justify-center mb-2 perspective-1000">
                <AnimatePresence mode="popLayout">
                    <ProfileCard
                        key={currentProfile.id}
                        profile={currentProfile}
                        onSwipe={onSwipe}
                        liquidGlassClass={liquidGlassClass}
                    />
                </AnimatePresence>
            </div>
        </div>
    </div>
));
DiscoverScreen.displayName = 'DiscoverScreen';

const MatchesScreen = React.memo(({ liquidGlassClass }: { liquidGlassClass: string }) => (
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
                        className="relative w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
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

        <div className="shrink-0 px-6 mb-4 flex justify-between items-center">
            <h3 className="text-gray-400 text-[11px] font-black uppercase tracking-[0.2em]">Messages</h3>
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-500">{MOCK_PROFILES.length * 2}</span>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide px-1 pb-24">
            <div className="pr-1">
                {[...MOCK_PROFILES, ...MOCK_PROFILES].map((p, i) => (
                    <motion.div
                        key={`${p.id}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 py-2 px-4 rounded-[28px] bg-white/60 backdrop-blur-md border border-white/40 cursor-pointer transition-all shadow-sm mb-1"
                    >
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff4165] p-0.5 shadow-md">
                            <img src={p.image} className="w-full h-full rounded-full object-cover" />
                            <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <p className="text-gray-900 font-black text-sm tracking-tight">{p.name}</p>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{2 + i}m ago</span>
                            </div>
                            <p className="text-gray-500 text-xs truncate font-medium">Sent a flame to you • Tap to chat</p>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4165] shadow-lg shadow-[#ff4165]/40 animate-pulse" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
));
MatchesScreen.displayName = 'MatchesScreen';

const ProfileScreen = React.memo(({ liquidGlassClass }: { liquidGlassClass: string }) => (
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
));
ProfileScreen.displayName = 'ProfileScreen';

const Navbar = React.memo(({
    currentScreen,
    onScreenChange,
    navBarClass
}: {
    currentScreen: AppScreen,
    onScreenChange: (s: AppScreen) => void,
    navBarClass: string
}) => (
    <motion.div
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        className={navBarClass}
    >
        <div className="relative w-full flex items-center">
            <motion.div
                className="absolute liquid-glass-2 top-0 bottom-0 bg-white/40 backdrop-blur-md rounded-full shadow-sm border border-white/20"
                animate={{
                    x: `${TABS.findIndex(t => t.key === currentScreen) * 100}%`,
                }}
                style={{
                    width: `${100 / TABS.length}%`,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: 0.12
                }}
            />

            {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentScreen === tab.key;
                return (
                    <motion.button
                        key={tab.key}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onScreenChange(tab.key)}
                        className="relative flex-1 py-4 flex items-center justify-center z-10"
                    >
                        <Icon
                            size={24}
                            className={`transition-colors hover:scale-105 duration-300 ${isActive ? "text-[#ff4165]" : "text-gray-400"}`}
                            fill={isActive ? "currentColor" : "none"}
                            strokeWidth={2}
                        />
                    </motion.button>
                );
            })}
        </div>
    </motion.div>
));
Navbar.displayName = 'Navbar';


export default function IgniteApp({ initialScreen = AppScreen.Splash }: { initialScreen?: AppScreen }) {
    const [screen, setScreen] = useState<AppScreen>(initialScreen);
    const [prevScreen, setPrevScreen] = useState<AppScreen>(initialScreen);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Preload images for instant loading
    useEffect(() => {
        MOCK_PROFILES.forEach((profile) => {
            const img = new Image();
            img.src = profile.image;
        });
    }, []);

    const handleScreenChange = useCallback((newScreen: AppScreen) => {
        setPrevScreen(screen);
        setScreen(newScreen);
    }, [screen]);

    const direction = useMemo(() => {
        const prevIndex = SCREEN_ORDER.indexOf(prevScreen);
        const currentScreenIndex = SCREEN_ORDER.indexOf(screen);
        if (prevIndex < currentScreenIndex) return 1;
        if (prevIndex > currentScreenIndex) return -1;
        return 0;
    }, [prevScreen, screen]);

    const onSwipe = useCallback((direction: 'like' | 'nope') => {
        // Instant transition
        setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
    }, []);

    const liquidGlassClass = "liquid-glass";
    const navBarClass = "absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] flex rounded-full liquid-glass overflow-hidden px-2 py-2";

    const renderScreen = () => {
        switch (screen) {
            case AppScreen.Splash:
                return <SplashScreen onStart={() => handleScreenChange(AppScreen.Discover)} />;
            case AppScreen.Discover:
                return (
                    <DiscoverScreen
                        currentProfile={MOCK_PROFILES[currentIndex]}
                        onSwipe={onSwipe}
                        liquidGlassClass={liquidGlassClass}
                    />
                );
            case AppScreen.Matches:
                return <MatchesScreen liquidGlassClass={liquidGlassClass} />;
            case AppScreen.Profile:
                return <ProfileScreen liquidGlassClass={liquidGlassClass} />;
            default:
                return null;
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
            {/* Hidden Preloader */}
            <div className="fixed opacity-0 pointer-events-none -z-50 overflow-hidden w-0 h-0">
                {MOCK_PROFILES.map(p => (
                    <img key={p.id} src={p.image} alt="preload" />
                ))}
                <img src="https://picsum.photos/id/177/600/800" alt="preload" />
                <img src="https://picsum.photos/id/177/200/200" alt="preload" />
            </div>

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
                <Navbar
                    currentScreen={screen}
                    onScreenChange={handleScreenChange}
                    navBarClass={navBarClass}
                />
            )}
        </div>
    );
}