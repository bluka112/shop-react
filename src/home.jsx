import { useState, useEffect } from "react";
import Product from "./product";

export default function Home() {
  const [product, setProduct] = useState([]);
  // const [selCat, setselCat] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // if (selCat == null) {
    fetch(`https://dummyjson.com/products?skip=${(page - 1) * 30}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotal(Math.ceil(data.total / 30));
        setProduct(data.products);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });
    // } else {
    //   fetch(`${selCat.url}?skip=${(page - 1) * 30}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setTotal(Math.ceil(data.total / 30));
    //       setProduct(data.products);
    //     });
    // }
  }, [page]);
  // useEffect(() => {
  //   setPage(1);
  // }, []);

  return (
    <main className="container">
      <section className="page-head">
        <h1 className="page-title">
          {/* {selCat == null ? "All products" : selCat.name} */}
          All products
        </h1>
        <p className="page-subtitle">
          Products will be shown here (render/loop on your own).
        </p>
      </section>

      <section className="product-grid" aria-label="Product list">
        {product.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </section>
      <div className="pagination">
        {page != 1 && (
          <a
            className="page-btn prev"
            href="#"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </a>
        )}
        {Array.from({ length: total }).map((_, index) => {
          return (
            <a
              key={index}
              className={
                page == index + 1 ? "page-number active" : "page-number"
              }
              href="#"
              onClick={() => {
                setPage(index + 1);
              }}
            >
              {index + 1}
            </a>
          );
        })}

        {/* <span className="dots">...</span> */}
        {page != total && (
          <a
            className="page-btn next"
            href="#"
            onClick={() => setPage(page + 1)}
          >
            Next
          </a>
        )}
      </div>
    </main>
  );
}
