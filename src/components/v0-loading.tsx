import { V0svg } from "./svg/v0";

export default function V0Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-neutral-950">
            <div className="relative">

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute animate-spin" style={{ animationDuration: '12s' }}>
                        <div className="border border-neutral-800 rounded-full p-[184px] relative">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-neutral-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Circle 2 with dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                        <div className="border border-neutral-800 rounded-full p-[144px] relative">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-neutral-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Circle 3 with dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute animate-spin" style={{ animationDuration: '8.5s' }}>
                        <div className="border border-neutral-800 rounded-full p-[104px] relative">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-neutral-600 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Circle 4 with dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}>
                        <div className="border border-neutral-800 rounded-full p-[64px] relative">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-neutral-700 rounded-full"></div>
                        </div>
                    </div>
                </div>



                <V0svg />
            </div>
        </div>
    );
}