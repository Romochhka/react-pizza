import React from "react";
import "./scss/app.scss";
import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
