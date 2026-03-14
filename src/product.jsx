import { Link } from "react-router";

export default function Product({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="product-card">
      <img className="product-image" src={item.thumbnail} />
      <div className="product-body">
        <p className="product-title">{item.title}</p>
        <div className="price-row">
          <span className="product-price">
            {Number(
              item.price - (item.price * item.discountPercentage) / 100,
            ).toFixed(2)}
          </span>
          <span className="product-old-price">${item.price}</span>
        </div>

        <div className="product-meta">
          <span>Free shipping</span>
          <span>In stock</span>
        </div>
      </div>
    </Link>
  );
}
