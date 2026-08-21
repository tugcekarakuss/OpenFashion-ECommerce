import { useState } from "react"
import { products } from "../../data/products"
import ProductCard from "../common/ProductCard"
import Arrow from "../../assets/icons/ForwardArrow.svg"
import Divider from "../common/Divider"
const categories = [
    { id: "all", label: "All" },
    { id: "apparel", label: "Apparel" },
    { id: "dress", label: "Dress" },
    { id: "tshirt", label: "Tshirt" },
    { id: "bag", label: "Bag" },
]

export default function NewArrival() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter(
                product => product.category === activeCategory
            )

    return (
        <section className="px-4 py-12 font-tenor-sans">

            {/* Heading */}
            <div className="mb-8 text-center">
                <h2 className="font-tenor-sans text-text-body text-2xl tracking-[0.25em]">
                    NEW ARRIVAL
                </h2>
                <Divider />
                <div className="mx-auto mt-3 h-px w-24 bg-line" />
            </div>

            {/* Categories */}
            <div className="mb-6 flex items-center justify-center gap-7">
                {categories.map(category => (
                    <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveCategory(category.id)}
                        className={`
                            text-sm transition-colors duration-200
                            ${activeCategory === category.id
                                ? "text-text-body"
                                : "text-text-body/40"
                            }
                        `}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-4">
                {filteredProducts.slice(0, 8).map((product, index) => (
                    <div
                        key={product.id}
                        className={index >= 4 ? "hidden lg:block" : ""}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* Explore More */}
            <div className="mt-12 flex justify-center">
                <a
                    href="/shop"
                    className="flex items-center gap-3 text-base text-text-body transition-opacity hover:opacity-60"
                >
                    Explore More
                    <img src={Arrow} alt="" />
                </a>
            </div>
        </section>
    )
}