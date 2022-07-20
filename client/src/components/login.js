import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";


const Login = () => {
  const history = useNavigate();

  const divStyles = {
    boxShadow: "1px 2px 9px #F4AAB9",
    maxWidth: "700px",
    padding: "50px",
    maxHeight: "1000px",
    marginLeft: "650px",
    marginTop: "150px",
  };


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginuser = async(e) => {
    e.preventDefault();
    console.log('inside the loginuser');
    const res = await fetch("/login", {
      method : "POST",
      headers : {
        "Content-Type " : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),

    });

    const data = res.json();

    if (res.status === 400 || !data){
      Window.alert("Invalid credentials!!!");
    }
    else{
      Window.alert("login successful");
      history("/");
    }
  }
  return (
    <div className="card mb-3" style={divStyles}>
      <div className="row g-0" style={{color:"black"}}>
        <div style={{ textAlign: "center", paddingBottom: 30, fontSize: 30 }}>
          Sign In
        </div>
        <form method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id=""
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={loginuser}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
