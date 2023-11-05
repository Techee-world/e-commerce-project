import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componetes/navbar/NavBar";
import SearchNav from "./componetes/navbar/SearchNav";
import HomePage from "./pages/HomePage";
import Footer from "./componetes/footer/Footer";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <SearchNav />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
