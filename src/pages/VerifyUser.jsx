import React, { useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../service/authapi";

const VerifyUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { token } = useParams();

  const verifyToken = async () => {
    try {
      const response = await verifyEmail(token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow">
            <div className="card-body d-flex flex-column justify-content-center gap-2">
              <IoCheckmarkCircle
                className="d-block mx-auto text-success"
                style={{
                  fontSize: "100px",
                }}
              />
              <div className="fs-3 fw-bold text-center">
                Verifycation Successful
              </div>
              <small className="card-text d-block text-center">
                Hello user, welcome from CU-CONNECT. Press OK to continue.
              </small>
              <div
                className="btn btn-success w-25 mx-auto"
                onClick={() => {
                  navigate(`/profile-setup`);
                }}
              >
                OK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
