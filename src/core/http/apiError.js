export class ApiError extends Error {
  constructor(axiosError) {
    const status = axiosError.response?.status ?? 0;
    const message =
      axiosError.response?.data?.message ??
      axiosError.message ??
      "Unknown error";
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = axiosError.code;
    this.details = axiosError.response?.data;
  }

  isNetwork() {
    return this.status === 0;
  }

  isUnauthorized() {
    return this.status === 401
  }

  isForbidden() {
    return this.status === 403
  }

  isServerError() {
    return this.status >= 500
  }
}
