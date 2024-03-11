import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./assets/components/Header/Header";
import { MainComponent } from "./assets/components/MainComponent/MainCompoent";
import { FooterComponent } from "./assets/components/FooterComponent/FooterComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default App;
