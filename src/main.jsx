import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import ContactUs from "./pages/Contactus/ContactUs.jsx";
import Dynamic from "./pages/Dynamic.jsx";
import Productdetail from "./pages/Productdetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<App />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contactus" element={<ContactUs />} />

        {/* Dynamic Collection */}
        <Route path="/collection/:id" element={<Dynamic />} />

        {/* Product Detail */}
        <Route
          path="/productdetail/:id"
          element={<Productdetail />}
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);