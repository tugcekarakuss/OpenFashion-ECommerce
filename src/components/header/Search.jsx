import { useState } from "react"
import { navbarIcons, categories } from "../../data/navbar"

export default function Search({ isOpen, onClose }) {

    const [searchTerm, setSearchTerm] = useState("")

    const popularSearches =
        categories
            .find(category => category.id === "women")
            ?.items
            .find(item => item.id === "apparel")
            ?.children
            .slice(0, 6) || []

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-menu px-5 animate-[slideDown_300ms_ease-out]">

            {/* Search header */}
            <div className="flex items-center justify-between gap-4 border-b border-label p-5">

                <div className="flex flex-1 items-center gap-2">

                    <img
                        src={navbarIcons.search}
                        alt="search"
                    />

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        autoFocus
                        className="w-full bg-transparent py-3 outline-none"
                    />

                </div>

                <button onClick={onClose}>
                    <img
                        src={navbarIcons.close}
                        alt="close search"
                    />
                </button>

            </div>


            {/* Recent Search */}
            <div className="my-5 flex flex-col gap-3">

                <h4 className="text-placeholder">
                    Recent search
                </h4>

                <div className="flex flex-wrap gap-3">

                    <button className="flex items-center gap-2 rounded-full bg-recent/10 px-3 py-2.5">
                        Dress
                        <img
                            src={navbarIcons.close}
                            alt="delete icon"
                            className="h-3 w-3"
                        />
                    </button>

                    <button className="flex items-center gap-2 rounded-full bg-recent/10 px-3 py-2.5">
                        Collection
                        <img
                            src={navbarIcons.close}
                            alt=""
                            className="h-3 w-3"
                        />
                    </button>

                    <button className="flex items-center gap-2 rounded-full bg-recent/10 px-3 py-2.5">
                        Shirt
                        <img
                            src={navbarIcons.close}
                            alt=""
                            className="h-3 w-3"
                        />
                    </button>
                </div>
            </div>


            {/* Popular Search */}
            <div className="mt-8">

                <h4 className="mb-4 text-placeholder">
                    Popular search terms
                </h4>

                <div className="flex flex-wrap gap-3">

                    {popularSearches.map(item => (

                        <button
                            key={item.id}
                            onClick={() => setSearchTerm(item.label)}
                            className="rounded-full border border-placeholder/40 px-4 py-2 text-sm transition-colors duration-200 hover:bg-black hover:text-white">
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>


            {/* Temporary search feedback */}
            {searchTerm && (
                <div className="mt-10">
                    <p className="text-sm text-placeholder">Search:</p>
                    <p className="mt-1">{searchTerm}</p>
                </div>
            )}
        </div>
    )
}