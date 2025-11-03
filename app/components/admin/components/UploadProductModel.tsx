import React, { useState } from "react";
import { OilProduct } from "@/app/types/product";
import "../admin.css";
import { uploadProductModelProps } from "@/app/types/props";
import { useApi } from "@/app/customHooks/useApi";



const UploadProductModal = ({ onClose }: uploadProductModelProps) => {
    const { createProduct } = useApi();
      const [product, setProduct] = useState<OilProduct>({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? Number(value) : value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct(product);
      alert("Product uploaded successfully!");
      onClose();
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };


  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upload Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="modal-btn">Upload</button>
            <button type="button" className="modal-btn cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProductModal;
