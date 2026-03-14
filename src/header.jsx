import { useEffect, useState } from "react";

export default function Header({ setselCat, selCat }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.slice(0, 5));
        console.log(data);
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
              <a
                className={selCat == null ? "active" : null}
                href="#"
                onClick={async () => {
                  setselCat(null);
                
                }}
              >
                Home
              </a>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <a
                    className={selCat == category ? "active" : null}
                    href="#"
                    onClick={async () => {
                      setselCat(category);
                      
                    }}
                  >
                    {category.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
