import axios, { AxiosInstance } from "axios";

import { BASE_URL } from "../config/config";
import { refreshTokenService } from "@/utils/services";

export const axiosBasicInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivateInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosBasicInstance.interceptors.request.use(
  async (request: any) => {
    request.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    request.data = { ...request.data };
    return request;
  },
  (error: any) => Promise.reject(error)
);

axiosPrivateInstance.interceptors.request.use(
  async (request: any) => {
    request.headers = {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    request.data = { ...request.data };
    return request;
  },
  (error) => Promise.reject(error)
);

const handleError = async (error: any) => {
  let originalconfig = error.config;
  if (error && error.response.status === 401 && !originalconfig) {
    originalconfig = true;

    try {
      await refreshTokenService();

      return axiosPrivateInstance(originalconfig);
    } catch (_error: any) {
      if (_error.response && _error.response.data) {
        return Promise.reject(_error.response.data);
      }
      return Promise.reject(_error);
    }
  }
};

const handleSccess = (response: any) => {
  if (response && response.status === 200) {
    return response.data;
  }
  return Promise.reject();
};

axiosBasicInstance.interceptors.response.use(handleSccess, handleError);
axiosPrivateInstance.interceptors.response.use(handleSccess, handleError);
