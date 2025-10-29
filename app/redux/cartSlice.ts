"use client"
import { getStoredData } from "../lib/utility";
import { OilProduct,CartItem } from "../types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface stateT {
  cartItem: CartItem[];
}

const initialState: stateT = {
  cartItem: getStoredData(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = action.payload;
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItem.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIdToRemove = action.payload;
      state.cartItem = state.cartItem.filter(
        (cartItem) => cartItem.id !== itemIdToRemove
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem.id === id
      );

      if (existingItem) {
        existingItem.quantity+= quantity;
      }
    },

    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
