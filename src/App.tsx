import "./styles/global.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { PageNotFount } from "./components/PageNotFount";
import { useState } from "react";
import { ProfilePage } from "./components/ProfilePage";
import { darkContext } from "./store/dark-context";
import { LoginPage } from "./components/LoginPage";
import { LoginModal } from "./components/Login";

function App() {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  function darkModeHandller() {
    setIsDark((prevState) => !prevState);
  }

  const LoginStateHandller = () => {
    setIsLoged((prevState) => !prevState);
  };

  const parametro = useLocation();

  return (
    <darkContext.Provider
      value={{
        isDark: isDark,
        setIsDark: darkModeHandller,
        isLogedIn: isLoged,
        onChangeLogin: LoginStateHandller,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/404" element={<PageNotFount />} />
        {!isLoged && <Route path="/login" element={<LoginPage />} />}
      </Routes>
      {!isLoged && <Footer />}
      {!isLoged && parametro.pathname !== "/login" ? <LoginModal /> : ""}
    </darkContext.Provider>
  );
}

export { App };
