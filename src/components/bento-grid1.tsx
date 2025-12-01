import React from "react";
import { ArrowRight, Leaf, Wheat, Heart, ShoppingBag, Award, Truck, Star } from "lucide-react";
import Image from "next/image";

export function BentoGrid1() {
    return (
        <div className="grid grid-rows-3 gap-4 border border-orange-200 bg-white rounded-3xl p-6 w-[1200px] h-[700px] shadow-[0_40px_100px_-15px_rgba(234,88,12,0.15)] ring-1 ring-orange-50">

            {/* Top Section */}
            <div className="row-span-2 gap-4 grid grid-cols-4">

                {/* Card 1 */}
                <div className="group col-span-2 row-span-3 rounded-2xl bg-orange-50 overflow-hidden relative transition-all duration-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.2)] cursor-pointer">
                    <Image
                        src="https://picsum.photos/id/425/600/800"
                        alt="Granola Bowl"
                        width={100}
                        height={100}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                        <div className="bg-orange-600/90 backdrop-blur-md w-fit px-3 py-1 rounded-full mb-4 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(255,140,0,0.3)]">
                            <span className="text-xs font-semibold flex text-center justify-center capitalize tracking-tight text-white">Signature Blend</span>
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
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card 2 */}
                <div className="group col-span-1 row-span-1 border border-orange-400 rounded-2xl bg-gradient-to-br from-white to-orange-50/50 overflow-hidden relative transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)] hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 p-5 cursor-pointer">
                    <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity text-orange-600">
                        <Award size={48} />
                    </div>

                    <div className="h-full flex flex-col justify-between space-y-4">
                        <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <span className="text-lg font-bold">20g</span>
                        </div>

                        <div className="space-y-2 tracking-tighter">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">High Protein</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Plant-based energy boost packed with nutrients to keep you energized.</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card 3 */}
                <div className="group col-span-1 row-span-1 border border-orange-400 rounded-2xl bg-white overflow-hidden relative transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)] hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 p-5 cursor-pointer">
                    <div className="h-full flex flex-col relative z-20">
                        <div className="flex gap-2 mb-auto">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-green-200">GF</span>
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-orange-200">Vegan</span>
                        </div>

                        <div className="space-y-2 mt-4">
                            <h3 className="text-lg font-bold text-gray-900 leading-none tracking-tighter">Gluten-Free & Vegan</h3>
                            <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                100% plant-based, dairy-free, and safe for sensitive diets.
                            </p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Leaf className="absolute -bottom-4 -right-4 text-orange-50 w-28 h-28 -rotate-12 group-hover:text-orange-100/80 transition-colors pointer-events-none z-10" />
                </div>

                {/* Card 4 */}
                <div className="group relative col-span-2 row-span-2 border border-orange-400 rounded-2xl bg-orange-50 overflow-hidden transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)] hover:shadow-xl hover:shadow-orange-900/5 cursor-pointer">

                    <div className="absolute inset-y-0 right-0 w-[55%] h-full overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-orange-50 via-orange-50/20 to-transparent"></div>
                        <img
                            src="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=800&auto=format&fit=crop"
                            alt="Ancient Grains"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative z-20 w-[55%] h-full p-8 flex flex-col justify-center">
                        <div className="space-y-5">
                            <div className="flex items-center gap-2 text-orange-600">
                                <div className="p-1.5 bg-white rounded-md shadow-sm border border-orange-100">
                                    <Wheat className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider">Ancient Grains</span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight mb-2">Quinoa, Amaranth <br /> & Chia Seeds</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    A master blend providing superior texture and complete nutrition profile.
                                </p>
                            </div>

                            <ul className="text-xs text-gray-500 space-y-2 font-semibold">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full shadow-sm"></div> Rich in antioxidants</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full shadow-sm"></div> Sustained energy release</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full shadow-sm"></div> High in digestive fiber</li>
                            </ul>

                            <div className="pt-4 border-t border-orange-200/60">
                                <p className="text-xs font-bold text-orange-700 flex items-center gap-1.5 bg-orange-100/50 w-fit px-2 py-1 rounded-full">
                                    <Heart className="w-3 h-3 fill-orange-500 text-orange-500" /> Perfect with yogurt
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div >

            {/* Bottom Section */}
            < div className="row-span-1 gap-4 grid grid-cols-4" >

                {/* Card 5 */}
                < div className="group col-span-1 cursor-pointer border border-orange-400 rounded-2xl bg-orange-600 overflow-hidden relative transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/20 " >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

                    <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
                        <div className="flex justify-between items-start">
                            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-inner">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1 bg-green-500/30 px-2 py-0.5 rounded-full border border-green-400/30 mb-1">
                                    <Star className="w-3 h-3 fill-green-300 text-green-300" />
                                    <span className="text-[10px] font-bold text-green-100">4.9/5</span>
                                </div>
                                <span className="text-[10px] text-orange-100/80 font-medium">2k+ Reviews</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold leading-none">Buy Now</h3>
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            <p className="text-orange-100 text-xs font-medium tracking-wide mb-3 opacity-90">Fresh Batch #402</p>

                            <div className="flex items-center gap-2 text-[10px] text-white bg-black/20 w-full px-2 py-1.5 rounded-lg border border-white/10">
                                <Truck className="w-3 h-3" />
                                <span className="font-semibold">Free US Shipping {"> "}$30</span>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Card 6 */}
                <div className="group col-span-3 border border-orange-400 rounded-2xl bg-white overflow-hidden relative transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-50 via-orange-50/50 to-transparent opacity-50 z-0"></div>
                    <div className="absolute inset-0 bg-transparent group-hover:bg-orange-500/10 transition-colors duration-300 z-10 pointer-events-none"></div>

                    <div className="relative z-20 p-8 h-full flex items-center justify-between">
                        <div className="space-y-3 max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider shadow-sm border border-orange-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                Weekly Special
                            </div>

                            <h4 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Sustainably sourced, baked fresh.
                            </h4>

                            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-md">
                                Experience the crunch of ethically sourced ingredients baked to perfection
                                in small batches. Order now for weekend delivery.
                            </p>
                        </div>

                        <div className="flex flex-col items-end pl-8 border-l border-orange-100 h-2/3 justify-center">
                            <span className="text-sm text-gray-400 font-medium line-through mb-1 decoration-orange-300/50">
                                $8.99
                            </span>

                            <div className="flex items-baseline gap-1 text-orange-600">
                                <span className="text-2xl font-bold">$</span>
                                <span className="text-6xl font-black tracking-tighter drop-shadow-sm">4.99</span>
                            </div>

                            <span className="text-xs text-orange-500 font-bold uppercase tracking-wide mt-1 bg-orange-50 px-2 py-0.5 rounded-md">
                                Per 12oz Bag
                            </span>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}
