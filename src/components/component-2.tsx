"use client";
import { useEffect, useRef, useState } from "react";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

const tabs: Tab[] = [
    { id: "1", label: "Tab 1", content: <div className="p-4">Tab 1 Content</div> },
    { id: "2", label: "Tab 2", content: <div className="p-4">Tab 2 Content</div> },
    { id: "3", label: "Tab 3", content: <div className="p-4">Tab 3 Content</div> },
    { id: "4", label: "Tab 4", content: <div className="p-4">Tab 4 Content</div> },
    { id: "5", label: "Tab 5", content: <div className="p-4">Tab 5 Content</div> },
    { id: "6", label: "Tab 6", content: <div className="p-4">Tab 6 Content</div> },
    { id: "7", label: "Tab 7", content: <div className="p-4">Tab 7 Content</div> },

];

export const Component2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeTab = tabsRef.current[activeIndex];
        if (activeTab) {
            setIndicatorStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth,
            });
        }
    }, [activeIndex]);

    return (
        <div>
            <div
                className="
          relative flex items-center bg-neutral-950/70 p-1.5 rounded-2xl  shadow-[inset_0_1.5px_0_rgba(12,12,12,0.65),inset_0_-1.5px_0_rgba(255,255,255,0.15)] blur-0 "
            >
                {/* Animated Indicator */}
                <div
                    className="  absolute h-[calc(100%-12px)]  bg-neutral-800 rounded-xl shadow-[inset_0_1.5px_0_rgba(255,255,255,0.05),inset_0_-1.5px_0_rgba(13,13,13,0.95)]   transition-all duration-300  ease-[cubic-bezier(0.4,0,0.2,1)]
  "
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />

                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={(el) => {
                            tabsRef.current[index] = el;
                        }}
                        onClick={() => setActiveIndex(index)}
                        className={` relative z-10 flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-colors duration-200
              ${activeIndex === index
                                ? "text-white"
                                : "text-neutral-400 hover:text-neutral-200"
                            }
            `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
