"use client";

import React, { useEffect, useState } from "react";
import "./Product.css";
import { OilProduct } from "@/app/types/product";
import { useApi } from "@/app/customHooks/useApi";
import ProductCard from "./ProductCard";

export default function Product() {
  const [oils, setOils] = useState<OilProduct[]>([]);
  const { getOilData } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOilData();
      setOils(data);
    };
    fetchData();
  }, [getOilData]);

  return (
    <div className="product-container">
      <h1>Trendy Items</h1>
      <div className="productCard">
        {oils.map((oil) => (
          <ProductCard key={oil.id} oil={oil} />
        ))}
      </div>
    </div>
  );
}
