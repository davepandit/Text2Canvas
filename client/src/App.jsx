import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GenerateImage from "./pages/GenerateImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generateimage" element={<GenerateImage />} />
      </Routes>
      {/* footer */}
    </>
  );
}

export default App;
