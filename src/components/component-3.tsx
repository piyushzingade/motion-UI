export const Component3 = () => {
    return (
        <div className="w-full flex items-center justify-center py-24">
            <div className="relative h-[220px] w-[170px] group transition-all duration-1000 ease-out hover:scale-[1.05] hover:-rotate-1">


                {/* Glass label */}
                <div className="absolute top-0 left-0 z-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                    <span
                        style={{ clipPath: `inset(0.5px round 8px 0)` }}
                        className="
                            h-[24px] w-[80px]
                            flex items-center justify-center
                            text-[10px] font-black tracking-[0.15em] text-white/60
                            bg-transparent backdrop-blur-3xl
                            border border-white/40
                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.05)]
                        "
                    >
                        FRUITS
                    </span>
                </div>

                {/* Main Glass Card Container */}
                <div className="absolute inset-0 filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
                    {/* Glass card base */}
                    <div
                        style={{
                            clipPath: `path("M 10 24 L 68 24 Q 78 24 78 12 Q 78 0 88 0 L 160 0 Q 170 0 170 10 L 170 210 Q 170 220 160 220 L 10 220 Q 0 220 0 210 L 0 34 Q 0 24 10 24 Z")`,
                        }}
                        className="
                            absolute inset-0
                            bg-gradient-to-br from-transparent to-transparent
                            backdrop-blur-[45px]
                            border border-white/20
                            overflow-hidden
                            shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_3px_rgba(0,0,0,0.15)]
                        "
                    >
                        {/* Noise Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Fresnel Edge Highlight (Trapped Light) */}
                        <div className="absolute inset-0 border-[3px] border-white/5 rounded-[inherit] pointer-events-none" />

                        {/* Moving Surface Sheen */}
                        <div className="absolute -inset-[150%] bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-all duration-[1500ms] pointer-events-none rotate-[35deg]" />

                        {/* Realistic Rim Highlights */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Top Rim */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_1px_4px_rgba(255,255,255,0.6)]" />
                            {/* Left Rim */}
                            <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                            {/* Bottom Rim Refraction */}
                            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </div>

                        {/* Inner Content */}
                        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center gap-8">
                            {/* Icon with Glass Depth & Saturation */}
                            <div className="relative group/icon">
                                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                                <div className="relative w-16 h-16 rounded-[24px] bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_15px_30px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.5)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                    <span className="text-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] filter saturate-[1.3]">🍎</span>
                                </div>
                            </div>

                            {/* Progress Bars with Frosted Look */}
                            <div className="space-y-4 w-full px-4">
                                <div className="h-2.5 w-full bg-black/10 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
                                    <div className="h-full w-2/3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 rounded-full group-hover:w-[90%] transition-all duration-[1200ms] ease-in-out shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                                </div>
                                <div className="h-2.5 w-3/4 bg-black/10 rounded-full backdrop-blur-md border border-white/5" />
                            </div>
                        </div>

                        {/* Edge Tint (Subtle Greenish/Blueish glass tint) */}
                        <div className="absolute inset-0 border border-emerald-500/5 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};
