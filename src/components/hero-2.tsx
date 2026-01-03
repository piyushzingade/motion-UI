
"use client";
import { useState } from "react";
import { CardFan } from "./common/Hero-Card";

export default function Hero2() {
    return (
        <main className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
            {/* Background radial gradient for subtle depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />

            <Header />

            <div className="flex-1 flex flex-col items-center">
                <HeroContent />
                <CardFan />
            </div>

            {/* Bottom gradient fade: subtle enough to keep cards visible but ground the design */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/40 to-transparent z-40 pointer-events-none" />
        </main>
    );
}



export const Header = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const navItems = ["Home", "Pricing", "Cards", "Customers", "Contact"];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-none">
            <div className="relative max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
                {/* Logo Section */}
                <div className="flex items-center group cursor-pointer">
                    <div className="text-white text-xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-105">
                        NEXA BANK<span className="align-super text-[10px] font-medium ml-0.5 opacity-80">®</span>
                    </div>
                </div>

                {/* Navigation - Floating Pill */}
                <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-white/[0.03] backdrop-blur-2xl rounded-full border border-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    {navItems.map((item) => {
                        const isActive = activeItem === item;
                        return (
                            <button
                                key={item}
                                onClick={() => setActiveItem(item)}
                                className={`relative px-6 py-2 text-[13px] font-medium rounded-full transition-all duration-500 ease-out group ${isActive ? "text-black" : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                {/* Active Indicator Background */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-white rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.2)]" />
                                )}

                                {/* Hover Indicator (for non-active) */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-white/5 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all duration-300" />
                                )}

                                <span className="relative z-10">{item}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="hidden sm:block px-4 py-2 text-[13px] font-medium text-neutral-400 hover:text-white transition-colors">
                        Login
                    </button>
                    <button className="relative px-6 py-2.5 text-[13px] font-bold bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 group">
                        <span className="relative z-10">Get Started</span>
                        {/* Subtle internal shine effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>

                    {/* Mobile Menu Icon (Visual Only) */}
                    <button className="lg:hidden p-2 text-white opacity-80 hover:opacity-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};




export const HeroContent = () => {
    return (
        <div className="relative z-50 flex flex-col items-center text-center pt-[120px] md:pt-[140px] px-6 max-w-5xl mx-auto">
            {/* Decorative Badge */}
            <div className="mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase">Innovative Banking Platform</span>
            </div>

            <h1 className="text-[48px] sm:text-[64px] lg:text-[84px] font-semibold text-white leading-[1.05] tracking-tight mb-8">
                Design Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Custom Credit Cards</span>
            </h1>

            <div className="w-full max-w-[500px]">
                <div className="relative flex items-center p-1 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 focus-within:border-white/40 focus-within:bg-white/5 focus-within:shadow-[0_0_40px_rgba(255,255,255,0.05)] group">
                    <div className="absolute left-6 text-neutral-500 pointer-events-none group-focus-within:text-white/60 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter your preferred design..."
                        className="flex-1 bg-transparent pl-14 pr-6 py-3 text-[14px] text-white placeholder:text-neutral-600 outline-none"
                    />
                    <button className="px-6 py-2.5 bg-neutral-100 text-black text-[13px] font-bold rounded-full hover:bg-white transition-all shadow-xl active:scale-95 whitespace-nowrap">
                        Generate Card
                    </button>
                </div>
            </div>

            <p className="mt-6 text-[12px] text-neutral-500 tracking-wide font-medium">
                *Terms and conditions apply
            </p>
        </div>
    );
};
