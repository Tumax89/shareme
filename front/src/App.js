import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

import "./index.css";

function App() {
  return (
    <div className="bg-green-100">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
