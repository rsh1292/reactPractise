import { useEffect, useState } from "react";
import ProductsCard, { ProductsCardPropsType } from "./ProductsCard";
import "./Pagination.css";
const LIMIT = 5;
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsList, setProductsList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const productResponse = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${(currentPage - 1) * LIMIT}&select=title,price,description,thumbnail,discountPercentage`
    );
    const productsObj = await productResponse.json();
    setProductsList(productsObj.products);
    setTotalPages(Math.ceil(productsObj.total / LIMIT));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handleNextClick = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handlePageNoClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <h3 style={{ textAlign: "center" }}> Dynamic Pagination </h3>
      {productsList.length > 0 ? (
        <>
          <div className="productsList">
            {productsList.map((product: ProductsCardPropsType) => {
              return <ProductsCard {...product} key={product.id} />;
            })}
          </div>
          <div className="paginationBlock">
            <span
              className={currentPage === 1 ? "disableStyle" : ""}
              onClick={handlePrevClick}
            >
              Prev
            </span>
            {[...Array(totalPages).keys()].map((pn) => {
              return (
                <span
                  style={
                    currentPage === pn + 1 ? { fontWeight: "bold" } : undefined
                  }
                  onClick={() => handlePageNoClick(pn + 1)}
                >
                  {" "}
                  {pn + 1}{" "}
                </span>
              );
            })}
            <span
              className={currentPage === totalPages ? "disableStyle" : ""}
              onClick={handleNextClick}
            >
              Next
            </span>
          </div>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}
