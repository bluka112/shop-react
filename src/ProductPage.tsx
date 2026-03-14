export default function ProductPage() {
  return (
    <div className="detail-page">
      <div className="detail-breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/products">Products</a>
        <span>/</span>
        <span>{product.title}</span>
      </div>

      <section className="detail-layout">
        <div className="detail-gallery-card">
          <div className="detail-main-image-wrap">
            <img src={selectedImage} alt={product.title} className="detail-main-image" />
          </div>

          {images.length > 1 && (
            <div className="detail-thumbs">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={`detail-thumb-btn ${selectedImage === image ? "active" : ""}`}
                  onClick={() => setSelectedImage(image)}
                  type="button"
                >
                  <img src={image} alt={`${product.title} ${index + 1}`} className="detail-thumb-image" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info-card">
          <div className="detail-badge-row">
            <span className="detail-badge">In stock</span>
            {product.brand && <span className="detail-badge soft">{product.brand}</span>}
          </div>

          <h1 className="detail-title">{product.title}</h1>

          <div className="detail-rating-row">
            <span className="detail-rating">⭐ {product.rating || 0}</span>
            <span className="detail-divider">•</span>
            <span className="detail-meta-text">SKU: {product.sku || product.id || "N/A"}</span>
          </div>

          <div className="detail-price-box">
            <div className="detail-price-row">
              <span className="detail-price">${discountedPrice}</span>

              {product.discountPercentage > 0 && (
                <>
                  <span className="detail-old-price">${product.price}</span>
                  <span className="detail-discount">-{Math.round(product.discountPercentage)}%</span>
                </>
              )}
            </div>

            <p className="detail-tax-note">Free shipping · Secure checkout</p>
          </div>

          <p className="detail-description">{product.description || "No description available."}</p>

          <div className="detail-meta-grid">
            <div className="detail-meta-item">
              <span className="label">Category</span>
              <span className="value">{product.category || "N/A"}</span>
            </div>

            <div className="detail-meta-item">
              <span className="label">Availability</span>
              <span className="value">{product.stock > 0 ? `${product.stock} left` : "Out of stock"}</span>
            </div>

            <div className="detail-meta-item">
              <span className="label">Brand</span>
              <span className="value">{product.brand || "N/A"}</span>
            </div>

            <div className="detail-meta-item">
              <span className="label">Shipping</span>
              <span className="value">2–5 business days</span>
            </div>
          </div>

          <div className="detail-actions">
            <div className="qty-box">
              <button type="button" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>

            <button className="primary-btn" type="button">
              Add to cart
            </button>

            <button className="secondary-btn" type="button">
              Buy now
            </button>
          </div>
        </div>
      </section>

      <section className="detail-extra-grid">
        <div className="detail-section-card">
          <h3>Product details</h3>
          <p>Designed to match the clean shop layout with soft borders, rounded cards, and a minimal product-focused structure.</p>
        </div>

        <div className="detail-section-card">
          <h3>Delivery & returns</h3>
          <p>Free shipping on selected items. Easy returns within 14 days if the product is unused and in original condition.</p>
        </div>
      </section>
    </div>
  );
}
