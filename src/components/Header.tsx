
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Globe, Cpu } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Infrastructure', href: '#' },
        { name: 'Edge Network', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Pricing', href: '#' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`
            pointer-events-auto flex items-center justify-between w-full max-w-7xl h-14 sm:h-16 px-4 sm:px-6 rounded-2xl border transition-all duration-300
            ${scrolled
                            ? 'bg-black/40 border-white/10 backdrop-blur-xl shadow-2xl'
                            : 'bg-white/[0.02] border-white/5 backdrop-blur-md'}
          `}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-[#FF84C0] flex items-center justify-center shadow-lg shadow-pink-500/20">
                            <Cpu className="text-white" size={18} />
                        </div>
                        <span className="text-white font-bold tracking-tight text-lg group-hover:text-[#FF84C0] transition-colors">
                            NexusCloud
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden sm:flex items-center gap-1">
                            <button className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                <Globe size={18} />
                            </button>
                            <button className="relative p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                <ShoppingBag size={18} />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF84C0] rounded-full" />
                            </button>
                        </div>

                        <button className="hidden sm:block px-5 py-2 text-sm font-semibold bg-[#FF84C0] hover:bg-[#ff96c9] text-white rounded-xl transition-all shadow-lg shadow-pink-500/10">
                            Deploy Now
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-white/70 bg-white/5 border border-white/10 rounded-lg"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-8"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-white/70 hover:text-[#FF84C0]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 w-full my-4" />
                            <button className="w-full py-4 text-center bg-[#FF84C0] text-white font-bold rounded-2xl shadow-xl shadow-pink-500/20">
                                Deploy Now
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
