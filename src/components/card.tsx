"use client";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Card(){
    const [open , setopen] = useState(true);
    return (
      <>
        <AnimatePresence>
          {open && (
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="w-72 h-[24rem] min-h-[20rem] p-3 flex flex-col  border border-gray-500 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[10px] font-bold text-gray-800">Motion UI </p>

              <p className="text-[10px] font-bold mt-1 text-gray-400">
                A collection of beautiful UI components
              </p>

              <div className="flex font-light justify-center items-center">
                <button
                  onClick={() => setopen(false)}
                  className="text-black text-[10px] text-md  mt-4 flex justify-center items-center border rounded-lg px-2 py-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                >
                  UI components
                  <span>
                    <IconX className="h-3 w-3 text-gray-400 ml-1" />
                  </span>
                </button>
              </div>

              <div className="relative flex-1 mt-4 rounded-lg border border-dashed border-netural-200 bg-gray-100">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  // animate={{ opacity: 1, scale: 1.2 }}
                  // exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  className="absolute inset-0 h-full w-full  bg-white rounded-lg divide-y divide-gray-500 border border-neutral-200"
                >
                  <div className="p-4 text-md font-thin">sdvsdafa</div>
                  <div className="p-4 text-md font-thin">sdvsdafa</div>
                  <div className="p-4 text-md font-thin">sdvsdafa</div>
                  <div className="p-4 text-md font-thin">sdvsdafa</div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
}