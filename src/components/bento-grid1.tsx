import Image from "next/image";

export function BentoGrid1() {
    return (
        <div className="grid grid-rows-3 gap-4 border border-neutral-800/60 shadow-lg rounded-lg p-4 w-[1200px] h-[700px]">
            <div className="row-span-2 gap-3 grid grid-cols-4">

                {/* first bento grid */}
                <div className="col-span-2 row-span-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">

                </div>

                <div className="col-span-1 row-span-1 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-300 dark:bg-neutral-800 "></div>
                <div className="col-span-1 row-span-1 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-300 dark:bg-neutral-800 "></div>

                <div className="group relative col-span-2 row-span-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-300 dark:bg-neutral-800 hover:bg-black/10 opacity-90 ">
                    <div className="col-span-2 row-span-2 border border-neutral-800 rounded-lg relative h-full bg-[#19191b] p-7 lg:p-6">
                        <Image src="/image.png" alt="Scenarios made easy with Taipy Studio." width={656} height={268} className="pointer-events-none absolute w-full left-0 bottom-0 " />
                        <p className="relative text-18 font-medium leading-snug text-neutral-200 lg:text-14 lg:font-normal mb-7">
                            <span className="text-white font-semibold">Scenarios made easy with Taipy Studio.</span> A powerful VS Code extension that unlocks a convenient graphical editor.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-12 rounded-t-full blur-2xl bg-orange-500 opacity-0 transition-opacity duration-200 group-hover:opacity-60">
                    </div>
                </div>

            </div>
            <div className="row-span-1 gap-3 grid grid-cols-4">
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-300 dark:bg-neutral-800 "></div>
                <div className="col-span-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-300 dark:bg-neutral-800 "></div>
            </div>
        </div>
    );
}