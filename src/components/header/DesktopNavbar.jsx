import { useState } from "react"

import { navbarIcons, categories } from "../../data/navbar"

import Search from "./Search"

export default function DesktopNavbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <>
            <div className="hidden max-w-7xl mx-auto items-center justify-between lg:flex">

                {/* Logo */}
                <a href="/">
                    <img
                        src={navbarIcons.logo}
                        alt="Logo"
                    />
                </a>

                {/* Navigation */}
                <div className="flex items-center gap-10 xl:gap-12">

                    {categories.map(category => {
                        const hasDropdown = category.items?.some(
                            item => item.children
                    )

                        return (
                            <div
                                key={category.id}
                                className="group relative"
                            >

                                {/* Category */}
                                <button className="flex items-center gap-1.5 py-8 text-sm text-text-body transition-colors duration-200 hover:text-text-body/60">
                                    <span>
                                        {category.label}
                                    </span>

                                    {hasDropdown && (
                                        <img
                                            src={navbarIcons.down}
                                            alt=""
                                            className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
                                        />
                                    )}
                                </button>

                                {/* Dropdown */}
                                {hasDropdown && (
                                    <div className="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                                        <div className="flex gap-12 border border-placeholder/20 bg-menu px-8 py-7 rounded-2xl">

                                            {category.items.map(item => (
                                                <div
                                                    key={item.id}
                                                    className="min-w-32"
                                                >

                                                    {item.children ? (
                                                        <>
                                                            <p className="mb-3 whitespace-nowrap text-xs font-medium uppercase tracking-wider text-text-body">
                                                                {item.label}
                                                            </p>

                                                            <div className="flex flex-col gap-2">
                                                                {item.children.map(
                                                                    child => (
                                                                        <a
                                                                            key={child.id}
                                                                            href={child.href}
                                                                            className="whitespace-nowrap text-sm text-text-body/60 transition-colors duration-200 hover:text-text-body"
                                                                        >
                                                                            {child.label}
                                                                        </a>
                                                                    )
                                                                )}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <a
                                                            href={item.href}
                                                            className="whitespace-nowrap text-sm text-text-body transition-colors duration-200 hover:text-text-body/60"
                                                        >
                                                            {item.label}
                                                        </a>
                                                    )}

                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                )}

                            </div>
                        )
                    })}

                    {/* Blog */}
                    <a
                        href="/blog"
                        className="py-8 text-sm text-text-body transition-colors duration-200 hover:text-text-body/60"
                    >
                        Blog
                    </a>

                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setIsSearchOpen(true)}
                        aria-label="Search"
                        className="transition-opacity duration-300 cursor-pointer hover:opacity-50"
                    >
                        <img
                            src={navbarIcons.search}
                            alt="Search"
                        />
                    </button>

                    <button aria-label="Shopping bag">
                        <img
                            src={navbarIcons.shoppingBag}
                            alt="Shopping bag"
                            className="transition-opacity duration-300 cursor-pointer hover:opacity-50"
                        />
                    </button>

                </div>

            </div>

            {/* Search */}
            <Search
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    )
}