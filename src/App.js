import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Robots from "./routes/Robots"
import Contact from "./routes/Contact"
import Sponsor from "./routes/Sponsor"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/sponsor" element={<Sponsor />} /> */}
      </Routes>
    </div>
  );
}

export default App;
