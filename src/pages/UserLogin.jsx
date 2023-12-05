import React, { useState } from "react";
import { login } from "../service/authapi";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const [response, setResponse] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();

    //input error handling
    if (email === "" || password === "") {
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

    try {
      const response = await login({ email, password });
      console.log(response);
      navigate("/");
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
          <div className="mb-3 fs-3 fw-semibold text-center">
            Welcome back, Login here!
          </div>
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
            <Link to="/user-register">
              <div className="btn btn-link">New here?, Signup</div>
            </Link>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
