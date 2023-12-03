"use client";

const ProductListCard = ({ product }: any) => {
  const onBuyNowClick = () => {};
  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <img
          src={product.productImage}
          alt={product.productName}
          style={{ width: "100px", height: "100px", marginBottom: "10px" }}
        />
        <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {product.productName}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          {product.productDescription}
        </p>
        <h5 style={{ fontSize: "1rem", color: "#333", marginBottom: "5px" }}>
          {product.productCategory}
        </h5>
        <h3
          style={{ color: "#e44d26", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {product.productCost}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          {product.sellerName}
        </p>
        <button
          style={{
            backgroundColor: "#2874f0",
            color: "#fff",
            padding: "8px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => onBuyNowClick()}
        >
          Buy now
        </button>
      </div>
    </>
  );
};

export default ProductListCard;
