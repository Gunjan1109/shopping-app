import React, { createContext, useMemo, useState } from "react";
import PRODUCTS from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevItem) => ({
      ...prevItem,
      [itemId]: prevItem[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItem) => ({
      ...prevItem,
      [itemId]: prevItem[itemId] - 1,
    }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    PRODUCTS.forEach((product) => {
      if (cartItems[product.id] > 0) {
        totalAmount = totalAmount + cartItems[product.id] * product.price;
      }
    });

    return totalAmount;
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, getTotalAmount, resetCart }),
    [cartItems]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
