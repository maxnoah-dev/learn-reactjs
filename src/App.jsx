import "./App.css";
import Button from "./components/Button";

import { useState } from "react";

const logo = "/logo-login.png";

function Header() {
  return (
    <>
      <header>
        <ul className="container-header">
          <li className="brand">Wanderlust</li>

          <div className="nav-group">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </div>

          <div className="auth-group">
            <li>Login</li>
            <li>Sign up</li>
          </div>
        </ul>
      </header>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  // function notiClick(message) {
  //     alert(`${message} is selected!`)
  // }

  const getCount = () => {
    alert(`Biến đếm count hiện tại là: ${count}`);
  };

  const increaseCount = () => {
    alert("Count đã được tăng thêm 1 đơn vị!");
    // setCount((currentCount) => currentCount + 1);
    setCount(count + 1);
  };

  return (
    <>
      <Header />
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
            <input type="radio" /> <span>Forgot password?</span>{" "}
            <a href="#">Click here</a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Button
          onSelect={() => {
            getCount();
          }}
        >
          Kiểm tra số đếm
        </Button>
        <Button
          onSelect={() => {
            increaseCount();
          }}
        >
          Tăng số đếm
        </Button>
      </div>
    </>
  );
}

export default App;
