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
import AdminProfile from "./pages/AdminProfile";

function App() {
  const [loginMail , setLoginMail ] = useState('')
  const [navBar ,setNavBar ] = useState(true)
  
  const adminNavHandle = () =>setNavBar(false)
  const  userNavHandle = () =>setNavBar(true);
  
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/account" element={<Account loginMail={loginMail} />} />
          <Route path="/signup" element={<SignUpPage adminNavHandle={adminNavHandle} />}/>
        <Route path="/login"element={<LoginPage setLoginMail={setLoginMail} />}/>
          <Route path="/adminSign" element={<AdminSign userNavHandle={userNavHandle} />}/>
       <Route path="/adminList" element={<AdminList />} />
        <Route path="/adminLog" element={<AdminLog />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
