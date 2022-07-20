import React from "react";
import photo from "../images/registra.jfif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const history = useNavigate();
  const divStyles = {
    boxShadow: "1px 2px 9px #F4AAB9",
    maxWidth: "1000px",
    padding: "50px",
    maxHeight: "1000px",
    marginLeft: "500px",
    marginTop: "150px",
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassword: "",
  });
  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, phone, profession, password, cpassword} = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        profession,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    console.log(res);
    if (res.status == 422) {
      alert("Something went wrong");
    } else {
      alert("You are registered");
      history("/login");
    }
  };
  return (
    <>
      <div className="card mb-3" style={divStyles}>
        <div className="row g-0">
          <div
            style={{
              textAlign: "center",
              paddingBottom: 30,
              fontSize: 30,
              color: "black",
            }}
          >
            Sign Up
          </div>
          <div className="col-md-4 bg-image hover-overlay">
            <img
              src={photo}
              className="img-fluid rounded-start w-100"
              style={{ height: 368 }}
              alt="..."
            />
            <div
              className="mask"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
              }}
            ></div>
          </div>
          <div className="col-md-8">
            <form className="row g-3" style={{ paddingLeft: 32 }} method="POST">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Your name"
                  value={user.name}
                  name="name"
                  autoComplete="off"
                  onChange={handleInput}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Your Email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <input
                  type="number"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Your Phone number"
                  autoComplete="off"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="profession"
                  placeholder="Your Profession"
                  autoComplete="off"
                  value={user.profession}
                  onChange={handleInput}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="cpassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInput}
                />
              </div>
              <div className="col-20 mt-3 d-flex justify-content-around">
                <button
                  type="submit"
                  className="btn btn-outline-dark mt-2"
                  onClick={send}
                >
                  Register
                </button>
                <Link to="/login" className="mt-3">
                  <span> Already Registered?</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
