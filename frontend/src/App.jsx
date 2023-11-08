import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componetes/navbar/NavBar";
import SearchNav from "./componetes/navbar/SearchNav";
import HomePage from "./pages/HomePage";
import Footer from "./componetes/footer/Footer";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import Account from "./pages/Account";
import Catalog from "./pages/Catalog";
import AdminSign from "./pages/AdminSign";
import AdminLog from "./pages/AdminLog";
import AdminList from "./pages/Admin";
import AdminNav from "./componetes/adminNav/AdminNav";

function App() {
  const [loginMail , setLoginMail ] = useState({})
  const [navBar ,setNavBar ] = useState(true)
  return (
    <div>
      {navBar ? (
        <>
          <SearchNav />
          <NavBar />{" "}
        </>
      ) : (
        <AdminNav />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {navBar ? (
          <Route path="/signup" element={<SignUpPage navBar={navBar} />} />
        ) : (
          <Route path="/adminSign" element={<AdminSign navBar={navBar} />} />
        )}
        <Route
          path="/login"
          element={<LoginPage setLoginMail={setLoginMail} />}
        />
        <Route path="/account" element={<Account loginMail={loginMail} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/adminList" element={<AdminList />} />
        {/* <Route path="/adminSign" element={<AdminSign navBar={navBar} />} /> */}
        <Route path="/adminLog" element={<AdminLog />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
