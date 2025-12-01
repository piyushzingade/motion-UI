import React from "react";
import { ArrowRight, Leaf, Wheat, Heart, ShoppingBag, Award } from "lucide-react";

export function BentoGrid() {
    return (
        <div className="grid grid-rows-3 gap-4 border border-orange-100 bg-white rounded-3xl p-6 w-[1200px] h-[700px] shadow-[0_40px_100px_-15px_rgba(234,88,12,0.15)] ring-1 ring-orange-50">

            {/* Top Section: Spans first 2 rows */}
            <div className="row-span-2 gap-4 grid grid-cols-4">

                {/* Card 1: Hero - Organic Superfood Granola (Image Background) */}
                <div className="group col-span-2 row-span-3 rounded-2xl bg-orange-50 overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.2)]">
                    <img
                        src="https://picsum.photos/id/425/600/800"
                        alt="Granola Bowl"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                        <div className="bg-orange-600/90 backdrop-blur-md w-fit px-3 py-1 rounded-full mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Signature Blend</span>
                        </div>
                        <h2 className="text-4xl font-bold leading-tight mb-3 tracking-tight">
                            Organic Superfood <br /> Granola
                        </h2>
                        <p className="text-orange-100 text-lg font-light leading-relaxed max-w-sm mb-6 border-l-2 border-orange-500 pl-4">
                            Wholesome, nutrient-packed granola made with 100% organic ingredients.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-orange-200 group-hover:text-white transition-colors">
                            <span>Crunchy & Healthy</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>

                {/* Card 2: High Protein Content */}
                <div className="group col-span-1 row-span-1 border border-orange-100/50 rounded-2xl bg-gradient-to-br from-white to-orange-50/30 overflow-hidden relative transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-orange-600">
                        <Award size={64} />
                    </div>
                    <div className="p-6 h-full flex flex-col justify-between">
                        <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-lg font-bold">20g</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">High Protein Content</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Packed with plant-based protein to keep you energized.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Gluten-Free & Vegan */}
                <div className="group col-span-1 row-span-1 border border-orange-100/50 rounded-2xl bg-white overflow-hidden relative transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5">
                    <div className="p-6 h-full flex flex-col justify-between">
                        <div className="flex gap-2 mb-4">
                            <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium">GF</div>
                            <div className="bg-orange-50 text-orange-700 px-2 py-1 rounded-md text-xs font-medium">V</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">Gluten-Free & Vegan</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Suitable for all diets. Free from dairy.</p>
                        </div>
                        <Leaf className="absolute bottom-6 right-6 text-orange-100 w-12 h-12 -rotate-12 group-hover:text-orange-200 transition-colors" />
                    </div>
                </div>

                {/* Card 4: Ancient Grains Blend (Textured) */}
                <div className="group relative col-span-2 row-span-2 border border-orange-100 rounded-2xl bg-orange-50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/5">
                    {/* Second Image - Texture/Ingredients */}
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                        <img
                            src="https://picsum.photos/id/766/400/600"
                            alt="Grains texture"
                            className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-50"></div>
                    </div>

                    <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-[60%]">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-3 text-orange-600">
                                <Wheat className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-wider">Ancient Grains</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Quinoa, Amaranth & Chia</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A master blend of ancient grains providing superior texture and complete nutrition profile.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-orange-200/50">
                            <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
                                <Heart className="w-3 h-3 text-orange-500 fill-orange-500" /> Versatile Enjoyment
                            </h4>
                            <p className="text-sm text-gray-500">Perfect with yogurt, smoothie bowls, or straight from the bag.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="row-span-1 gap-4 grid grid-cols-4">

                {/* Card 5: Buy Now CTA */}
                <div className="group col-span-1 cursor-pointer border-2 border-transparent rounded-2xl bg-orange-600 overflow-hidden relative transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/30">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

                    <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                        <ShoppingBag className="w-8 h-8 mb-3 text-orange-100 group-hover:text-white transition-colors" />
                        <h3 className="text-xl font-bold leading-none mb-1">Buy Now</h3>
                        <p className="text-orange-200 text-xs font-medium tracking-wide mb-3">Fresh Batch Available</p>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Card 6: Limited Time Offer */}
                <div className="group col-span-3 border border-orange-100 rounded-2xl bg-white overflow-hidden relative transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5">
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orange-50/80 to-transparent"></div>
                    <div className="p-8 h-full flex items-center justify-between relative z-10">
                        <div className="space-y-2 max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-1">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                Weekly Special
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 tracking-tight">Sustainably sourced, baked fresh.</h4>
                            <p className="text-gray-500 font-light">
                                Experience the crunch of ethically sourced ingredients baked to perfection in small batches.
                            </p>
                        </div>

                        <div className="flex flex-col items-end pl-8 border-l border-orange-100">
                            <span className="text-sm text-gray-400 font-medium line-through mb-1">$8.99</span>
                            <div className="flex items-baseline gap-1 text-orange-600">
                                <span className="text-lg font-bold">$</span>
                                <span className="text-5xl font-bold tracking-tighter">4.99</span>
                            </div>
                            <span className="text-xs text-orange-400 font-medium mt-1">Per bag</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
