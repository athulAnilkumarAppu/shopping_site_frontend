import {
  axiosBasicInstance,
  axiosPrivateInstance,
} from "@/libs/axios/interceptor";
import {
  ADD_PRODUCTS_URL,
  GET_ALL_PRODUCTS,
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  SIGNIN_URL,
} from "./serviceUrls";

export const loginService = (username: any, password: any) => {
  return axiosBasicInstance
    .post(LOGIN_URL, { username: username, password: password })
    .then((response: any) => {
      if (response) {
        return response;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const signinService = (name: any, email: any, password: any) => {
  return axiosBasicInstance
    .post(SIGNIN_URL, { name: name, email: email, password: password })
    .then((response: any) => {
      if (response) {
        return response;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const refreshTokenService = () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  return axiosBasicInstance
    .post(REFRESH_TOKEN_URL, { token: token, refreshToken: refreshToken })
    .then((response: any) => {
      if (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
      } else {
        localStorage.clear();
        window.location.href = "/";
      }
    })
    .catch(() => {
      localStorage.clear();
      window.location.href = "/";
    });
};

export const addProductsService = (
  productName: string,
  productDescription: string,
  productCategory: string,
  productCost: number,
  sellerName: string,
  productImage: string
) => {
  return axiosPrivateInstance
    .post(ADD_PRODUCTS_URL, {
      productName: productName,
      productDescription: productDescription,
      productCategory: productCategory,
      productCost: productCost,
      sellerName: sellerName,
      productImage: productImage,
    })
    .then((response: any) => {
      if (response) {
        return response;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
};

export const getAllProductsService = () => {
  return axiosPrivateInstance
    .post(GET_ALL_PRODUCTS, {})
    .then((response: any) => {
      if (response) {
        return response;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
};
