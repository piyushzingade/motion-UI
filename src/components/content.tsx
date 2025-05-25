"use client";
import { motion } from "framer-motion";


export default function Content() {
  return (
    <div
      className="[perspective:: 1000px] [transform-style:perserve-3d] flex justify-center items-center h-screen w-full bg-neutral-800"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1) 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        
        whileHover={{
          rotateX:20,
          rotateY:20,
        }}
        style={{
          translateZ: "100px",
        }}
        transition={{
          duration:0.3,
          ease:"easeInOut"
        }}
        
        className=" group relative text-neutral-500 bg-black rounded-xl px-12 py-4
        shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_insert, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_insert]"
      >
        <p className="group-hover:text-cyan-400 transition-colors duration-300">Subscribe</p>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-4/5 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[4px] w-4/5 mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}
