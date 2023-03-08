import { React, useState } from "react";
import NavbarHome from "../../layout/NavbarHome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialData = {
  userName: "",
  password: "",
  confirmPassword: "",
  errors: { password: "", confirmPassword: "" },
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = formData.errors;

    switch (name) {
      case "password":
        errors.password =
          value.length < 6 ? "Password must be at least 6 characters long" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value !== formData.password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value, errors });
  };

  const navigate = useNavigate();
  // Handle login
  // Handle password change
const handlePasswordChange = async (e) => {
    e.preventDefault();
    const { userName, password, confirmPassword } = formData;
  
    // Check if there are any errors
    if (formData.errors.password || formData.errors.confirmPassword) {
      alert("Please fix the errors before submitting the form.");
      return;
    }
  
    // Send PUT request to update password
    try {
      const response = await axios.put(`http://localhost:8585/parent/updatePassword/${userName}?password=${password}`);
      console.log(response.data); // Log response data
      alert("Password updated successfully!"); // Show success message
      navigate("/login")
    } catch (error) {
      console.error(error); // Log error
      alert("Failed to update password. Please try again."); // Show error message
    }
  };
 
  
  
  
  
  

  return (
    <>
      <NavbarHome />
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            minHeight: "85vh",
          }}
        >
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div
                className="card border-0 shadow rounded-3 my-5"
                style={{
                  backgroundColor: "#d5f4d5",
                }}
              >
                <div className="card-body p-4 p-sm-5">
                  <h5
                    className="card-title text-center mb-5 fw-light fs-5"
                    style={{ fontFamily: "rubik" }}
                  >
                    Reset Password
                  </h5>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        value={formData.userName}
                        className="form-control"
                        id="userName"
                        placeholder="jhonDoe69"
                        name="userName"
                        onChange={handleChange}
                        required={true}
                      />
                      <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        value={formData.password}
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required={true}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                      {formData.errors.password && (
                        <div className="text-danger">
                          {formData.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        className="form-control"
                        id="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        onChange={handleChange}
                        required={true}
                      />
                      <label htmlFor="floatingPassword">Confirm Password</label>
                      {formData.errors.confirmPassword && (
                        <div className="text-danger">
                          {formData.errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                        onClick={handlePasswordChange}
                        style={{ backgroundColor: "#5EB95E" }}
                      >
                        reset Password
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="">
                      <p className="text-center">
                        Don't have an account? <a href="/signUp">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;