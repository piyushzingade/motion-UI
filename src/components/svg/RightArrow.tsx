"use client"
import { motion } from "framer-motion"

export const AnimatedArrowSVG = ({
    hasText,
    onSendClick,
}: {
    hasText: boolean
    onSendClick: boolean
}) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
        >
            {hasText ? (
                <motion.g
                    animate={
                        onSendClick
                            ? {
                                x: [0, 8, 12, -4, 0],
                                y: [0, -10, -14, 6, 0],
                                opacity: [1, 1, 0, 0, 1],
                                rotate: [0, 10, -10, 5, 0],
                                scale: [1, 1.1, 0.95, 1.05, 1],
                            }
                            : {
                                scale: 1,
                                y: 0,
                                rotate: 0,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 300, damping: 14 },
                            }
                    }
                    transition={
                        onSendClick
                            ? {
                                duration: 0.65,
                                ease: [0.25, 1, 0.5, 1], // fast smooth ease
                                times: [0, 0.3, 0.5, 0.7, 1],
                            }
                            : undefined
                    }
                >
                    <path
                        d="M4 20L20 4M20 4H10M20 4V14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.g>
            ) : (
                <path
                    d="M4 20L20 4M20 4H10M20 4V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    )
}