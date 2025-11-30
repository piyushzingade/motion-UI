"use client";

import { motion } from "motion/react";

const RotatingChar = ({ char, index, reverse = false }: { char: string; index: number; reverse?: boolean }) => {
    return (
        <motion.span
            className="inline-block"
            animate={{
                rotateX: reverse ? [0, -360, 0] : [0, 360, 0],
                filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1, // Stagger effect
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

export default function RotatingText() {
    const word1 = "Start";
    const word2 = "deploying";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="flex gap-6 text-6xl font-bold">
                {/* First word - "Start" */}
                <div className="flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {word1.split("").map((char, i) => (
                        <RotatingChar key={i} char={char} index={i} />
                    ))}
                </div>

                {/* Second word - "deploying" */}
                <div className="flex text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {word2.split("").map((char, i) => (
                        <RotatingChar
                            key={i}
                            char={char}
                            index={i + word1.length} // Continue delay sequence
                            reverse={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
