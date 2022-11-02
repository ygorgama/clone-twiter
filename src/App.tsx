import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Loged } from "./components/Loged";
import { PageNotFount } from "./components/PageNotFount";
import { useState } from "react";

function App() {
  const [isLoged, setIsLoged] = useState<boolean>(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loged />} />
        <Route path="/404" element={<PageNotFount />} />
      </Routes>
      {!isLoged && <Footer />}
    </div>
  );
}

export { App };
