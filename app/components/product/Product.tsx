"use client";

import Image from "next/image";
import { OilProduct } from "@/app/types/product";
import "./Product.css";
import { useAppDispatch } from "@/app/redux/hooks";
import { addToCart } from "@/app/redux/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "@/app/customHooks/useApi";

export default function Product() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [oils, setOils] = useState<OilProduct[]>([]);
  const { getOilData } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOilData();
      setOils(data);
    };

    fetchData();
  }, [getOilData]);

  const handleAdd = (oil: OilProduct) => {
    dispatch(addToCart(oil));
  };

  return (
    <div className="product-container">
      <h1>Trendy Items</h1>
      <div className="productCard">
        {oils.map((oil: OilProduct) => (
          <div key={oil.id} className="product">
            <Image src={oil.image} alt={oil.name} width={300} height={200} />
            <div className="product-content">
              <p className="">essential</p>
              <h4 className="oil-name">{oil.name}</h4>
              <p className="oil-price">${oil.price}</p>
              <button className="add-btn" onClick={() => handleAdd(oil)}>
                ADD TO CARD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
