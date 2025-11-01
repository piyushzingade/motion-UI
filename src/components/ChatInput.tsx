"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedArrowSVG } from "./svg/RightArrow"

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

                        <div
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="relative flex items-center justify-center h-[42px]"
                        >
                            {!clicked ? (
                                <button
                                    onClick={() => setClicked(true)}
                                    className="flex items-center justify-center w-[42px] h-[42px] border border-blue-300 text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300"
                                >
                                    <Globe className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center justify-between h-[42px] w-[140px] border border-blue-300 bg-blue-100 text-blue-900 rounded-full transition-all duration-300 px-3 hover:bg-blue-200 overflow-hidden"
                                >
                                    {/* Globe + Text */}
                                    <div
                                        className={`flex items-center gap-2 transition-all duration-300 ease-out ${hovered ? "-translate-x-4" : "translate-x-0"
                                            }`}
                                    >
                                        <Globe
                                            className={`w-4 h-4 transition-all duration-300 ${hovered
                                                ? "opacity-0 scale-75 -translate-x-2"
                                                : "opacity-100 scale-100 translate-x-0"
                                                }`}
                                        />
                                        <span
                                            className={`text-sm font-medium whitespace-nowrap transition-transform duration-300 ${hovered ? "-translate-x-1" : "translate-x-0"
                                                }`}
                                        >
                                            Web Search
                                        </span>
                                    </div>

                                    {/* X icon (slides in from right) */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setClicked(false)
                                        }}
                                        className={`flex items-center justify-center p-1 rounded-full border border-blue-300 cursor-pointer transition-all duration-300 ease-out transform ${hovered
                                            ? "opacity-100 scale-100 translate-x-[-8px] hover:bg-blue-200"
                                            : "opacity-0 scale-75 translate-x-6"
                                            }`}
                                    >
                                        <X className="w-4 h-4 text-neutral-800" />
                                    </div>
                                </button>
                            )}
                        </div>

                    </div>

                    <motion.button
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