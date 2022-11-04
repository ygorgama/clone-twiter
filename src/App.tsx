import "./styles/global.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { PageNotFount } from "./components/PageNotFount";
import { useState } from "react";

function App() {
  const [isLoged, setIsLoged] = useState<boolean>(true);
  return (
    <div className="App">
      {isLoged && (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/404" element={<PageNotFount />} />
        </Routes>
      )}
      {!isLoged && <Footer />}
    </div>
  );
}

export { App };
