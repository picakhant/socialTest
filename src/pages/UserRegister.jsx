import React, { useState } from "react";
import { register } from "../service/authapi";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [response, setResponse] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();

    //input error handling
    if (email === "" || password === "" || confirmPassword === "") {
      toast.error("Please fill all field");
      return;
    }

    if (email === "") {
      toast.error("Please fill your email");
      return;
    }

    if (password === "") {
      toast.error("Please fill your password");
      return;
    }

    if (confirmPassword === "") {
      toast.error("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    try {
      const response = await register({ email, password, confirmPassword });
      console.log(response);
    } catch (error) {
      toast.error(error?.response?.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="row vh-100 justify-content-center align-items-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="col-12 col-md-6 col-lg-4 mx-auto">
        <form
          onSubmit={(e) => {
            handleSignup(e);
          }}
        >
          <div className="mb-3 fs-3 fw-semibold text-center">Sign up</div>
          <div className="mb-3">
            <label htmlFor="user-email">Enter your email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              placeholder="example123@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user-password">Enter your password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="example123$"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user-cpassword">Confirm password</label>
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="example123$"
            />
          </div>
          <div className="mb-3">
            <Link to="/user-login">
              <div className="btn btn-link">
                Already had been account?, login
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
