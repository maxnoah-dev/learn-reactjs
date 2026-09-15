import "./App.css";
// import Button from "./components/Button";
// import TabButton from "./components/TabButton";
// import { useState } from "react";
// import { myData, EXAMPLES } from "../data";
import Header from "./components/Header";
import LoginPage from "./ui/LoginPage";


// function Header() {
//   return (
//     <>
//       <header>
//         <ul className="container-header">
//           <li className="brand">Wanderlust</li>

//           <div className="nav-group">
//             <li>Home</li>
//             <li>About</li>
//             <li>Pricing</li>
//             <li>Contact</li>
//           </div>

//           <div className="auth-group">
//             <li>Login</li>
//             <li>Sign up</li>
//           </div>
//         </ul>
//       </header>
//     </>
//   );
// }

function App() {
  // const [count, setCount] = useState(0);
  // console.log("App is called");

  // const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;

  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content" className="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].desc}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  // function notiClick(message) {
  //     alert(`${message} is selected!`)
  // }

  // const [hello, setHello] = useState('');

  // function handleHello() {
  //   // let currentTime = new Date().getHours();
  //   // let tmp = currentTime.getUTCHours();
  //   // currentTime.setUTCHours(12)
  //   let hours = new Date().getHours();
  //   // let minutes = currentTime.getUTCMinutes();
  //   console.log(hours);

  //   if (hours >= 5 && hours < 12) {
  //     setHello("Chào buổi sáng!");
  //   } else if (hours >= 12 && hours < 18) {
  //     setHello("Chào buổi chiều!");
  //   } else {
  //     setHello("Chào buổi tối!");
  //   }
  // }

  // const getCount = () => {
  //   alert(`Biến đếm count hiện tại là: ${count}`);
  // };

  // const increaseCount = () => {
  //   alert("Count đã được tăng thêm 1 đơn vị!");
  //   // setCount((currentCount) => currentCount + 1);
  //   setCount(count + 1);
  // };

  // function handleSelect(selectdButton) {
  //   setSelectedTopic(selectdButton);
  // }

  // const [mode, setMode] = useState("develop");

  // function showConfirmMenu() {
  //   setMode("confirm");
  // }

  // function activateMode() {
  //   setMode("active");
  // }

  // function cancelActivation() {
  //   setMode("develop")
  // }

  // let tabMode;

  // if (mode === "develop") {
  //   tabMode = (
  //     <TabButton onAtiveModeFunc={showConfirmMenu}>Active</TabButton>
  //   )
  // }

  // if (mode === "confirm") {
  //   tabMode = (
  //     <menu className="active-mode-menu">
  //       Do you really want it active?
  //       <div className="active-mode-div">
  //         <li>
  //           <button type="button" onClick={activateMode}>Active</button>
  //         </li>
  //         <li>
  //           <button type="button" onClick={cancelActivation}>Cancel</button>
  //         </li>
  //       </div>
  //     </menu>
  //   )
  // }

  // if (mode === "active") {
  //   tabMode = <p>Active thành công</p>;
  // }

  // const [mode, setMode] = useState("none");

  // let tabMode;

  // function enbaleMode() {
  //   setMode("active");
  // }

  // function confirmModeActive() {
  //   setMode("confirm-mode");
  // }

  // function cancelModeActive() {
  //   setMode("none");
  // }

  // if (mode === "none") {
  //   tabMode = (
  //     <TabButton onAtiveModeFunc={confirmModeActive}>Active</TabButton>
  //   )
  // }

  // if (mode === "confirm-mode") {
  //   tabMode = (
  //     <menu className="active-mode-menu">
  //       <li>Do you really want to enable this mode?</li>

  //       <div className="active-mode-div">
  //         <li>
  //           <button type="button" onClick={enbaleMode}>Active</button>
  //         </li>
  //         <li>
  //           <button type="button" onClick={cancelModeActive}>Cancel</button>
  //         </li>
  //       </div>
  //     </menu>
  //   )
  // }

  // if (mode === "active") {
  //   tabMode = <p>Active successfully</p>;
  // }

  return (
    <>
      <Header />
      <LoginPage />
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
        </Button> */}
      {/* <section id="examples">
        <menu className="code-component-tabs">
          <TabButton
            onSelected={() => {
              handleSelect("components");
            }}
          >
       1     Components
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
              handleSelect("state");
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
        {/* {selectedTopic} */}
      {/* </section> */}
      {/* </div */}
      {/* <section id="example">
        <menu>
          <TabButton handleHello={() => handleHello()}>Xin chào!</TabButton>
        </menu>
      </section> */}
      {/* {hello} */}
      {/* {!selectedTopic ? (
        <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>
      ) : (
        <div id="tab-content" className="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].desc}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* {tabContent} */}

      {/* {!selectedTopic && <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>}

      {selectedTopic && (
        <div id="tab-content" className="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].desc}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* <div id="tab-content" className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> */}

      {/* {tabMode} */}
    </>
  );
}

export default App;
