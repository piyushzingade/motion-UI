
import React from 'react';

interface CardProps {
    image: string;
    cardNo: string;
    holder: string;
    exp: string;
    cvv: string;
    index: number;
    rotation: number;
    yOffset: number;
    xOffset: number;
    zIndex: number;
}

export const Card = ({
    image,
    cardNo,
    holder,
    exp,
    cvv,
    rotation,
    yOffset,
    xOffset,
    zIndex,
}: CardProps) => {
    return (
        <div
            className="absolute bottom-0 w-[240px] sm:w-[280px] h-[340px] sm:h-[400px] rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 ease-out"
            style={{
                transform: `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                zIndex: zIndex,
            }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-50" />

            {/* Card Details Overlay */}
            <div className="absolute inset-0 p-7 flex flex-col justify-between text-white select-none">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="text-[13px] font-bold tracking-tight opacity-90 drop-shadow-md">
                        NEXA BANK<span className="align-super text-[7px] font-medium ml-0.5">®</span>
                    </div>
                    {/* NFC/Contactless Icon Mockup */}
                    <div className="opacity-60">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 8a10 10 0 0 1 20 0" />
                            <path d="M5 11a7 7 0 0 1 14 0" />
                            <path d="M8 14a4 4 0 0 1 8 0" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Details Section */}
                <div className="flex flex-col gap-5">
                    {/* Card Number */}
                    <div className="space-y-1">
                        <p className="text-[9px] text-white/40 uppercase tracking-[2px] font-medium">Card No.</p>
                        <p className="text-[17px] font-mono tracking-widest text-white/95 drop-shadow-lg">
                            {cardNo}
                        </p>
                    </div>

                    {/* Card Holder */}
                    <div className="space-y-1">
                        <p className="text-[9px] text-white/40 uppercase tracking-[2px] font-medium">Card Holder</p>
                        <p className="text-[13px] font-semibold uppercase tracking-wider text-white drop-shadow-lg">
                            {holder}
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex gap-10">
                        <div className="space-y-1">
                            <p className="text-[9px] text-white/40 uppercase tracking-[2px] font-medium">Exp Date</p>
                            <p className="text-[13px] font-medium text-white/90 tabular-nums">
                                {exp}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] text-white/40 uppercase tracking-[2px] font-medium">CVV</p>
                            <p className="text-[13px] font-medium text-white/90 tabular-nums">
                                {cvv}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const cardData = [
    {
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=800",
        cardNo: "3456 **** **** 3157",
        holder: "JAIME LANNISTER",
        exp: "11/25",
        cvv: "543",
        rotation: -15,
        yOffset: 60,
        xOffset: -400,
        zIndex: 10,
    },
    {
        image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=600&h=800",
        cardNo: "4784 **** **** 4846",
        holder: "TYRION LANNISTER",
        exp: "10/26",
        cvv: "377",
        rotation: -7,
        yOffset: 25,
        xOffset: -200,
        zIndex: 20,
    },
    {
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600&h=800",
        cardNo: "3456 **** **** 3157",
        holder: "JON SNOW",
        exp: "10/27",
        cvv: "543",
        rotation: 0,
        yOffset: 0,
        xOffset: 0,
        zIndex: 30,
    },
    {
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600&h=800",
        cardNo: "6456 **** **** 9355",
        holder: "ARYA STARK",
        exp: "12/30",
        cvv: "843",
        rotation: 7,
        yOffset: 25,
        xOffset: 200,
        zIndex: 20,
    },
    {
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600&h=800",
        cardNo: "2646 **** **** 5585",
        holder: "DAENERYS TARGARYEN",
        exp: "07/29",
        cvv: "259",
        rotation: 15,
        yOffset: 60,
        xOffset: 400,
        zIndex: 10,
    },
];

export const CardFan = () => {
    return (
        <div className="relative mt-auto w-full h-[450px] flex justify-center items-end overflow-visible">
            {/* Cards container with specific perspective/transform scaling */}
            <div className="relative w-full max-w-[1400px] flex justify-center items-end pb-0 origin-bottom scale-90 md:scale-100 lg:scale-110 transition-transform duration-700">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        {...card}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
