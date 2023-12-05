import React, { useState } from "react";
import dfUser from "../../public/user.png";

const ProfileSetup = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uplodedImage, setUplodedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      //Convert to base 64
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUplodedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="container-fluid">
              <div className="row">
                {/* profile pic */}
                <div className="mb-3 col-12 d-flex justify-content-center">
                  <label
                    htmlFor="user-profile-uploader"
                    className="bg-white rounded-circle border border-primary"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={uplodedImage ? imagePreview : dfUser}
                      alt="img"
                      className="object-fit-cover rounded-circle"
                      title="click for upload profile pic"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      handleImageChange(e);
                    }}
                    name=""
                    className="d-none"
                    id="user-profile-uploader"
                  />
                </div>
                <div className="mb-3 col-12">
                  <input
                    type="text"
                    placeholder="Add your bio"
                    className="user-bio d-block bg-body text-center mx-auto"
                  />
                </div>
                <div className="mb-3 col-12">
                  <label htmlFor="">Full name</label>
                  <input
                    type="text"
                    placeholder="Example name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 col-12">
                  <select className="form-select">
                    <option value="empty">Select your semister</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="3">Fourth Year</option>
                    <option value="3">Final Year</option>
                  </select>
                </div>
                <div className="mb-3 col-12">
                  <select className="form-select">
                    <option value="empty">Select your major</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                  </select>
                </div>
                <div className="mb-3 col-12">
                  <select className="form-select">
                    <option value="empty">Select your Section</option>
                    <option value="1">Section A</option>
                    <option value="2">Section B</option>
                    <option value="3">Section C</option>
                    <option value="4">Section D</option>
                  </select>
                </div>
                <div className="mb-3 col-12 d-flex gap-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="user-gender"
                      id="gender-male"
                    />
                    <label className="form-check-label" htmlFor="gender-male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="user-gender"
                      id="gender-female"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gender-female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
