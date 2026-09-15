import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../features/auth/data/authQueries";
import { loginSchema } from "../features/auth/domain/authSchemas";

export default function LoginPage() {
  const login = useLoginMutation();

  const logo = "/logo-login.png";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  /*
    Người dùng nhập email/password
        ↓
    register("email"), register("password")
            ↓
    handleSubmit tạo object values
            ↓
    login.mutate(values)
            ↓
    useMutation gọi mutationFn(values)
            ↓
    authRepository.login(credentials)
            ↓
    httpClient.post("/auth/login", credentials)
  */

  const onSubmit = handleSubmit((values) => login.mutate(values));

  //   console.log(register);

  return (
    <>
      <div className="container-login">
        <ul className="login-form">
          <li>
            <img src={logo} alt="logo-login-page" />
          </li>
          <form className="login-form-fields" onSubmit={onSubmit}>
            <li>
              Email: <input type="email" {...register("email")} />
            </li>
            <li>
              Password: <input type="password" {...register("password")} />
            </li>
            {errors.password && <p>{errors.password.message}</p>}
            <li className="forgot-password">
              <label htmlFor="forgot-password">
                <input
                  id="forgot-password"
                  type="checkbox"
                  name="password-option"
                />
                Forgot password?
              </label>
              <a href="#">Click here</a>
            </li>
            <li className="auth-btn">
              <button type="submit" className="login-btn">
                Đăng nhập
              </button>
              <button type="button" className="signup-btn">
                Đăng ký
              </button>
            </li>
          </form>
        </ul>
      </div>
    </>
  );
}
