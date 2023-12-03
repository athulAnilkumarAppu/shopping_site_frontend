"use client";

import { useEffect, useState } from "react";
import ProductListCard from "./ProductListCard";
import { getAllProductsService } from "@/utils/services";

const ProductListContainer = () => {
  const [productList, setProductList] = useState<any>([]);

  const getAllProductsServiceCall = async () => {
    const getproductRes = await getAllProductsService();
    if (getproductRes && getproductRes.status) {
      setProductList(getproductRes.productList);
    }
  };

  useEffect(() => {
    getAllProductsServiceCall();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {productList?.length > 0 &&
        productList.map((item: any) => {
          return (
            <>
              <ProductListCard product={item} />
            </>
          );
        })}
    </div>
  );
};

export default ProductListContainer;
