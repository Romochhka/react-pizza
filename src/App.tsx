import "./scss/app.scss";
import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="react-pizza/" element={<Home />} />
          <Route path="react-pizza/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
