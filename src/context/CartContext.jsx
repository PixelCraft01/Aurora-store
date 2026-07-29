import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 1. Initial State with Error Handling (Crash protection)
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== "undefined") {
            try {
                const savedCart = localStorage.getItem("cart");
                return savedCart ? JSON.parse(savedCart) : [];
            } catch (error) {
                console.error("Cart retrieval error:", error);
                return []; // Fallback to empty array
            }
        }
        return [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // 2. LocalStorage Sync
    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        } catch (error) {
            console.error("Cart save error:", error);
        }
    }, [cartItems]);

    // 3. Add to Cart (With Auto-Open Sidebar)
    const addToCart = (product) => {
        setCartItems((prev) => {
            const isExisting = prev.find((item) => item.id === product.id);
            if (isExisting) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
        
        // Premium Feel: Product add hote hi cart dikhao
        setIsCartOpen(true);
    };

    // 4. Update Quantity (Logical Lock)
    const updateQuantity = (productId, delta) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === productId) {
                    const newQty = (item.qty || 1) + delta;
                    // Quantity 1 se kam nahi honi chahiye
                    return { ...item, qty: Math.max(1, newQty) };
                }
                return item;
            })
        );
    };

    // 5. Remove from Cart
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    // 6. Clear Cart (Checkout ke baad ke liye)
    const clearCart = () => {
        setCartItems([]);
    };

    
    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                setIsCartOpen,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart, // New function added
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);