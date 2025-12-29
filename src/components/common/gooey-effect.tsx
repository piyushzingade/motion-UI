
import React from 'react';
import { motion } from 'motion/react';

export const GooeyBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#goo)' }}>
            {/* Lava-lamp like blobs */}
            <motion.div
                animate={{
                    x: [20, 100, 20],
                    y: [20, 200, 20],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[20%] w-32 h-32 bg-red-600 rounded-full"
            />
            <motion.div
                animate={{
                    x: [180, 50, 180],
                    y: [400, 100, 400],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] right-[10%] w-40 h-40 bg-rose-700/80 rounded-full"
            />
            <motion.div
                animate={{
                    x: [50, 150, 50],
                    y: [500, 300, 500],
                    scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[20%] left-[30%] w-24 h-24 bg-red-500 rounded-full"
            />
        </div>
    );
};
