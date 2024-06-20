"use client";
import React from "react";
import BlanketStage from "./BlanketStage";

export default function Product({ product }) {
  console.log(product);
  const blanket = product.object;

  return (
    <div className="grid place-items-center grid-cols-2">
      <BlanketStage product={blanket} />
      <div>
        <h1>{blanket.name}</h1>
        <p>{blanket.description}</p>
      </div>
    </div>
  );
}
