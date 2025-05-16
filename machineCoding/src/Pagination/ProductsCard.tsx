import "./Pagination.css";

export type ProductsCardPropsType = {
  id: number;
  title: string;
  price: string | number;
  description: string;
  thumbnail: string;
  discountPercentage: string | number;
};
export default function ProductsCard({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}: ProductsCardPropsType) {
  return (
    <div className="productCard">
      <img src={thumbnail} width="100px" height={"100px"} />
      <h4>{title}</h4>
      <p>
        Price : ${price} - discount of {discountPercentage}%
      </p>
      <p>{description}</p>
    </div>
  );
}
