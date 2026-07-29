import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // 1. Initial State (localStorage se load karega)
  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 2. Sidebar open/close state
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // 3. Save to localStorage jab bhi items change honge
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // 4. Add to Wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (!exists) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // 5. Remove from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // 6. Sidebar Toggle Function
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        toggleWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);