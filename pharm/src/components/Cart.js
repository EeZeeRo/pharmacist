import React from "react";
import { useCart } from "../hooks/useCart";

function Cart() {
    const { cartItems, addItem, removeItem, clearCart } = useCart();

    return (
        <>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} -{" "}
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(event) =>
                                addItem({
                                    ...item,
                                    quantity: parseInt(event.target.value),
                                })
                            }
                        />
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </>
    );
}

export default Cart;
