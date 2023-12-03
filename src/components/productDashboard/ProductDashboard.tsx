"use client";

import { userContext } from "@/app/ContextWrapper";
import { useContext } from "react";
import ProductListContainer from "./ProductListContainer";

const ProductDashboard = () => {
  const { nameOfUser, setNameOfUser, usernameOfUser, setUsernameOfUser } =
    useContext(userContext);

  const userNameStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const productListStyle = {
    backgroundColor: "#e0e0e0",
    padding: "15px",
    borderRadius: "8px",
  };
  return (
    <>
      <div style={userNameStyle}>
        <h3>{`Hi ${nameOfUser}`}</h3>
        <p>{usernameOfUser}</p>
      </div>

      <div style={productListStyle}>
        <ProductListContainer />
      </div>
    </>
  );
};

export default ProductDashboard;
