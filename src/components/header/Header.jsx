import Navbar from "./Navbar"

import mobileHero from "../../assets/images/home/header-mobile.jpg"
import desktopHero from "../../assets/images/home/hero-desktop.jpg"
export default function Header() {
  return (
     <header className="relative min-h-dvh overflow-hidden">
            {/* Hero image */}
            <picture className="absolute inset-0 z-0">
                <source
                    media="(min-width: 768px)"
                    srcSet={desktopHero}
                />

                <img
                    src={mobileHero}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </picture>

            <div className="absolute inset-0 z-10 bg-black/10" />

            <Navbar />

            {/* Hero content */}
            <div className="relative z-20 flex min-h-dvh flex-col items-start justify-center px-5">

                {/* Title */}
                <div className="flex flex-col items-start font-bodoni-moda italic uppercase text-4xl leading-9 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                    <h1 className="relative left-5">Luxury</h1>
                    <h1 className="relative left-10">Fashion</h1>
                    <h1 className="relative left-9 whitespace-nowrap">& Accessories</h1>
                </div>

                {/* CTA */}
                <a
                    href="#collection"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex h-12 w-64 items-center justify-center rounded-full  border  border-white/20                         bg-black/40 backdrop-blur-md text-sm tracking-[0.15em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-black/55 hover:border-white/30">
                    EXPLORE COLLECTION
                </a>
            </div>
        </header>
  )
}
