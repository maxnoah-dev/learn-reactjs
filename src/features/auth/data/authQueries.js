import { useAuthStore } from "../../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { authRepository } from "./authRepository";

export function useLoginMutation() {
  const setSession = useAuthStore((s) => s.setSession);

  /* 
    useMutation({
        mutationFn: function,
        onSuccess: function,
        onError: function,
    })
  */

  /*
    useMutation()
     ↓
    "Tạo cho tôi một mutation"
        ↓
    mutationFn = việc cần thực hiện
    onSuccess  = thành công thì làm gì
    onError    = thất bại thì làm gì
        ↓
    trả về object
        ↓
    login.mutate(values)
        ↓
    mutationFn(values)
  */

  // useMutation() không phải function gọi API.
  // Nó là hook quản lý toàn bộ trạng thái + vòng đời của một thao tác gọi API;
  // còn function thực sự gọi API ở đây là authRepository.login

  /*
    login = {
        mutate: function,
        mutateAsync: function,
        isPending: false,
        isSuccess: false,
        isError: false,
        data: ...,
        error: ...,
        ...
    }
  */

  return useMutation({
    mutationFn: authRepository.login,
    onSuccess: (data) => {
      setSession({ user: data.user, token: data.token });
      alert(`Chào mừng ${data.user.fullName}`);
    },
    onError: (err) => {
      alert(err.message || "Đăng nhập thất bại");
    },
  });
}
