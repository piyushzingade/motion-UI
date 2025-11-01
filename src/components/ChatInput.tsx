"use client"

import { Globe, Plus, X } from "lucide-react"
import { InputGroupTextarea } from "@/components/ui/input-group"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedArrowSVG } from "./svg/RightArrow"

export default function ChatInput() {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [textareaValue, setTextareaValue] = useState("")
    const [sendClicked, setSendClicked] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => setMounted(true), [])


    const handleClick = () => {
        if (!hasText) return
        setSendClicked(true)
        setTimeout(() => setSendClicked(false), 1000)
    }

    if (!mounted) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)] p-4">
                <div className="w-[768px] h-[180px] bg-[var(--card)] border border-[var(--border)] rounded-2xl" />
            </div>
        )
    }

    const hasText = textareaValue.trim().length > 0

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)] p-2 text-[var(--foreground)] font-sans">
            <motion.div
                layout
                className="bg-[var(--card)] border border-[var(--border)] w-[768px] p-3 rounded-2xl shadow-md flex flex-col gap-3 transition-all hover:shadow-lg"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Input Box */}
                <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors overflow-hidden">
                    <InputGroupTextarea
                        ref={textareaRef}
                        placeholder="Enter your prompt here..."
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                        className="w-full h-[140px] resize-none rounded-xl outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-0 focus:border-none p-3 leading-tight bg-transparent"
                    />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    {/* Left side buttons */}
                    <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <motion.button
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center justify-center border border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)] w-[42px] h-[42px] rounded-full p-2 hover:bg-[var(--muted)] transition-all"
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
                                    className="flex items-center justify-center w-[42px] h-[42px] border border-[var(--border)] bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-full transition-all duration-300"
                                >
                                    <Globe className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center justify-between h-[42px] w-[130px] border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-full transition-all duration-300 px-3 hover:bg-[var(--muted)] overflow-hidden"
                                >
                                    <div
                                        className={`flex items-center gap-2 transition-all duration-300 ease-out ${hovered ? "-translate-x-4" : "translate-x-0"}`}
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

                                    {/* X Icon */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setClicked(false)
                                        }}
                                        className={`flex items-center justify-center p-1 rounded-full border border-[var(--border)] cursor-pointer transition-all duration-300 ease-out transform ${hovered
                                            ? "opacity-100 scale-100 translate-x-[-16px] hover:bg-[var(--accent)]"
                                            : "opacity-0 scale-75 translate-x-6"
                                            }`}
                                    >
                                        <X className="w-4 h-4 text-[var(--muted-foreground)]" />
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
                        className={`flex items-center justify-center border rounded-xl h-[42px] w-[42px] transition-all ${hasText
                            ? "border-[var(--border)] bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                            : "border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] cursor-not-allowed"
                            }`}
                    >
                        <AnimatedArrowSVG hasText={hasText} onSendClick={sendClicked} />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
