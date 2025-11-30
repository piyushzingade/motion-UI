"use client"
import { ArrowUp } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export function AnimateButton() {
    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-neutral-900">
            <motion.div
                initial={{
                    x: -120,
                    opacity: 0,
                    scale: 0.5,
                    filter: "blur(8px)",
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 360,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: 0.1,
                }}
                className="h-16 w-16 rounded-full bg-red-500 shadow-lg flex items-center justify-center"
            ><ArrowUp className="text-white size-4" /></motion.div>
        </div>
    )
}



// export default function FeedbackCard() {
//     const [open, setOpen] = useState(false)
//     const [text, setText] = useState("")

//     return (
//         <div className="relative min-h-screen flex justify-center items-center">
//             <AnimatePresence>
//                 {!open && (
//                     <motion.button
//                         key="button"
//                         layoutId="card"
//                         onClick={() => setOpen(true)}
//                         className="flex items-center justify-center rounded-xl bg-neutral-700 text-neutral-200 border border-neutral-800 cursor-pointer text-center text-sm py-2 px-4 shadow-md"
//                     >
//                         <motion.h2 layoutId="title">Feedback</motion.h2>
//                     </motion.button>
//                 )}

//                 {open && (
//                     <motion.div
//                         key="card"
//                         layoutId="card"
//                         className="absolute w-[360px] rounded-xl bg-neutral-700 p-3 border border-neutral-800 flex flex-col gap-3"
//                     >


//                         <textarea
//                             rows={4}
//                             value={text}
//                             onChange={(e) => setText(e.target.value)}
//                             className="w-full resize-none rounded-lg bg-neutral-800 p-3 text-sm text-white outline-none"
//                             placeholder="Write your feedback..."
//                         />

//                         <div className="flex justify-end gap-2">
//                             <button
//                                 onClick={() => {
//                                     setText("")
//                                     setOpen(false)
//                                 }}
//                                 className="px-3 py-1.5 text-xs rounded-md bg-neutral-600 text-white"
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 onClick={() => {
//                                     setText("")
//                                     setOpen(false)
//                                 }}
//                                 className="px-3 py-1.5 text-xs rounded-md bg-blue-600 text-white"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     )
// }

export default function FeedbackCard() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <AnimatePresence>
                {!open && (
                    <motion.button
                        layoutId="card"
                        className="relative flex justify-center items-center p-3 border border-neutral-700 bg-neutral-800"
                        onClick={() => setOpen(true)}
                    >
                        Feedback
                    </motion.button>
                )}

                {open && (
                    <motion.div
                        layoutId="card"
                        className="absolute w-[300px] border flex flex-col  border-neutral-800 bg-neutral-900 p-4 gap-4">
                        <textarea
                            rows={4}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>

                        <motion.button onClick={() => setOpen(false)} className="bg-red-500">Submit</motion.button>

                    </motion.div>

                )}
            </AnimatePresence>

        </div>
    )
}