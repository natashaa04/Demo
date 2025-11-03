"use client";
import React, { useEffect, useState } from "react";
import "./Cart.css";
import { CartItem } from "@/app/types/product";
import CartRow from "./CartRow";
import { useApi } from "@/app/customHooks/useApi";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { getUserCart, removeFromCart } = useApi();

  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getUserCart();
        setCartItems(data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  }, [getUserCart]);

  
  const handleQuantity = (item: CartItem, quantityChange: number) => {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + quantityChange) }
          : cartItem
      )
    );
  };


  const handleRemove = async (id: string) => {
    try {
      await removeFromCart(id);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <section className="cart-page">
      <div className="cart-table">

        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Action</span>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartRow
              key={item.id}
              item={item}
              onQuantityChange={handleQuantity}
              onRemove={handleRemove}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "20px" }}>
            Your cart is empty.
          </p>
        )}
      </div>
    </section>
  );
};

export default Cart;
