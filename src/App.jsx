import "./App.css";
import Button from "./components/Button";
import TabButton from "./components/TabButton";
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
  console.log("App is called");

  const [selectedTopic, setSelectedTopic] = useState(
    "Vui lòng click vào nút lưu lại!",
  );

  function notiClick(message) {
      alert(`${message} is selected!`)
  }

  const [hello, setHello] = useState('');


  function handleHello() {
    let currentTime = new Date();
    // let tmp = currentTime.getUTCHours();
    // currentTime.setUTCHours(12)
    let hours = currentTime.getUTCHours();
    // let minutes = currentTime.getUTCMinutes();
    // console.log(tmp);

    if (hours >= 5 && hours < 12) {
      setHello("Chào buổi sáng!");
    }
    if (hours >= 12 && hours < 18) {
      setHello("Chào buổi chiều!");
    } else {
      setHello("Chào buổi tối!");
    }
  }

  const getCount = () => {
    alert(`Biến đếm count hiện tại là: ${count}`);
  };

  const increaseCount = () => {
    alert("Count đã được tăng thêm 1 đơn vị!");
    // setCount((currentCount) => currentCount + 1);
    setCount(count + 1);
  };

  function handleSelect(selectdButton) {
    setSelectedTopic(selectdButton);
  }

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
      {/* <div className="main-content">
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

        <section id="examples">
          <menu className="footer">
            <TabButton
              onSelected={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelected={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelected={() => {
                handleSelect("states");
              }}
            >
              States
            </TabButton>
            <TabButton
              onSelected={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </div> */}

      <section id="example">
        <menu>
          <TabButton handleHello={() => handleHello()}>Xin chào!</TabButton>
        </menu>
      </section>
      {hello}
    </>
  );
}

export default App;
