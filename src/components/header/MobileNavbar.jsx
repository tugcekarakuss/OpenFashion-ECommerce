import { useState } from "react"
import { navbarIcons, categories } from "../../data/navbar"

import Divider from "../common/Divider"
import Search from "./Search"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isEntering, setIsEntering] = useState(false)
    const [activeCategory, setActiveCategory] = useState("women")
    const [openItem, setOpenItem] = useState(null)

    /* search */
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const activeCategoryData = categories.find(
        category => category.id === activeCategory
    )
    const openMenu = () => {
        setIsOpen(true)
        setIsClosing(false)

        requestAnimationFrame(() => {
            setIsEntering(true)
        })
    }

    const closeMenu = () => {
        setIsClosing(true)
        setIsEntering(false)

        setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, 300)
    }

    const toggleDropdown = (itemId) => {
        setOpenItem(
            openItem === itemId ? null : itemId
        )
    }

    return (
        <div className="flex items-center justify-between lg:hidden">
            <button onClick={openMenu}>
                <img
                    src={navbarIcons.menu}
                    alt="menu icon"
                />
            </button>

            <a href="">
                <img
                    src={navbarIcons.logo}
                    alt="logo icon"
                />
            </a>

            <div className="flex items-center justify-center gap-2.5">
                <button onClick={() => setIsSearchOpen(true)}>
                    <img
                        src={navbarIcons.search}
                        alt="search icon"
                    />
                </button>

                <button>
                    <img
                        src={navbarIcons.shoppingBag}
                        alt="shopping icon"
                    />
                </button>
                <Search
                    isOpen={isSearchOpen}
                    onClose={() => setIsSearchOpen(false)}
                />
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div
                    className={`
                        fixed inset-0 z-40
                        bg-menu text-text-body
                        overflow-y-auto
                        transition-transform duration-300 ease-in-out
                        ${isEntering && !isClosing
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }
                    `}>

                    {/* Close button */}
                    <button
                        className="p-5 "
                        onClick={closeMenu}
                    >
                        <img
                            src={navbarIcons.close}
                            alt="close menu"
                        />
                    </button>

                    {/* Categories */}
                    <div className="flex items-center justify-between border-b-2 border-placeholder/30 px-5 pt-1">
                        {categories.map(category => (

                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id)
                                    setOpenItem(null)
                                }}
                                className={`relative pb-4 transition-colors duration-200
                                    ${activeCategory === category.id
                                        ? "text-text-body"
                                        : "text-text-body/70"
                                    } `}>

                                <span>
                                    {category.label}
                                </span>

                                {activeCategory === category.id && (
                                    <>
                                        <span className="absolute bottom-0 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-secondery" />
                                        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Category items */}
                    <div className="px-5 py-6">
                        {activeCategoryData.items.map(item => (
                            <div key={item.id}>
                                {/* Item with dropdown */}
                                {item.children ? (

                                    <button
                                        onClick={() => toggleDropdown(item.id)}
                                        className="flex w-full items-center justify-between py-3">

                                        <span>{item.label} </span>
                                        <img
                                            src={
                                                openItem === item.id
                                                    ? navbarIcons.up
                                                    : navbarIcons.down
                                            }
                                            alt={
                                                openItem === item.id
                                                    ? "close submenu"
                                                    : "open submenu"
                                            }
                                        />
                                    </button>
                                ) : (

                                    /* Normal item */
                                    <a
                                        href={item.href}
                                        className="block py-3"
                                    >
                                        {item.label}
                                    </a>
                                )}

                                {/* Dropdown */}
                                {item.children && (
                                    <div
                                        className={`
                                            pl-5
                                            overflow-hidden
                                            transition-all
                                            duration-300
                                            ease-in-out
                                            ${openItem === item.id
                                                ? "max-h-125 opacity-100"
                                                : "max-h-0 opacity-0"
                                            }`} >

                                        {item.children.map((child, index) => (
                                            <a
                                                key={child.id}
                                                href={child.href}
                                                className={`
                                                    block py-2
                                                    transition-all
                                                    duration-300
                                                    ease-out
                                                    ${openItem === item.id
                                                        ? "translate-x-0 opacity-100"
                                                        : "-translate-x-3 opacity-0"
                                                    }
                                                `}
                                                style={{
                                                    transitionDelay:
                                                        openItem === item.id
                                                            ? `${index * 40}ms`
                                                            : "0ms"
                                                }}
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Blog */}
                    <div className="px-5">

                        <a href=""
                            className="flex items-center justify-between py-4 text-text-body/80 transition-colors duration-200 hover:text-text-body">
                            <span>Blog</span>
                            <img src={navbarIcons.forward} />
                        </a>
                    </div>
                    {/* Contact */}
                    <div className="mt-5 flex flex-col gap-5 px-5 text-text-body/70">

                        <div className="flex gap-4">
                            <img
                                src={navbarIcons.phone}
                                alt="phone icon"
                            />

                            <span>
                                (786) 713-8616
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <img
                                src={navbarIcons.location}
                                alt="location icon"
                            />
                            <span>
                                Store locator
                            </span>
                        </div>
                    </div>

                    <Divider />

                    {/* Social media */}
                    <div className="flex items-center justify-center gap-9 py-10">
                        <img
                            src={navbarIcons.twitter}
                            alt="twitter icon"
                        />
                        <img
                            src={navbarIcons.instagram}
                            alt="instagram icon"
                        />
                        <img
                            src={navbarIcons.youTube}
                            alt="youtube icon"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}