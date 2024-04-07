import "./assets/normalize.css";
import "./App.css";
import style from "./App.module.css";
import { NAVIGATION } from "./constants/constants";
import { useState } from "react";
import Login from "./components/Login/Login";
import Logo from "./assets/icons/Logo.svg?react";
import Welcome from "./components/Welcome/Welcome";
import Chat from "./components/Chat/Chat";

function App() {
  const [currentNav, setCurrentNav] = useState<keyof typeof NAVIGATION>(NAVIGATION.LOGIN);

  console.log(currentNav);

  return (
    <main className={style.main}>
      <Logo className={style.logo} />
      {currentNav === NAVIGATION.LOGIN && <Login setCurrentNav={setCurrentNav} />}
      {currentNav === NAVIGATION.WELCOME && <Welcome setCurrentNav={setCurrentNav} />}
      {currentNav === NAVIGATION.CHAT && <Chat setCurrentNav={setCurrentNav} />}
    </main>
  );
}

export default App;
