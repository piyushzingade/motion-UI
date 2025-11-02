"use client"

import { motion } from "framer-motion"
import { V0svg } from "./svg/v0"

export function V0Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="relative w-32 h-32">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute inset-0 rounded-full border border-white/20"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute inset-2 rounded-full border border-white/10"
                    animate={{
                        rotate: -360,
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />

                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                            x: [0, Math.cos((i * Math.PI) / 2) * 60, 0],
                            y: [0, Math.sin((i * Math.PI) / 2) * 60, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: "50%",
                            top: "50%",
                            marginLeft: "-2px",
                            marginTop: "-2px",
                        }}
                    />
                ))}

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        animate={{
                            filter: [
                                "drop-shadow(0 0 4px rgba(255,255,255,0))",
                                "drop-shadow(0 0 12px rgba(255,255,255,0.5))",
                                "drop-shadow(0 0 4px rgba(255,255,255,0))",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <V0svg />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        backgroundImage: [
                            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                            "linear-gradient(45deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 70%)",
                            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                        ],
                        backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <motion.div
                className="absolute bottom-20 text-center"
                animate={{
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                <p className="text-sm font-medium text-foreground/70 tracking-wider">Generating magic...</p>
            </motion.div>
        </div>
    )
}
