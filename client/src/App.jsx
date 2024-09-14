import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import GenerateImage from "./pages/GenerateImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generateimage" element={<GenerateImage />} />
      </Routes>
      {/* footer */}
    </>
  );
}

export default App;
