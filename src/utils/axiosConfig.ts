import axios, { AxiosRequestConfig, Method } from "axios";
import cookies from "./cookies";

const getAuthToken = () => {
  return cookies.get("access_token");
};

export const fetcher = async <D = never>(
  method: Method,
  url: string,
  params?: object,
  options?: AxiosRequestConfig
): Promise<D> => {
  const token = getAuthToken();

  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(options?.headers || {}),
    },
    ...options,
  };

  if (method.toUpperCase() === "GET") {
    config.params = params;
  } else {
    config.data = params;
  }

  try {
    const response = await axios.request<D>(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        console.error("Access denied: 403");
      }
    }
    throw error;
  }
};
