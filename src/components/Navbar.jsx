import { useState } from "react"
import { navbarIcons, categories } from "../data/navbar"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState("women")
    const [openItem, setOpenItem] = useState(null)
    const activeCategoryData = categories.find(
        category => category.id === activeCategory
    )
    return (
        <nav className="max-w-7xl mx-auto py-10 sticky top-0 px-3 font-tenor-sans">
            {/* mobile menu */}
            <div className="flex items-center justify-between ">
                <button onClick={() => setIsOpen(true)}>
                    <img src={navbarIcons.menu} alt="menu icon" />
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

            {/* mobile hamburger menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white text-text-body overflow-y-auto">
                    <button className="px-3 py-7 mt-5" onClick={() => setIsOpen(false)}>
                        <img src={navbarIcons.close} alt="menu icon" />
                    </button>
                    <div className="flex items-center justify-between border-b-2 border-placeholder/30 px-5 pt-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id)
                                    setOpenItem(null)
                                }}
                                className={`relative pb-4 ${activeCategory === category.id
                                    ? "text-text-body"
                                    : "text-text-body/70"
                                    }`}>

                                <span>{category.label}</span>
                                {activeCategory === category.id && (
                                    <>
                                        <span className="absolute bottom-0 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-secondery" />
                                        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="px-5 py-6">
                        {activeCategoryData.items.map(item => (
                            <div key={item.id}>
                                {item.children ? (
                                    <button
                                        onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                                        className="flex w-full items-center justify-between py-3">
                                        <span>{item.label}</span>
                                        <img src={openItem === item.id ? navbarIcons.up : navbarIcons.down}
                                            alt={openItem === item.id ? "close submenu" : "open submenu"} 
                                        />
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="block py-3"
                                    >
                                        {item.label}
                                    </a>
                                )}

                                {item.children && openItem === item.id && (
                                    <div className="pl-5">
                                        {item.children.map(child => (
                                            <a
                                                key={child.id}
                                                href={child.href}
                                                className="block py-2"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>

                    <div className=" mt-5 flex flex-col gap-5 px-5 text-text-body/70">
                        <div className="flex gap-4">
                            <img src={navbarIcons.phone} alt="phone icon" />
                            <span>(786) 713-8616</span>
                        </div>
                        <div className="flex gap-4">
                            <img src={navbarIcons.location} alt="location icon" />
                            <span>Store locator</span>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="mt-8 flex justify-center">
                        <div className="relative w-32 border-t border-placeholder">
                            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-placeholder bg-white" />
                        </div>
                    </div>

                    <div className="flex py-10 items-center justify-center gap-9">
                        <img src={navbarIcons.twitter} alt="twitter icon" />
                        <img src={navbarIcons.instagram} alt="instagram icon" />
                        <img src={navbarIcons.youTube} alt="youtube icon" />
                    </div>

                </div>

            )}
        </nav>
    )
}
