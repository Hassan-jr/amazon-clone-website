
import React from 'react'

import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./signup.css";
import FormInput from "../components/FormInput";
import Btn from  "../components/btn"
import Logo from "../img/navlogo.png"
import { Link } from 'react-router-dom';

const Registration= () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
   
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // onclick
  let navigate = useNavigate();
  function handleClick ()
  {
    const  User ={
     
      name:  values.username,
      email: values.email,
      password: values.password,
    }


    localStorage.setItem ('user', JSON.stringify(User))
    // localStorage.removeItem('user')
   //user = JSON.parse(localStorage.getItem('user'))
       navigate ("/")
       window.location.reload();
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <Link to = "/">
          <img className='logo' src={Logo} alt="" />
          </Link>
        <h3>Create account</h3>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div onClick={handleClick}>
        <Btn  title = 'continue' />
        </div>
      
      </form>
    </div>
  );
};

export default Registration;