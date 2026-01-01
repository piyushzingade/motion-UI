"use client";
import { useState, useRef, useEffect } from "react";
import { animate } from "framer-motion";

export const UPPERCASE_PATHS = [
    { letter: "A", path: "M10 110 L50 10 L90 110 M25 75 L75 75" },
    { letter: "B", path: "M20 10 L20 110 L65 110 Q85 110 85 90 Q85 70 65 70 L20 70 M65 70 Q90 70 90 40 Q90 10 65 10 L20 10" },
    { letter: "C", path: "M90 30 Q70 10 40 10 Q10 10 10 60 Q10 110 40 110 Q70 110 90 90" },
    { letter: "D", path: "M20 10 L20 110 L55 110 Q90 110 90 60 Q90 10 55 10 L20 10" },
    { letter: "E", path: "M90 10 L20 10 L20 110 L90 110 M20 60 L70 60" },
    { letter: "F", path: "M20 10 L20 110 M20 10 L90 10 M20 60 L70 60" },
    { letter: "G", path: "M90 40 Q75 10 40 10 Q10 10 10 60 Q10 110 40 110 Q70 110 90 90 L90 65 L55 65" },
    { letter: "H", path: "M20 10 L20 110 M90 10 L90 110 M20 60 L90 60" },
    { letter: "I", path: "M20 10 L90 10 M55 10 L55 110 M20 110 L90 110" },
    { letter: "J", path: "M90 10 L90 90 Q90 110 60 110 Q30 110 30 90" },
    { letter: "K", path: "M20 10 L20 110 M90 10 L20 60 L90 110" },
    { letter: "L", path: "M20 10 L20 110 L90 110" },
    { letter: "M", path: "M10 110 L10 10 L50 60 L90 10 L90 110" },
    { letter: "N", path: "M20 110 L20 10 L90 110 L90 10" },
    { letter: "O", path: "M50 10 Q10 10 10 60 Q10 110 50 110 Q90 110 90 60 Q90 10 50 10" },
    { letter: "P", path: "M20 110 L20 10 L65 10 Q90 10 90 40 Q90 70 65 70 L20 70" },
    { letter: "Q", path: "M50 10 Q10 10 10 60 Q10 110 50 110 Q90 110 90 60 Q90 10 50 10 M60 80 L90 110" },
    { letter: "R", path: "M20 110 L20 10 L65 10 Q90 10 90 40 Q90 70 65 70 L20 70 M60 70 L90 110" },
    { letter: "S", path: "M90 30 Q70 10 40 10 Q10 10 10 35 Q10 60 50 60 Q90 60 90 85 Q90 110 40 110 Q10 110 10 90" },
    { letter: "T", path: "M10 10 L90 10 M50 10 L50 110" },
    { letter: "U", path: "M20 10 L20 80 Q20 110 50 110 Q80 110 80 80 L80 10" },
    { letter: "V", path: "M10 10 L50 110 L90 10" },
    { letter: "W", path: "M10 10 L30 110 L50 60 L70 110 L90 10" },
    { letter: "X", path: "M10 10 L90 110 M90 10 L10 110" },
    { letter: "Y", path: "M10 10 L50 60 L90 10 M50 60 L50 110" },
    { letter: "Z", path: "M10 10 L90 10 L10 110 L90 110" }
];

export const LOWERCASE_PATHS = [
    { letter: "a", path: "M60 60 Q30 60 30 90 Q30 110 55 110 Q80 110 80 90 L80 60 M80 110 L80 50" },
    { letter: "b", path: "M30 10 L30 110 Q30 110 60 110 Q80 110 80 90 Q80 70 60 70 Q30 70 30 70" },
    { letter: "c", path: "M80 70 Q65 55 45 55 Q25 55 25 80 Q25 110 45 110 Q65 110 80 95" },
    { letter: "d", path: "M80 10 L80 110 Q80 110 50 110 Q25 110 25 80 Q25 55 50 55 Q80 55 80 55" },
    { letter: "e", path: "M25 80 Q25 55 50 55 Q75 55 75 80 Q75 85 25 85 Q25 110 55 110 Q70 110 80 100" },
    { letter: "f", path: "M60 10 Q40 10 40 30 L40 110 M25 55 L60 55" },
    { letter: "g", path: "M80 60 Q55 55 45 70 Q30 90 45 110 Q55 125 80 115 L80 60" },
    { letter: "h", path: "M30 10 L30 110 M30 70 Q40 55 60 55 Q80 55 80 80 L80 110" },
    { letter: "i", path: "M50 55 L50 110 M50 40 L50 42" },
    { letter: "j", path: "M55 55 L55 115 Q55 130 40 130 M55 40 L55 42" },
    { letter: "k", path: "M30 10 L30 110 M75 55 L30 85 M50 70 L80 110" },
    { letter: "l", path: "M50 10 L50 110" },
    { letter: "m", path: "M20 110 L20 55 Q30 45 45 55 Q55 45 70 55 Q80 65 80 110" },
    { letter: "n", path: "M30 110 L30 55 Q45 45 65 55 Q80 65 80 110" },
    { letter: "o", path: "M50 55 Q25 55 25 85 Q25 110 50 110 Q75 110 75 85 Q75 55 50 55" },
    { letter: "p", path: "M30 55 L30 130 M30 55 Q50 45 65 55 Q80 65 80 85 Q80 110 55 110 Q30 110 30 110" },
    { letter: "q", path: "M80 55 L80 130 M80 55 Q60 45 45 55 Q30 65 30 85 Q30 110 55 110 Q80 110 80 110" },
    { letter: "r", path: "M30 110 L30 55 Q40 45 60 55" },
    { letter: "s", path: "M75 60 Q60 50 45 55 Q30 60 35 75 Q40 90 60 90 Q80 90 75 110 Q70 125 40 120" },
    { letter: "t", path: "M50 10 L50 100 Q50 110 65 110 M30 55 L70 55" },
    { letter: "u", path: "M30 55 L30 90 Q30 110 55 110 Q80 110 80 90 L80 55" },
    { letter: "v", path: "M30 55 L55 110 L80 55" },
    { letter: "w", path: "M20 55 L35 110 L50 75 L65 110 L80 55" },
    { letter: "x", path: "M30 55 L80 110 M80 55 L30 110" },
    { letter: "y", path: "M30 55 L55 110 M80 55 L55 130" },
    { letter: "z", path: "M30 55 L80 55 L30 110 L80 110" }
];

