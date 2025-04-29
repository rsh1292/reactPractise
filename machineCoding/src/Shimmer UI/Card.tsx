import React from "react";
import "./Shimmer.css";
type CardProps = {
  url: string;
  id: string;
};

export default function Card({ url }: CardProps) {
  return (
    <p className="card">
      <img src={url} alt="randomText" width={300} height={200} />
    </p>
  );
}
