import React from "react";
import photo from "../images/loginIcon.png";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  const divStyles = {
    fontWeight: "bold",
    boxShadow: "1px 2px 9px #F4AAB9",
    maxWidth: "1000px",
    maxHeight: '575px',
    marginLeft: '485px',
    marginTop: '150px',
  };
  return (
    <div className="container card" style={divStyles}>
      <form method="">
        <div className="row">
          <div
            id="photo"
            className="col-md-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={photo} alt="loginIcon" />
          </div>
          <div className="col-md-4" id="about">
            <div className="content" style={{color:"black"}}>
              <h4>Name</h4>
              <h5>profession</h5>
            </div>
          </div>
          <div className="col-md-2" id="edit">
            <input
              type="submit"
              className="form-control"
              value="edit profile"
            />
          </div>
          <div className="row" style={{color:"black"}}>
            <div className="col-md-4 mt-4 ml-1" id="links">
              <h6>Name</h6>
              <h6>profession</h6>
              <h6>profession</h6>
              <h6>profession</h6>
              <h6>profession</h6>
              <h6>profession</h6>
              <h6>profession</h6>
            </div>
            <div className="col-md-4">
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    to="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Tab
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    to="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    Tab 2
                  </Link>
                </li>
              </ul>

              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                   <div className="row">
                    <div className="col-md-6">
                      <h6>User Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>Id:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>7894562313432</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
