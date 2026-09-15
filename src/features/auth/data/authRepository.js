import { httpClient } from "@/core/http/httpClient";

// Object này dùng để gom các hàm liên quan đến authentication/API authentication vào một chỗ
/*
export const authRepository = {
  login: (credentials) => ...,

  register: (data) => ...,

  logout: () => ...,

  getProfile: () => ...,
}
*/

// một "kho chứa các hàm gọi API liên quan đến auth"
// authRepository không phải API của React Query, cũng không phải của React. Đây là code do người viết project tự định nghĩa.
export const authRepository = {
  login: (credentials) =>
    httpClient.post("/auth/login", credentials).then((r) => r.data),
};
