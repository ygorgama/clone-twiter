import "./styles/global.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { PageNotFount } from "./components/PageNotFount";
import { useState } from "react";
import { ProfilePage } from "./components/ProfilePage";
import { darkContext } from "./store/dark-context";
import { LoginPage } from "./components/LoginPage";

function App() {
  const [isLoged, setIsLoged] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  function darkModeHandller() {
    setIsDark((prevState) => !prevState);
  }

  return (
    <darkContext.Provider
      value={{ isDark: isDark, setIsDark: darkModeHandller }}
    >
      {isLoged ? (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<PageNotFount />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/404" element={<PageNotFount />} />
        </Routes>
      )}
      {!isLoged && <Footer />}
    </darkContext.Provider>
  );
}

export { App };
