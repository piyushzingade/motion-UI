"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface NavLink {
    label: string;
    href: string;
}

interface HeroButton {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    icon?: React.ReactNode;
}

const NAV_LINKS: NavLink[] = [
    { label: "Courses", href: "#courses" },
];

const HERO_CONTENT = {
    tagline: "Master the basics of baking",
    titleLine1: "The road to the",
    titleLine2: "perfect loaf",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
    pricing: "Starting at $9.99/month",
    logoUrl: "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg",
    backgroundUrl:
        "https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/3/background.png",
    brandName: "BakerStreet",
};

const MenuIcon = ({ className }: { className?: string }) => (
    <svg
        className={cn("w-6 h-6", className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
    <svg
        className={cn("w-6 h-6", className)}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
        />
    </svg>
);


const buttonBaseStyles = cn(
    "inline-flex items-center justify-center",
    "px-5 py-2 font-sans text-base font-semibold",
    "transition-all duration-200 rounded-full",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "focus:ring-primary focus:ring-offset-secondary"
);

const buttonVariants = {
    primary: cn(
        buttonBaseStyles,
        "bg-white text-black border-2 border-transparent",
        "hover:bg-opacity-90 sm:text-lg sm:leading-8"
    ),
    secondary: cn(
        buttonBaseStyles,
        "bg-transparent text-white border-2 border-primary",
        "hover:bg-white hover:text-black sm:text-lg sm:leading-8"
    ),
};


const MobileMenuButton = () => (
    <div className="md:hidden">
        <button
            type="button"
            className={cn(
                "p-2 -m-2 rounded-full text-white",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                "focus:ring-primary focus:ring-offset-secondary"
            )}
            aria-label="Open menu"
        >
            <MenuIcon />
        </button>
    </div>
);

const DesktopNav = ({ links }: { links: NavLink[] }) => (
    <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
        {links.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "font-sans text-base font-normal text-white",
                    "transition-all duration-200 rounded",
                    "focus:outline-none focus:ring-2 focus:ring-offset-1",
                    "focus:ring-primary focus:ring-offset-secondary",
                    "hover:text-white/80"
                )}
            >
                {link.label}
            </Link>
        ))}
        <Link
            href="#signup"
            className={cn(
                "inline-flex items-center justify-center",
                "px-5 py-2 font-sans text-base font-normal leading-7",
                "transition-all duration-200 rounded-full",
                "text-white border-2 border-primary",
                "hover:bg-white hover:text-black",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                "focus:ring-primary focus:ring-offset-secondary"
            )}
        >
            Sign Up
        </Link>
    </div>
);

/** Header with Navigation */
const Header = () => (
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex flex-shrink-0">
                    <Link
                        href="/"
                        title={HERO_CONTENT.brandName}
                        className={cn(
                            "inline-flex rounded-md",
                            "focus:outline-none focus:ring-2 focus:ring-offset-4",
                            "focus:ring-offset-secondary focus:ring-primary"
                        )}
                    >
                        <Image
                            src={HERO_CONTENT.logoUrl}
                            alt={HERO_CONTENT.brandName}
                            width={120}
                            height={32}
                            className="w-auto h-8"
                            priority
                        />
                    </Link>
                </div>

                <MobileMenuButton />
                <DesktopNav links={NAV_LINKS} />
            </nav>
        </div>
    </header>
);

/** Background Image Layer */
const BackgroundImage = () => (
    <div className="absolute inset-0 overflow-hidden">
        <Image
            src={HERO_CONTENT.backgroundUrl}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
    </div>
);

/** Hero Action Buttons */
const HeroButtons = ({ buttons }: { buttons: HeroButton[] }) => (
    <div className="flex flex-wrap items-center gap-3 mt-5 sm:gap-4">
        {buttons.map((button) => (
            <Link
                key={button.label}
                href={button.href}
                className={buttonVariants[button.variant]}
                role="button"
            >
                {button.icon && <span className="mr-2">{button.icon}</span>}
                {button.label}
            </Link>
        ))}
    </div>
);

/** Hero Content Section */
const HeroContent = () => {
    const heroButtons: HeroButton[] = [
        {
            label: "Get started",
            href: "#get-started",
            variant: "primary",
        },
        {
            label: "Watch trailer",
            href: "#trailer",
            variant: "secondary",
            icon: <PlayIcon />,
        },
    ];

    return (
        <div className="relative z-10">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="w-full lg:w-2/3 xl:w-1/2">
                    {/* Tagline */}
                    <span className="font-sans text-base font-normal tracking-tight text-white/70">
                        {HERO_CONTENT.tagline}
                    </span>

                    {/* Main Title */}
                    <h1 className="mt-6 tracking-tighter text-white">
                        <span className="block font-sans font-normal text-5xl sm:text-6xl lg:text-7xl">
                            {HERO_CONTENT.titleLine1}
                        </span>
                        <span className="block font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl mt-2">
                            {HERO_CONTENT.titleLine2}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 sm:mt-12 font-sans text-base font-normal leading-7 text-white/70 max-w-lg">
                        {HERO_CONTENT.description}
                    </p>

                    {/* Pricing */}
                    <p className="mt-6 sm:mt-8 font-sans text-xl font-normal text-white">
                        {HERO_CONTENT.pricing}
                    </p>

                    {/* CTA Buttons */}
                    <HeroButtons buttons={heroButtons} />
                </div>
            </div>
        </div>
    );
};


export function Hero4() {
    return (
        <section
            className={cn(
                "relative bg-black min-h-screen",
                "pt-48 pb-12 xl:pt-60",
                "sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56"
            )}
            aria-labelledby="hero-title"
        >
            {/* Accessible title for screen readers */}
            <h2 id="hero-title" className="sr-only">
                {HERO_CONTENT.brandName} - {HERO_CONTENT.tagline}
            </h2>

            <Header />
            <BackgroundImage />
            <HeroContent />
        </section>
    );
}

export default Hero4;
