"use client";

import { addProductsService } from "@/utils/services";
import { fileToBase64 } from "@/utils/utils";
import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productCost, setProductCost] = useState<number>(0);
  const [sellerName, setSellerName] = useState<string>("");

  const [productImage, setProductImage] = useState<any>("");

  const onProductChange = (e: any) => {
    if (e.target.id === "productName") {
      setProductName(e.target.value);
    } else if (e.target.id === "productDescription") {
      setProductDescription(e.target.value);
    } else if (e.target.id === "productCategory") {
      setProductCategory(e.target.value);
    } else if (e.target.id === "sellerName") {
      setSellerName(e.target.value);
    } else if (e.target.id === "productCost") {
      setProductCost(e.target.value);
    } else {
      return;
    }
  };

  const onProductImageChange = async (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const fileBase64 = await fileToBase64(file);
      setProductImage(fileBase64);
    }
  };

  const createProductApiCall = async () => {
    const addProductRespose = await addProductsService(
      productName,
      productDescription,
      productCategory,
      productCost,
      sellerName,
      productImage
    );

    if (addProductRespose && addProductRespose.status) {
      alert(addProductRespose.message);
      setProductName("");
      setProductDescription("");
      setProductCategory("");
      setSellerName("");
      setProductCost(0);
    } else {
      alert(addProductRespose.message || "something went wrong");
    }
  };

  const onCreateProductClick = () => {
    createProductApiCall();
  };

  return (
    <>
      <h1 style={{ fontSize: "24px", color: "#333", marginBottom: "20px" }}>
        Add New Product
      </h1>

      <label style={{ display: "block", marginBottom: "8px" }}>
        Product Name
      </label>
      <input
        type="text"
        value={productName}
        id="productName"
        onChange={(e) => onProductChange(e)}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />

      <label style={{ display: "block", marginBottom: "8px" }}>
        Product Description
      </label>
      <input
        type="text"
        value={productDescription}
        id="productDescription"
        onChange={(e) => onProductChange(e)}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />

      <label style={{ display: "block", marginBottom: "8px" }}>
        Product Category
      </label>
      <input
        type="text"
        value={productCategory}
        id="productCategory"
        onChange={(e) => onProductChange(e)}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />

      <label style={{ display: "block", marginBottom: "8px" }}>
        Product Cost
      </label>
      <input
        type="number"
        value={productCost}
        id="productCost"
        onChange={(e) => onProductChange(e)}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />

      <label style={{ display: "block", marginBottom: "8px" }}>
        Seller Name
      </label>
      <input
        type="text"
        value={sellerName}
        id="sellerName"
        onChange={(e) => onProductChange(e)}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />

      <label style={{ display: "block", marginBottom: "8px" }}>
        Product Image
      </label>
      <input
        type="file"
        onChange={(e) => onProductImageChange(e)}
        style={{ marginBottom: "16px" }}
      />

      <button
        onClick={() => onCreateProductClick()}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Create Product
      </button>
    </>
  );
};

export default AddProduct;
