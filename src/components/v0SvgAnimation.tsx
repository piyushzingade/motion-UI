"use client"

import { motion } from "framer-motion"

export const V0Loader = () => {
    const svgVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: [1, 1.05, 1],
            transition: {
                duration: 3.5,
                ease: [0.6, -0.05, 0.01, 0.99],
                repeat: Infinity,
            },
        },
    }

    const paths = [
        "M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z",
        "M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z",
    ]

    return (
        <div className="flex items-center justify-center h-screen bg-neutral-950">
            <motion.div
                className="relative flex items-center justify-center"
                variants={svgVariants}
                initial="initial"
                animate="animate"
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 147 70"
                    fill="none"
                    className="w-24 h-24 text-white"
                >
                    {paths.map((d, i) => (
                        <motion.path
                            key={i}
                            d={d}
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="white"
                            initial={{
                                pathLength: 0,
                                fillOpacity: 0,
                            }}
                            animate={{
                                pathLength: [0, 1, 1],
                                fillOpacity: [0, 0, 1],
                            }}
                            transition={{
                                duration: 3.5,
                                ease: [0.83, 0, 0.17, 1],
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                        />
                    ))}
                </motion.svg>


            </motion.div>
        </div>
    )
}
