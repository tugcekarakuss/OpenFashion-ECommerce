import { products } from "../../data/products"
export default function ProductCard({ product }) {
    return (
        <a
            href={`/products/${product.id}`}
            className="group block"
        >
            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="mt-2 text-center">
                <h3 className="text-sm text-text-body">
                    {product.name}
                </h3>

                <p className="mt-1 text-sm text-primary">
                    ${product.price}
                </p>
            </div>
        </a>
    )
}