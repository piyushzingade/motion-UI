"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedArrowSVG } from "../svg/RightArrow"

export default function ChatInput() {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [textareaValue, setTextareaValue] = useState("")
    const [sendClicked, setSendClicked] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => setMounted(true), [])
    const hasText = textareaValue.trim().length > 0

    const handleClick = () => {
        if (!hasText) return
        setSendClicked(true)
        setTimeout(() => setSendClicked(false), 1000)
    }

    if (!mounted) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full bg-neutral-50 p-4">
                <div className="w-[768px] h-[180px] bg-neutral-100 border border-neutral-200 rounded-2xl" />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-neutral-50 p-2 text-neutral-800 font-sans">
            <motion.div
                layout
                className="bg-neutral-100 border border-neutral-200 w-[768px] p-3 rounded-2xl shadow-sm flex flex-col gap-3 transition-all hover:shadow-md"
                transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            >
                {/* Input Box */}
                <div className="bg-neutral-100 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors overflow-hidden">
                    <InputGroupTextarea
                        ref={textareaRef}
                        placeholder="Enter your prompt here..."
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                        className="w-full h-[140px] resize-none rounded-xl outline-none text-neutral-800 placeholder:text-neutral-400 focus:ring-0 focus:border-none p-3 leading-tight bg-transparent"
                    />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    {/* Left Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <motion.button
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center justify-center border border-neutral-200 bg-neutral-50 text-neutral-700 cursor-pointer w-[42px] h-[42px] rounded-full p-2 hover:bg-neutral-200 transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)]"
                        >
                            <Plus className="w-4 h-4" />
                        </motion.button>

                        {/* Globe Button */}
                        <div
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="relative flex items-center justify-center h-[42px]"
                        >
                            {!clicked ? (
                                <button
                                    onClick={() => setClicked(true)}
                                    className="flex items-center justify-center w-[42px] h-[42px] border border-neutral-200 bg-neutral-50 text-neutral-700 cursor-pointer rounded-full
                    transition-transform duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] transform hover:scale-[1.08] active:scale-[0.96] shadow-sm hover:shadow-md"
                                >
                                    <Globe className="w-4 h-4 transition-opacity duration-200 ease-[cubic-bezier(0.33,1,0.68,1)]" />
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setClicked(false)
                                    }}
                                    className="flex items-center justify-between h-[42px] border border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-neutral-800 rounded-full px-3 cursor-pointer
                    transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] overflow-hidden hover:bg-neutral-200 transform origin-center shadow-sm hover:shadow-md"
                                    style={{ width: clicked ? "130px" : "42px" }}
                                >
                                    <div
                                        className={`flex items-center gap-2 transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] ${hovered ? "-translate-x-4 opacity-70" : "translate-x-0 opacity-100"
                                            }`}
                                    >
                                        <Globe
                                            className={`w-4 h-4 transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] ${hovered ? "opacity-0 scale-90 -translate-x-2" : "opacity-100 scale-100"
                                                }`}
                                        />
                                        <span
                                            className={`text-sm font-medium whitespace-nowrap transition-transform duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] ${hovered ? "-translate-x-1" : "translate-x-0"
                                                }`}
                                        >
                                            Web Search
                                        </span>
                                    </div>

                                    {/* X Icon */}
                                    <div
                                        className={`flex items-center justify-center p-1 rounded-full border border-neutral-200 transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] transform ${hovered
                                            ? "opacity-100 scale-100 translate-x-[-16px] bg-neutral-200 hover:bg-neutral-300 text-neutral-600"
                                            : "opacity-0 scale-90 translate-x-6"
                                            }`}
                                    >
                                        <X className="w-4 h-4" />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Send Button */}
                    <motion.button
                        onClick={handleClick}
                        whileTap={{ scale: 0.9 }}
                        disabled={!hasText}
                        className={`flex items-center justify-center border rounded-xl h-[42px] w-[42px] transition-all cursor-pointer duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] ${hasText
                            ? "border-neutral-300 bg-neutral-800 text-neutral-50 hover:bg-neutral-900"
                            : "border-neutral-200 bg-neutral-200 text-neutral-500 cursor-not-allowed"
                            }`}
                    >
                        <AnimatedArrowSVG hasText={hasText} onSendClick={sendClicked} />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
