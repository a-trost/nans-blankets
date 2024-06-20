"use client";
import React from "react";
import Stage from "./Stage";

export default function Product({ product }) {
  const movie = product.object;

  return (
    <div className="grid place-items-center grid-cols-2">
      <Stage product={movie} />
      <div>
        <h1 className="text-7xl">{movie.title}</h1>
        <p className="text-2xl">{movie.tagline}</p>
      </div>
    </div>
  );
}
