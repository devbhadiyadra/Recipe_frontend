import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes";
import Authentication from "./components/Authentication";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/authentication" element={<Authentication />}></Route>
        <Route path="/signup" element={<Authentication />}></Route>
        <Route path="/login" element={<Authentication />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
