import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import UserLogin from "./pages/UserLogin.jsx";
import UserRegister from "./pages/UserRegister.jsx";
import VerifyUser from "./pages/VerifyUser.jsx";
import Home from "./pages/Home.jsx";
import ProfileSetup from "./pages/ProfileSetup.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/verify-email/:token" element={<VerifyUser />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
