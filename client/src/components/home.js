import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div id="intro-example" className="p-5 text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Hello</h1>
              <h5 className="mb-4">
                This is MERN project.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
