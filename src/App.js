import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Teams from "./routes/Teams"
import Contact from "./routes/Contact"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
