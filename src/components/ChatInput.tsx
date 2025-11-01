"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AnimatedArrowSVG = ({
    hasText,
    isHovering,
    onSendClick,
}: { hasText: boolean; isHovering: boolean; onSendClick: boolean }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            {hasText && (
                <motion.g
                    animate={
                        onSendClick
                            ? {
                                // Arrow goes to top-right, disappears, reappears from bottom-left, returns to center
                                x: [0, 12, 12, -12, -12, 0],
                                y: [0, -12, -12, 12, 12, 0],
                                opacity: [1, 1, 0, 0, 1, 1],
                                scale: [1, 1.1, 1.05, 1.05, 1.1, 1],
                            }
                            : {
                                x: 0,
                                y: 0,
                                opacity: 1,
                                scale: 1,
                            }
                    }
                    transition={
                        onSendClick
                            ? {
                                duration: 1.6,
                                ease: [0.34, 1.56, 0.64, 1], // cubic-bezier for smooth ease-out bounce
                                times: [0, 0.25, 0.45, 0.55, 0.75, 1],
                            }
                            : {
                                duration: 0.4,
                                ease: "easeOut",
                            }
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
            )}
            {!hasText && (
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

export default function ChatInput() {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [textareaValue, setTextareaValue] = useState("")
    const [sendHovered, setSendHovered] = useState(false)
    const [sendClicked, setSendClicked] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        if (sendClicked) {
            const timer = setTimeout(() => setSendClicked(false), 1600)
            return () => clearTimeout(timer)
        }
    }, [sendClicked])

    if (!mounted) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full bg-neutral-950 p-4">
                <div className="w-[768px] h-[180px] bg-neutral-900/80 border border-neutral-800 rounded-2xl" />
            </div>
        )
    }

    const hasText = textareaValue.trim().length > 0

    const handleSendClick = () => {
        if (hasText) {
            setSendClicked(true)
        }
    }

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
                            className="relative flex items-center justify-center h-[42px]"
                        >
                            <AnimatePresence mode="wait">
                                {!clicked ? (
                                    <motion.button
                                        key="globe-button"
                                        layoutId="webSearchButton"
                                        onClick={() => setClicked(true)}
                                        className="flex items-center justify-center w-[42px] h-[42px] border border-neutral-700 text-neutral-400 bg-transparent hover:bg-neutral-800 rounded-full transition-all duration-300"
                                    >
                                        <Globe className="w-4 h-4" />
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        key="expanded-button"
                                        layoutId="webSearchButton"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-between gap-2 px-3 h-[42px] border border-neutral-700 bg-neutral-800 text-neutral-100 rounded-full transition-all duration-300 hover:bg-neutral-700"
                                    >
                                        {hovered ? (
                                            <>
                                                <span>Web Search</span>
                                                <motion.button
                                                    key="close"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setClicked(false)
                                                    }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex items-center justify-center p-1 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-all duration-200"
                                                >
                                                    <X className="w-3.5 h-3.5" />
                                                </motion.button>
                                            </>
                                        ) : (
                                            <>
                                                <Globe className="w-4 h-4" />
                                                <span>Web Search</span>
                                            </>
                                        )}
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </motion.div>



                    </div>

                    {/* Right: Send Button */}
                    <motion.button
                        onHoverStart={() => setSendHovered(true)}
                        onHoverEnd={() => setSendHovered(false)}
                        onClick={handleSendClick}
                        aria-label="Send"
                        disabled={!hasText}
                        className={`flex items-center gap-2 border rounded-lg p-2 transition-all shadow-sm ${hasText
                            ? "border-neutral-600 bg-neutral-800/50 hover:bg-neutral-800/90 hover:text-neutral-50 text-neutral-300 cursor-pointer"
                            : "border-neutral-700 bg-neutral-900/30 text-neutral-500 cursor-not-allowed"
                            }`}
                    >
                        <AnimatedArrowSVG hasText={hasText} isHovering={sendHovered} onSendClick={sendClicked} />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
