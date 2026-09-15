import axios from "axios";
import { useAuthStore } from "../../features/stores/useAuthStore";
import { ApiError } from "./apiError.js"

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((requestConfig) => {
    const token = useAuthStore.getState().token;

    // console.log(token);

    if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`
    }

    return requestConfig;
});

httpClient.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(new ApiError(err)),
);
