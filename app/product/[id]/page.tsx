
import React from "react";
import ProductDescription from "./productdescription/ProductDescription";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const {id} = await params;
  return <ProductDescription id={id} />;
}