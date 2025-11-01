"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AnimatedArrowSVG = ({ hasText, isHovering }: { hasText: boolean; isHovering: boolean }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            {hasText && (
                <motion.g
                    animate={{
                        x: isHovering ? [0, 10, -10, 0] : [0, 6, -6, 0],
                        y: isHovering ? [0, -10, 10, 0] : [0, -6, 6, 0],
                        opacity: isHovering ? [1, 1, 1, 1] : [1, 0.7, 0.7, 1],
                        scale: isHovering ? [1, 1.05, 1.05, 1] : [1, 0.95, 0.95, 1],
                    }}
                    transition={{
                        duration: isHovering ? 1.8 : 2.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        times: [0, 0.35, 0.65, 1],
                    }}
                >
                    <path
                        d="M1 1L13 13M13 13L7 13M13 13L13 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.g>
            )}
            {!hasText && (
                <path
                    d="M1 1L13 13M13 13L7 13M13 13L13 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    )
}

export default function Input() {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [textareaValue, setTextareaValue] = useState("")
    const [sendHovered, setSendHovered] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full bg-neutral-950 p-4">
                <div className="w-[768px] h-[180px] bg-neutral-900/80 border border-neutral-800 rounded-2xl" />
            </div>
        )
    }

    const hasText = textareaValue.trim().length > 0

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-neutral-950 p-4">
            {/* Main Card */}
            <motion.div
                layout
                className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 w-[768px] p-4 rounded-2xl shadow-md flex flex-col gap-4 transition-all hover:shadow-lg"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Input Box */}
                <div className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors overflow-hidden">
                    <InputGroupTextarea
                        ref={textareaRef}
                        placeholder="Enter your prompt here..."
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                        className="w-full h-[120px] resize-none rounded-xl outline-none text-neutral-100 placeholder:text-neutral-500 focus:ring-0 focus:border-none p-3 leading-tight bg-transparent"
                    />
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-between">
                    {/* Left Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center justify-center border border-neutral-700 bg-neutral-800 text-neutral-100 rounded-full p-2 hover:bg-neutral-700 transition-all shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                        </motion.button>

                        {/* Animated Web Search Button with Parent Hover */}
                        <motion.div
                            onHoverStart={() => setHovered(true)}
                            onHoverEnd={() => setHovered(false)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`rounded-full transition-all ${hovered ? "bg-neutral-800/60 border border-neutral-700 shadow-sm" : ""}`}
                        >
                            <motion.button
                                onClick={() => !clicked && setClicked(true)}
                                animate={{
                                    width: clicked ? 150 : 42,
                                    backgroundColor: clicked ? (hovered ? "#262626" : "#27272a") : "transparent",
                                    color: clicked ? "#fafafa" : "#a3a3a3",
                                    borderColor: "#262626",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                }}
                                className="flex items-center justify-center overflow-hidden border rounded-full text-sm font-medium shadow-sm active:scale-95 min-w-[38px] h-[38px]"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {clicked ? (
                                        hovered ? (
                                            // Hovered while clicked → "Web Search" + X
                                            <motion.div
                                                key="hoveredSearch"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.08 } },
                                                }}
                                                className="flex items-center gap-2 px-3 h-[42px]"
                                            >
                                                <motion.span
                                                    variants={{
                                                        hidden: { opacity: 0, x: -6 },
                                                        visible: { opacity: 1, x: 0 },
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                >
                                                    Web Search
                                                </motion.span>

                                                {/* X icon */}
                                                <AnimatePresence mode="popLayout" initial={false}>
                                                    <motion.button
                                                        key="x-icon"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setClicked(false)
                                                        }}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.6 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        className="flex items-center justify-center p-1 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-all cursor-pointer"
                                                    >
                                                        <X className="w-3.5 h-3.5" />
                                                    </motion.button>
                                                </AnimatePresence>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.1 } },
                                                }}
                                                className="flex items-center gap-2 px-3 h-[42px]"
                                            >
                                                <motion.div
                                                    variants={{
                                                        hidden: { opacity: 0, scale: 0.8, x: -4 },
                                                        visible: { opacity: 1, scale: 1, x: 0 },
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                    animate={sendHovered ? { scale: 1.2, rotate: 20 } : { scale: 1, rotate: 0 }}
                                                >
                                                    <Globe className="w-4 h-4" />
                                                </motion.div>
                                                <motion.span
                                                    variants={{
                                                        hidden: { opacity: 0, x: -6 },
                                                        visible: { opacity: 1, x: 0 },
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                >
                                                    Web Search
                                                </motion.span>
                                            </motion.div>
                                        )
                                    ) : (
                                        // Default Globe Button with hover effect
                                        <motion.div
                                            key="globe"
                                            initial={false}
                                            animate={sendHovered ? { scale: 1.2, rotate: 20 } : { scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            whileHover={{ scale: 1.08 }}
                                        >
                                            <Globe className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right: Send Button */}
                    <motion.button
                        onHoverStart={() => setSendHovered(true)}
                        onHoverEnd={() => setSendHovered(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        aria-label="Send"
                        className="flex items-center gap-2 border border-neutral-600 rounded-lg p-2 bg-neutral-800/50 hover:bg-neutral-800/90 hover:text-neutral-50 text-neutral-300 transition-all shadow-sm"
                    >
                        <AnimatedArrowSVG hasText={hasText} isHovering={sendHovered} />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
