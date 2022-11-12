import React from 'react'
import { useState, useEffect } from 'react';
import "./SignIn.css";
import photo from "./assets/images/sign_in_page.png";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import mainPage from "./components/SearchBar";

const SignIn = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    alert(`Successfully Signed In!`);
    setIsSubmit(true);
    navigate("../Collections");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
    <div className='mainContainer'>
    <div className='sign_in_img'>
    <img src={photo} height="800rem" width="800rem"></img>
    </div>
    <div className="container">
      
      <h1>Sign In</h1>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )} */}

      <form onSubmit={handleSubmit}>
      
        {/* <div className="ui divider">
        </div> */}
        <div className="ui form">
          <div className="field">
            {/* <label>Username</label> */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              required="required"
              value={formValues.username}
              onChange={handleChange}
            />
            <span>Username</span>
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            {/* <label>Email</label> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              required="required"
              value={formValues.email}
              onChange={handleChange}
            />
            <span>Email</span>
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            {/* <label>Password</label> */}
            <input
              type="password"
              name="password"
              //placeholder="Password"
              required="required"
              value={formValues.password}
              onChange={handleChange}
            />
            <span>Password</span>
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue heroContainerButton">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default SignIn