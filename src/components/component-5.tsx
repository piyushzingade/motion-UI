
export const Component5 = () => {
    return (
        <main
            style={{
                boxShadow: "15px 15px 30px rgba(0,0,0,0.4), 20px 20px 50px rgba(0,0,0,0.3)",
                fontFamily: 'TypoDigit'
            }}
            className="w-fit bg-[#938c8c] relative flex flex-col p-4 gap-6">
            <div
                className="absolute inset-0 opacity-25 pointer-events-none z-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Header Section */}
            <div className="w-full h-28 bg-[#e4e0d7] z-20 flex shadow-md relative">
                {/* Screws */}
                <div className="absolute top-1 left-1 size-3 rounded-full bg-[#e4e0d7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_0px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute bottom-1 left-1 size-3 rounded-full bg-[#e4e0d7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_0px_rgba(255,255,255,0.8)]"></div>

                {/* Left Panel */}
                <div className="flex-1 p-4 flex flex-col justify-center relative border-r border-gray-400/50">
                    <div className="absolute top-1 right-1 size-3 rounded-full bg-[#e4e0d7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_0px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute bottom-1 right-1 size-3 rounded-full bg-[#e4e0d7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_0px_rgba(255,255,255,0.8)]"></div>

                    <h1 className="text-4xl font-bold text-[#1a1a1a] tracking-tighter leading-none">C.A.L.</h1>
                    <p className="text-[#ff4400] text-sm font-medium tracking-wider mt-1">デンタク</p>
                    <p className="text-[0.6rem] text-gray-500 font-bold tracking-normal mt-auto uppercase">8bit calculator</p>
                </div>

                {/* Speaker Grill */}
                <div className="w-28 h-full relative border-l border-black/20 overflow-hidden"
                    style={{
                        backgroundColor: '#949494',
                        backgroundImage: 'radial-gradient(circle, #1a1a1a 2.5px, transparent 3px)',
                        backgroundSize: '7px 7px',
                    }}>
                    {/* Dark inside effect (vignette) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
                </div>
            </div>

            {/* Display Section */}
            <div className="w-full h-24 bg-[#1a1a1a] z-20 rounded-sm border-y-4 border-x-2 border-[#2a2a2a] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-end px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none"></div>
                <span className="text-white text-6xl tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">2345678</span>
            </div>

            {/* Keypad Grid */}
            <div className="grid grid-cols-4 gap-x-4 gap-y-10 z-20 pb-2">
                {/* Row 1 */}
                <NumberButton text={"C"} center={false} backgroundColor="#aea6a6" textColor="white" indicator={{ type: 'dot', color: 'gray' }} />
                <NumberButton text={"+/-"} center={false} backgroundColor="#aea6a6" textColor="white" indicator={{ type: 'dot', color: 'gray' }} />
                <NumberButton text={"%"} center={false} backgroundColor="#aea6a6" textColor="white" indicator={{ type: 'dot', color: 'gray' }} />
                <NumberButton text={"÷"} center={true} backgroundColor="#cfcbc8" textColor="black" />

                {/* Row 2 */}
                <NumberButton text={"7"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'LPF', color: 'gray' }} />
                <NumberButton text={"8"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'HPF', color: 'red' }} />
                <NumberButton text={"9"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: '->FX', color: 'gray' }} />
                <NumberButton text={"-"} center={true} backgroundColor="#cfcbc8" textColor="black" indicator={{ type: 'double-dot' }} />

                {/* Row 3 */}
                <NumberButton text={"4"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'ATK', color: 'gray' }} />
                <NumberButton text={"5"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'REL', color: 'gray' }} />
                <NumberButton text={"6"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'PAN', color: 'gray' }} />
                <NumberButton text={"+"} center={true} backgroundColor="#cfcbc8" textColor="black" />

                {/* Row 4 */}
                <NumberButton text={"1"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'TUNE', color: 'red' }} />
                <NumberButton text={"2"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'VEL', color: 'red' }} />
                <NumberButton text={"3"} center={false} backgroundColor="#292928" textColor="white" indicator={{ type: 'text', text: 'MOD', color: 'gray' }} />

                {/* ENTER Button - Spans 2 rows */}
                <NumberButton
                    text={"ENTER"}
                    center={true}
                    // backgroundColor="#ff2d02"
                    textColor="white"
                    className="row-span-2"
                    textClassName="text-white text-xs font-normal pt-1 justify-center items-start pl-0 bg-gradient-to-br from-[#ff2d02] to-[#c80c00]"
                    height="h-42"
                />

                {/* Row 5 */}
                <NumberButton text={"0"} center={false} backgroundColor="#292928" textColor="white" />
                <NumberButton text={","} center={false} backgroundColor="#292928" textColor="white" />
                <NumberButton text={"."} center={false} backgroundColor="#292928" textColor="white" />
            </div>
        </main >
    )
}

// neutral = #292928
// white  = #cfcbc8
// gray = #aea6a6
// orange = #ff2d02

interface IndicatorProps {
    type: 'dot' | 'text' | 'double-dot';
    text?: string;
    color?: 'red' | 'gray';
}

interface NumberButtonProps {
    text: string;
    center: boolean;
    backgroundColor?: string;
    textColor: string;
    className?: string;
    textClassName?: string;
    height?: string;
    indicator?: IndicatorProps;
}

const NumberButton = ({ text, center, backgroundColor, textColor, className, textClassName, height = "h-16", indicator }: NumberButtonProps) => {
    return (
        <div
            className={`bg-black w-16 ${height} pt-px pl-px pr-[2px] pb-px ${className || ""} cursor-pointer relative`}>
            <div
                style={{
                    backgroundColor: backgroundColor, color: textColor
                }}
                className={`w-full h-full rounded-md flex transition-all duration-100 hover:brightness-100 hover:translate-y-[1px] hover:translate-x-[0.5px] shadow-[inset_1px_1px_0px_rgba(233,233,233,0.4),inset_-1px_-1px_0px_rgba(22,22,22,0.4),7px_7px_15px_rgba(0,0,0,0.4),10px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[inset_1px_1px_0px_rgba(233,233,233,0.4),inset_-1px_-1px_0px_rgba(22,22,22,0.4)] ${center ? "text-center items-center justify-center text-2xl pb-1" : "pl-2 pt-1 items-start justify-start text-lg font-bold"} ${textClassName || ""}`}>
                {text}
            </div>

            {/* Indicator */}
            {indicator && (
                <div className="absolute -bottom-7 left-0 w-full flex items-center justify-start pl-1 gap-2">
                    {indicator.type === 'dot' && (
                        <div className={`size-3 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] ${indicator.color === 'red' ? 'bg-[#ff2d02]' : 'bg-[#444]'}`}></div>
                    )}
                    {indicator.type === 'double-dot' && (
                        <div className="flex gap-4">
                            <div className="size-3 rounded-full bg-[#444] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]"></div>
                            <div className="size-3 rounded-full bg-[#ff2d02] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]"></div>
                        </div>
                    )}
                    {indicator.type === 'text' && (
                        <>
                            <div className={`size-3 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] ${indicator.color === 'red' ? 'bg-[#ff2d02]' : 'bg-[#444]'}`}></div>
                            <span className="text-sm font-bold text-[#333] tracking-wider uppercase">{indicator.text}</span>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}