"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./Cart.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { CartItem } from "@/app/types/product";
import { removeFromCart, updateQuantity } from "@/app/redux/cartSlice";
import { setStoredData } from "@/app/lib/utility";

const Cart = () => {
  const {cartItem} = useAppSelector((state)=>state.cart);
  const dispatch = useAppDispatch()
 const [cartItems, setCartItems] = useState<CartItem[]>([])

 useEffect(()=>{
  setCartItems(cartItem)
 })

console.log(cartItem);
  const handleQuantity = (item: CartItem, quantity: number) => {
    const {quantity:itemQuantity,id}=item
    if(itemQuantity==0 && quantity<0)return;
      dispatch(updateQuantity({id,quantity}))
      setStoredData(cartItem)
  };
  console.log("cartitems are",cartItems)

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id))
    
  };

  return (
    
    <section className="cart-page">
      

      <div className="cart-table">
        <div className="cart-row cart-header-row">
          <div className="cart-cell product">PRODUCT</div>
          <div className="cart-cell price">PRICE</div>
          <div className="cart-cell quantity">QUANTITY</div>
          <div className="cart-cell subtotal">SUBTOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-cell product">
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                <ClearIcon />
              </button>
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="cart-img"
              />
              <span className="product-name">{item.name}</span>
            </div>

            <div className="cart-cell price">${item.price.toFixed(2)}</div>

            <div className="cart-cell quantity">
              <div className="qty-control">
                <button onClick={() => handleQuantity(item, 1)}>
                  <AddIcon />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantity(item, -1)}>
                  <RemoveIcon/>
                </button>
              </div>
            </div>

            <div className="cart-cell subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
