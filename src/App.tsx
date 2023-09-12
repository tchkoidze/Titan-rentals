import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./layouts/header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Header setShowMenu={setShowMenu} showMenu={showMenu}></Header>
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
