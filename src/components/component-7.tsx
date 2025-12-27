

export default function Component7() {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-[#d1d5db]">
            <Iphonelayout />
        </div>
    )
}


const Iphonelayout = () => {
    return (

        <div className="rounded-[65px] border-px bg-gray-100 border-gray-100 p-1 shadow-[inset_2px_0_3px_rgba(0,0,0,0.7),inset_-2px_0_3px_rgba(0,0,0,0.7),inset_0_-2px_3px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(0,0,0,0.05)]">
            <div className="relative w-[390px] border-8 border-black/90 h-[800px] bg-white rounded-[60px] overflow-hidden">
                <StatusBar />
            </div>
        </div>
    )
}


const StatusBar = () => {
    return (
        <div className="absolute top-0 left-0 right-0 h-[59px] flex items-center justify-between px-[26px] z-50 pointer-events-none select-none">
            {/* Time */}
            <div className="flex-1 flex justify-start items-center">
                <span className="text-black font-normal text-[14px] tracking-wide font-sans pl-2">9:41</span>
            </div>

            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[11px] w-[126px] h-[33px] bg-black rounded-[20px] shadow-sm flex items-center justify-end pr-2 overflow-hidden z-20">
                {/* Internal components of Dynamic Island */}
                <div className="relative w-full h-full flex items-center justify-end px-1.5">
                    {/* Orange Dot (Microphone Indicator) */}
                    <div className="w-[5px] h-[5px] bg-[#ffb300] rounded-full mr-2.5"></div>

                    {/* Camera Lens */}
                    <div className="w-[12px] h-[12px] rounded-full bg-[#080808] border-[1.5px] border-[#222] relative flex items-center justify-center overflow-hidden box-border">
                        {/* Bluish reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1a2b4b] to-[#0d1a33] opacity-80"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#0f1526] shadow-[inset_0_0_4px_rgba(50,80,150,0.8)] z-10"></div>
                        <div className="absolute top-1 right-1 w-[2.5px] h-[2.5px] bg-blue-500/20 blur-[2px] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Connectivity Icons */}
            <div className="flex-1 flex justify-end items-center space-x-1.5">
                {/* Signal Bars */}
                <SignalIcon />

                {/* Wifi Icon */}
                <WifiIcon />

                {/* Battery */}
                <BatteryIcon />
            </div>
        </div>
    )
}

const WifiIcon = () => (
    <svg width="20" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" className="text-black fill-current">
        <path d="M512 192c-163 0-326 67.2-443 176.6-6.6 6-6.8 16.2-0.6 22.8l53.4 55.8c6.2 6.6 16.6 6.8 23.2 0.6 46.6-43.2 99.8-77.6 158.6-102 66-27.6 136.2-41.4 208.6-41.4s142.6 14 208.6 41.4c58.8 24.6 112 58.8 158.6 102 6.6 6.2 17 6 23.2-0.6l53.4-55.8c6.2-6.4 6-16.6-0.6-22.8C838 259.2 675 192 512 192z" />
        <path d="M226.4 555l57.2 56.6c6.2 6 16 6.4 22.4 0.6 56.6-50.2 129.2-77.8 205.8-77.8s149.2 27.4 205.8 77.8c6.4 5.8 16.2 5.4 22.4-0.6l57.2-56.6c6.6-6.6 6.4-17.2-0.6-23.4-75-67.8-175.2-109.2-285-109.2s-210 41.4-285 109.2c-6.6 6.2-6.8 16.8-0.2 23.4zM512 648.4c-46.8 0-89.2 19.6-118.8 51-6 6.4-5.8 16.2 0.4 22.4l106.8 105.4c6.4 6.4 16.8 6.4 23.2 0l106.8-105.4c6.2-6.2 6.4-16 0.4-22.4-29.6-31.2-72-51-118.8-51z" />
    </svg>
)

const SignalIcon = () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="8" width="3" height="4" rx="1" fill="black" />
        <rect x="5" y="6" width="3" height="6" rx="1" fill="black" />
        <rect x="10" y="4" width="3" height="8" rx="1" fill="black" />
        <rect x="15" y="1" width="3" height="11" rx="1" fill="black" />
    </svg>
)

const BatteryIcon = () => (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
        <rect x="0.5" y="0.5" width="24" height="11" rx="3" stroke="black" strokeOpacity="0.3" />
        <rect x="2.5" y="2.5" width="20" height="7" rx="1.5" fill="black" />
        <path d="M25 4C25 3.44772 25.4477 3 26 3V9C25.4477 9 25 8.55228 25 8V4Z" fill="black" fillOpacity="0.3" />
    </svg>
)