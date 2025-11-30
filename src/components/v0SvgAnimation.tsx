"use client"

import { motion, type Transition } from "framer-motion"

const LETTER_PATHS = [
    "M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z",
    "M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z",
]

const PARTICLES = [
    { cx: 32, cy: 18, r: 0.9 },
    { cx: 48, cy: 42, r: 1.2 },
    { cx: 22, cy: 48, r: 0.8 },
    { cx: 108, cy: 20, r: 1 },
    { cx: 124, cy: 34, r: 1.1 },
    { cx: 96, cy: 52, r: 0.7 },
]

export const V0Loader = () => {
    const pathDraw: Transition = {
        duration: 2.4,
        ease: [0.7, 0, 0.2, 1],
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.2,
    }

    return (
        <div className="flex h-screen items-center justify-center bg-neutral-950">
            <motion.div
                className="relative flex items-center justify-center"
                whileHover={{
                    rotateX: 6,
                    rotateY: -6,
                    scale: 1.03,
                }}
                transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 14,
                }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 147 70"
                    fill="none"
                    className="h-32 w-32 text-white"
                >
                    <defs>
                        <linearGradient id="v0-stroke" x1="0" y1="0" x2="147" y2="70" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#22d3ee" />
                            <stop offset="0.5" stopColor="#c084fc" />
                            <stop offset="1" stopColor="#38bdf8" />
                        </linearGradient>
                        <linearGradient id="v0-fill" x1="0" y1="0" x2="147" y2="70" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgba(14,165,233,0.15)" />
                            <stop offset="1" stopColor="rgba(192,132,252,0.25)" />
                        </linearGradient>
                    </defs>

                    {LETTER_PATHS.map((d, i) => (
                        <g key={i}>
                            <motion.path
                                d={d}
                                stroke="url(#v0-stroke)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0.2 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ ...pathDraw, delay: i * 0.3 }}
                            />
                            <path d={d} fill="url(#v0-fill)" opacity={0.45} />
                        </g>
                    ))}

                    {PARTICLES.map((particle) => (
                        <motion.circle
                            key={`${particle.cx}-${particle.cy}`}
                            cx={particle.cx}
                            cy={particle.cy}
                            r={particle.r}
                            fill="rgba(255,255,255,0.75)"
                            style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.7))" }}
                        />
                    ))}
                </motion.svg>
            </motion.div>
        </div>
    )
}
