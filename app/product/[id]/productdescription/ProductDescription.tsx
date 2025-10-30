"use client";
import React, { useEffect, useState } from "react";
import "./productDescription.css";
import { CartItem, OilProduct } from "@/app/types/product";
import { useAppDispatch } from "@/app/redux/hooks";
import { addToCart } from "@/app/redux/cartSlice";
import { useApi } from "@/app/customHooks/useApi";

interface ProductDescriptionProps {
  id: number;
}

export default function ProductDescription({ id }: ProductDescriptionProps) {

    const [oils, setOils] = useState<OilProduct[]>([]);
    const { getOilData } = useApi();
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getOilData();
        setOils(data);
      };
  
      fetchData();
    }, [getOilData]);
  
  const product: OilProduct | undefined = oils.find((p: OilProduct) => p.id == id);
  const [quantity, setQuantity] = useState(1);
  const dispatch= useAppDispatch()
  console.log("product is",product)
  if (!product) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Product not found.</p>;
  }

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
  
  const handleAdd=()=>{
    const item:CartItem= {...product,quantity}
    dispatch(addToCart(item))

  }

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

          <button className="add-to-cart"  onClick={handleAdd}>Add to Cart</button>
          <button className="wishlist">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );
}