const ALPHABET_PATHS = [...UPPERCASE_PATHS, ...LOWERCASE_PATHS];

const getLastPoint = (d: string): { x: number, y: number } | null => {
    // Matches the last two numbers in the string, handling integers and decimals
    const matches = d.match(/([0-9.]+)[ ,]+([0-9.]+)\s*$/);
    if (matches && matches.length >= 3) {
        return { x: parseFloat(matches[1]), y: parseFloat(matches[2]) };
    }
    return null;
};

const GooeyLetter = ({ path, prevPath, delayIndex }: { path: string, prevPath?: string, delayIndex: number }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
    const numberOfCircles = 40;
    const radius = 8;

    // Determine start position
    let startCx = -20; // Default off-left closer to standard overlap
    let startCy = 90; // Default lower center

    if (prevPath) {
        const lastPt = getLastPoint(prevPath);
        if (lastPt) {
            // Coordinate transformation:
            // Previous SVG is 100 wide. 
            // We want start point in current SVG coords.
            // If prev letter ends at x=90, and these are side-by-side (gap 0), 
            // the new x relative to current is -10.
            startCx = lastPt.x - 100;
            startCy = lastPt.y;
        }
    } else {
        // First letter
        startCx = 50;
        startCy = 150;
    }

    useEffect(() => {
        const pathEl = pathRef.current;
        if (!pathEl) return;

        const length = pathEl.getTotalLength();
        const step = length / numberOfCircles;

        // Strictly sequential timing
        const duration = 0.8;
        const baseDelay = delayIndex * duration;

        circleRefs.current.forEach((el, i) => {
            if (!el) return;

            const point = pathEl.getPointAtLength(i * step);

            // Ensure start position is set
            el.setAttribute("cx", startCx.toString());
            el.setAttribute("cy", startCy.toString());
            // Ensure invisible at start
            el.setAttribute("opacity", "0");

            animate(
                el,
                {
                    cx: point.x,
                    cy: point.y,
                    opacity: 1
                },
                {
                    delay: baseDelay + (i * 0.015),
                    duration: duration,
                    ease: "circOut",
                }
            );
        });
    }, [path, delayIndex, startCx, startCy]);

    return (
        <div className="flex items-center justify-center w-14 h-24 -ml-5 first:ml-0">
            <svg width="100%" height="100%" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                <path
                    ref={pathRef}
                    d={path}
                    fill="none"
                    stroke="none"
                />

                <g style={{ filter: "url(#gooey-filter)" }}>
                    {[...Array(numberOfCircles)].map((_, i) => (
                        <circle
                            key={i}
                            r={radius}
                            cx={startCx}
                            cy={startCy}
                            opacity="0" // Initially invisible
                            fill="black"
                            ref={(el) => {
                                circleRefs.current[i] = el;
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default function Component8() {
    const [inputValue, setInputValue] = useState("");
    const [displayedLetters, setDisplayedLetters] = useState<string[]>([]);
    const [submissionId, setSubmissionId] = useState(0);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const letters = inputValue.split('').filter(char => /^[a-zA-Z]$/.test(char));
            setDisplayedLetters(letters);
            setSubmissionId(prev => prev + 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <main>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="gooey-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="filter" />
                    </filter>
                </defs>
            </svg>

            <div className="flex flex-col gap-8 p-8 items-center">
                <input
                    className="border-2 border-black/10 rounded-xl px-6 py-3 w-full max-w-md text-lg outline-none focus:border-black/30 transition-colors"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a word & hit Enter"
                />

                <div className="flex flex-wrap justify-center items-center">
                    {displayedLetters.map((char, index) => {
                        const pathObj = ALPHABET_PATHS.find(p => p.letter === char);

                        let prevPath = undefined;
                        if (index > 0) {
                            const prevChar = displayedLetters[index - 1];
                            const prevPathObj = ALPHABET_PATHS.find(p => p.letter === prevChar);
                            if (prevPathObj) prevPath = prevPathObj.path;
                        }

                        if (pathObj) {
                            return (
                                <GooeyLetter
                                    key={`${submissionId}-${index}-${char}`}
                                    path={pathObj.path}
                                    prevPath={prevPath}
                                    delayIndex={index}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </main>
    );
}