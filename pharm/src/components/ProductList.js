import React from "react";
import { useCart } from "../hooks/useCart";

function ProductList({ products }) {
    const { addItem } = useCart();

    const handleAddToCart = (product) => {
        addItem(product);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
