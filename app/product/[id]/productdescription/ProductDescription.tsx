"use client";
import React, { useEffect, useState } from "react";
import "./productDescription.css";
import { OilProduct } from "@/app/types/product";
import { useApi } from "@/app/customHooks/useApi";

interface ProductDescriptionProps {
  id: string;
}

export default function ProductDescription({ id }: ProductDescriptionProps) {
  const [oils, setOils] = useState<OilProduct[]>([]);
  const { getOilData, addToCart } = useApi();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOilData();
      setOils(data);
    };
    fetchData();
  }, [getOilData]);

  const product: OilProduct | undefined = oils.find((p) => p.id == id);

  if (!product) {
    return (
      <p style={{ padding: "40px", textAlign: "center" }}>
        Product not found.
      </p>
    );
  }

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAdd = async () => {
    try {
        const productId= product.id
      await addToCart(productId,quantity)
      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Error adding to cart");
    }
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>

        <div className="product-actions">
          <div className="quantity-control">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <button className="add-to-cart" onClick={handleAdd}>
            Add to Cart
          </button>
          <button className="wishlist">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );
}
