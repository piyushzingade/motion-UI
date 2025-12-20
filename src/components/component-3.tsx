export const Component3 = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="relative h-[200px] w-[150px]">
                <span
                    style={{
                        clipPath: `inset(0.5px round 8px 0)`
                    }}
                    className="absolute h-[17px] w-[67px] top-0 left-0 bg-neutral-700 z-10 flex items-center justify-center text-[10px] text-white">
                    Fruits
                </span>
                <div
                    style={{
                        // backgroundImage: "url('/image3.jpg')",
                        // backgroundColor: "rgba(0,0,0,0.5)",
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        clipPath: `path("M 10 20 L 60 20 Q 70 20 70 10 Q 70 0 80 0 L 140 0 Q 150 0 150 10 L 150 190 Q 150 200 140 200 L 10 200 Q 0 200 0 190 L 0 30 Q 0 20 10 20 Z")`,
                    }}
                    className="absolute inset-0 bg-neutral-800 overflow-hidden"
                />
            </div>
        </div>

    );
};
