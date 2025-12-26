"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./component-6.module.scss";
import { animate } from "framer-motion";

const numbers = [
    "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
    "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
    "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
    "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
    "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7"
];

export default function Component6() {

    const [index, setIndex] = useState(0);
    const paths = useRef<(SVGPathElement | null)[]>([]);
    const circle = useRef<(SVGCircleElement | null)[]>([]);
    const numberOfCircles = 30;
    const radius = 20;

    useEffect(() => {
        const pathEl = paths.current[index];
        if (!pathEl) return;

        const length = pathEl.getTotalLength();
        const step = length / numberOfCircles;

        circle.current.forEach((el, i) => {
            if (!el) return;

            const point = pathEl.getPointAtLength(i * step);

            animate(
                el,
                { cx: point.x, cy: point.y },
                {
                    delay: i * 0.025,
                    ease: "easeOut",
                }
            );
        });
    }, [index]);

    return (
        <main className={styles.main}>
            {/* <div className="flex flex-col">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-neutral-800">
                        {numbers[i]}
                    </div>
                ))}
            </div> */}
            <div className="flex flex-col gap-4 mr-20">
                {numbers.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            color: index === i ? "red" : "black",
                        }}
                        className="
        relative pl-4 text-lg transition-colors
        hover:text-red-400
      "
                    >
                        {i + 1}
                    </button>
                ))}
            </div>



            <svg viewBox="0 0 256 256">

                <defs>
                    <filter id="filter">
                        <feGaussianBlur in="SourceAplha" stdDeviation="20" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15" result="filter" />
                    </filter>
                </defs>

                {
                    numbers.map((path, i) => {
                        return <path key={`p_${i}`} ref={(el) => {
                            paths.current[i] = el;
                        }} d={path} />
                    })
                }


                <g>
                    {[...Array(numberOfCircles)].map((_, i) => (
                        <circle
                            key={i}
                            r={radius}
                            cx={128}
                            cy={128}
                            fill="black"
                            ref={(el) => {
                                circle.current[i] = el;
                            }}
                        />
                    ))}
                </g>
            </svg>
        </main>
    );
}
