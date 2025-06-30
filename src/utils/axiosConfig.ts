import axios from "axios";
import cookies from "./cookies";
import { API_URL } from "../configs/environment";
import { AUTH_COOKIE_NAME } from "../configs/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = cookies.get(AUTH_COOKIE_NAME);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expired or unauthorized.");
      cookies.remove(AUTH_COOKIE_NAME);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export async function http(
  method: "GET" | "PUT" | "POST" | "DELETE",
  endpoint: string,
  formData?: object
) {
  let response;

  switch (method) {
    case "GET":
      response = await axiosInstance.get(endpoint);
      break;

    case "POST":
      response = await axiosInstance.post(endpoint, formData);
      break;

    case "PUT":
      response = await axiosInstance.put(endpoint, formData);
      break;

    case "DELETE":
      response = await axiosInstance.delete(endpoint);
      break;
  }

  return response.data;
}
