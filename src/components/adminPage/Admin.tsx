"use client";

import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();

  const onAddProductClick = () => {
    router.push("/createProduct");
  };
  return (
    <>
      <button onClick={() => onAddProductClick()}>Add a new product</button>
    </>
  );
};

export default Admin;
