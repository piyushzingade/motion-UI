"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"


const AnimatedArrowSVG = ({
    hasText,
    isHovering,
    onSendClick,
}: {
    hasText: boolean
    isHovering: boolean
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
        <div className="flex items-center justify-center min-h-screen w-full bg-neutral-950 p-2">
            {/* Main Card */}
            <motion.div
                layout
                className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 w-[768px] p-3 rounded-2xl shadow-md flex flex-col gap-3 transition-all hover:shadow-lg"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Input Box */}
                <div className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors overflow-hidden">
                    <InputGroupTextarea
                        ref={textareaRef}
                        placeholder="Enter your prompt here..."
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                        className="w-full h-[140px] resize-none rounded-xl outline-none text-neutral-100 placeholder:text-neutral-500 focus:ring-0 focus:border-none p-3 leading-tight bg-transparent"
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
                            className="flex items-center justify-center border border-neutral-700 bg-neutral-800 w-[42px] h-[42px] text-neutral-100 rounded-full p-2 hover:bg-neutral-700 transition-all shadow-sm"
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
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex items-center justify-center w-[42px] h-[42px] border border-neutral-700 text-neutral-400 bg-transparent hover:bg-neutral-800 rounded-full transition-all duration-300"
                                    >
                                        <Globe className="w-4 h-4" />
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        key="expanded-button"
                                        layoutId="webSearchButton"
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="relative flex items-center justify-between h-[42px] w-[140px] border border-neutral-700 bg-neutral-800 text-neutral-100 rounded-full transition-all duration-300 overflow-hidden hover:bg-neutral-700"
                                    >
                                        {/* Left side (Globe + Text) */}
                                        <motion.div
                                            className="flex items-center gap-2 pl-3"
                                            animate={{
                                                x: hovered ? -12 : 0,
                                            }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <Globe
                                                className={`w-4 h-4 transition-all duration-150 ${hovered ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}
                                            />
                                            <span className="text-sm whitespace-nowrap">Web Search</span>
                                        </motion.div>

                                        {/* Right side (X button) */}
                                        <motion.button
                                            key="close"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setClicked(false);
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: hovered ? 1 : 0,
                                                scale: hovered ? 1 : 0.8,
                                            }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                            className="absolute right-2 flex items-center justify-center w-[28px] h-[28px] border border-neutral-700 rounded-full p-1 hover:bg-neutral-800 transition-all duration-150"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </motion.button>
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </motion.div>


                    </div>

                    {/* Send Button */}
                    <motion.button
                        onHoverStart={() => setSendHovered(true)}
                        onHoverEnd={() => setSendHovered(false)}
                        onClick={handleSendClick}
                        aria-label="Send"
                        disabled={!hasText}
                        className={`flex items-center justify-center gap-2 border rounded-xl p-2 transition-all shadow-sm  h-[42px] w-[42px] ${hasText
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