import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CART_KEY = "cart";

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem(CART_KEY);
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (item) => {
        const existingItem = cartItems.find((i) => i.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: item.quantity } : i
                )
            );
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    const removeItem = (item) => {
        setCartItems(cartItems.filter((i) => i.id !== item.id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const value = {
        cartItems,
        addItem,
        removeItem,
        clearCart,
        totalItems,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, useCart };
