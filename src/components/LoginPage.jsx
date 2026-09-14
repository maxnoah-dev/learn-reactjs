export default function LoginPage() {
  const logo = "/logo-login.png";
  return (
    <>
      <div className="container-login">
        <ul className="login-form">
          <li>
            <img src={logo} alt="logo-login-page" />
          </li>
          <li>
            Username: <input type="text" />
          </li>
          <li>
            Password: <input type="password" />
          </li>
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
            <button type="button" className="login-btn">Đăng nhập</button>
            <button type="button" className="signup-btn">Đăng ký</button>
          </li>
        </ul>
      </div>
    </>
  );
}
