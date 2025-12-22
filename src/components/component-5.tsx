
export const Component5 = () => {
    return (
        <div
            style={{
                boxShadow: "15px 15px 30px rgba(0,0,0,0.4), 20px 20px 50px rgba(0,0,0,0.3)"
            }}
            className="w-fit bg-[#938c8c] relative grid grid-cols-4 py-6 px-4 gap-x-4 gap-y-6 ">
            <div
                className="absolute inset-0 opacity-25 pointer-events-none z-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Row 1 */}
            <NumberButton text={"C"} center={false} backgroundColor="#aea6a6" textColor="white" />
            <NumberButton text={"+/-"} center={false} backgroundColor="#aea6a6" textColor="white" />
            <NumberButton text={"%"} center={false} backgroundColor="#aea6a6" textColor="white" />
            <NumberButton text={"÷"} center={true} backgroundColor="#cfcbc8" textColor="black" />

            {/* Row 2 */}
            <NumberButton text={"7"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"8"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"9"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"-"} center={true} backgroundColor="#cfcbc8" textColor="black" />

            {/* Row 3 */}
            <NumberButton text={"4"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"5"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"6"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"+"} center={true} backgroundColor="#cfcbc8" textColor="black" />

            {/* Row 4 */}
            <NumberButton text={"1"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"2"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"3"} center={false} backgroundColor="#292928" textColor="white" />

            {/* ENTER Button - Spans 2 rows */}
            <NumberButton
                text={"ENTER"}
                center={false}
                backgroundColor="#ff2d02"
                textColor="white"
                className="row-span-2"
                textClassName="text-white text-xs font-normal pt-1 justify-center items-start pl-0"
                height="h-40"
            />

            {/* Row 5 */}
            <NumberButton text={"0"} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={","} center={false} backgroundColor="#292928" textColor="white" />
            <NumberButton text={"."} center={false} backgroundColor="#292928" textColor="white" />
        </div>
    )
}

// neutral = #292928
// white  = #cfcbc8
// gray = #aea6a6
// orange = #ff2d02

interface NumberButtonProps {
    text: string;
    center: boolean;
    backgroundColor: string;
    textColor: string;
    className?: string;
    textClassName?: string;
    height?: string;
}

const NumberButton = ({ text, center, backgroundColor, textColor, className, textClassName, height = "h-16" }: NumberButtonProps) => {
    return (
        <div
            className={`bg-black w-16 ${height} pt-px pl-px pr-[2px] pb-px ${className || ""} cursor-pointer`}>
            <div
                style={{
                    backgroundColor: backgroundColor, color: textColor,
                    boxShadow: "inset 1px 1px 0px rgba(233,233,233,0.4),inset -1px -1px 0px rgba(22,22,22,0.4), 9px 9px 10px rgba(0,0,0,0.5)"
                }}
                className={`w-full h-full rounded-md flex transition-all duration-100 hover:brightness-110 hover:scale-[0.98] hover:translate-y-[1px] ${center ? "text-center items-center justify-center text-2xl pb-1" : "pl-3 pt-2 items-start justify-start text-lg font-bold"} ${textClassName || ""}`}>
                {text}
            </div>
        </div>
    )
}