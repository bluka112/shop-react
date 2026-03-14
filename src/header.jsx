import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.slice(0, 5));
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo">MyShop</div>
          <nav className="actions" aria-label="Top actions">
            <a href="#">Login</a>
            <a href="#">Cart</a>
          </nav>
        </div>
      </header>
      <nav className="category-nav" aria-label="Categories">
        <div className="container category-nav-inner">
          <ul className="category-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                    to={`/category/${category.slug}`}
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
