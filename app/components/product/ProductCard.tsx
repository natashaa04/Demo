"use client";

import Image from "next/image";
import { ProductCardProps } from "@/app/types/props";
import { useApi } from "@/app/customHooks/useApi";

const ProductCard = ({ oil }: ProductCardProps) => {
  const { addToCart } = useApi();

  const handleAdd = async () => {
    try {
      await addToCart(oil.id, 1);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Error adding product to cart");
    }
  };

  return (
    <div className="product">
      <Image src={oil.image} alt={oil.name} width={300} height={200} />
      <div className="product-content">
        <p>essential</p>
        <h4 className="oil-name">{oil.name}</h4>
        <p className="oil-price">${oil.price}</p>
        <button className="add-btn" onClick={handleAdd}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
