import { useState } from "react"
import { navbarIcons, menuItems, categories } from "../data/navbar"

export default function Navbar() {
    const [IsOpen, setIsOpen] = useState(false)
    return (
        <nav className="max-w-7xl mx-auto py-10 px-3">
            {/* mobile menu */}
            <div className="flex items-center justify-between ">
                <button className="z-50" onClick={() => setIsOpen(val => !val)}>
                    <img src={IsOpen ? navbarIcons.close : navbarIcons.menu} alt="menu icon" />
                </button>

                <a href="">
                    <img src={navbarIcons.logo} alt="logo icon" />
                </a>
                <div className="flex items-center justify-center gap-2.5">
                    <button>
                        <img src={navbarIcons.search} alt="search icon" />
                    </button>
                    <button>
                        <img src={navbarIcons.shoppingBag} alt="shopping icon" />
                    </button>

                </div>
                
            </div>


        </nav>
    )
}
