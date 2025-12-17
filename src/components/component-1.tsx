"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, MotionConfig } from "motion/react"
import {
    Plus,
    Folder,
    FileText,
    StickyNote,
    Trophy,
    Flag,
    Calendar,
} from "lucide-react"

interface MenuItem {
    id: string
    label: string
    icon: React.ElementType
}

const menuItems: MenuItem[] = [
    { id: "project", label: "Project", icon: Folder },
    { id: "notebook", label: "Notebook", icon: FileText },
    { id: "notes", label: "Notes", icon: StickyNote },
    { id: "goal", label: "Goal", icon: Trophy },
    { id: "milestone", label: "Milestone", icon: Flag },
    { id: "event", label: "Event", icon: Calendar },
]

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    onOutside: () => void
) => {
    const ref = useRef<T | null>(null)

    const handleClick = useCallback(
        (e: MouseEvent) => {
            const el = ref.current
            if (!el) return
            if (!el.contains(e.target as Node)) {
                onOutside()
            }
        },
        [onOutside]
    )

    useEffect(() => {
        document.addEventListener("click", handleClick, true)
        return () => {
            document.removeEventListener("click", handleClick, true)
        }
    }, [handleClick])

    return ref
}

const listContainerVariants = {
    hidden: {
        opacity: 0,
        y: 8,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.22,
            when: "beforeChildren",
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: 4,
        transition: {
            duration: 0.15,
        },
    },
}

const listItemVariants = {
    hidden: {
        opacity: 0,
        y: 6,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.18,
        },
    },
}

export function Component1() {
    const [open, setOpen] = useState(false)
    const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))

    return (
        <MotionConfig
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.8,
            }}
        >
            <div ref={ref} className="relative flex justify-center items-center">
                <AnimatePresence>
                    {/* BUTTON STATE */}
                    {!open && (
                        <motion.button
                            key="button"
                            layoutId="card"
                            type="button"
                            onClick={() => setOpen(true)}
                            initial={{ opacity: 0, scale: 0.85, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 6 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="
        flex items-center px-6 py-3 space-x-2 rounded-full cursor-pointer
        bg-gradient-to-b from-neutral-800 to-neutral-900
        border border-neutral-700/50
        shadow-[0_5px_10px_0px_#000_inset,0_-1px_0_0_#111111_inset,0_1px_0_0_#323232]
        text-neutral-100 font-medium select-none
    "
                        >
                            <motion.span layoutId="head" className="flex items-center">
                                Create new
                                <Plus className="ml-2 h-4 w-4" />
                            </motion.span>
                        </motion.button>

                    )}

                    {/* CARD STATE */}
                    {open && (
                        <motion.div
                            key="card"
                            layoutId="card"
                            className="absolute flex flex-col w-[480px] rounded-2xl 
                         bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900 
                         border border-neutral-700/50 text-neutral-50 p-5"
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 10,
                            }}
                        >
                            {/* HEADER */}
                            <motion.div
                                layoutId="head"
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h2 className="text-lg font-semibold text-neutral-50 tracking-wide">
                                    Create new
                                </h2>

                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full p-1.5 hover:bg-neutral-700/50 transition-all duration-200"
                                >
                                    <Plus className="h-5 w-5 rotate-45 text-neutral-400 hover:text-neutral-200 transition-colors" />
                                </button>
                            </motion.div>

                            {/* DIVIDER */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4" />

                            {/* BODY */}
                            <motion.div
                                variants={listContainerVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="grid grid-cols-3 gap-3 w-full bg-white/95 backdrop-blur-sm border border-neutral-300/50 rounded-xl p-4 shadow-inner"
                            >
                                {menuItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.button
                                            key={item.id}
                                            variants={listItemVariants}
                                            type="button"
                                            className="flex flex-col items-center justify-center w-full px-4 py-6 rounded-lg 
                                 bg-white hover:bg-neutral-50 transition-all duration-200 group
                                 border border-transparent hover:border-neutral-200 hover:shadow-sm"
                                        >
                                            <Icon className="h-8 w-8 text-neutral-700 group-hover:text-neutral-900 transition-colors mb-2" />
                                            <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">
                                                {item.label}
                                            </span>
                                        </motion.button>
                                    )
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    )
}
