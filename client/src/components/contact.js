import React from "react";

const Contact = () => {
  const divStyles = {
    boxShadow: "1px 2px 9px #F4AAB9",
    maxWidth: "1000px",
    padding: "50px",
    maxHeight: "1000px",
    marginLeft: "500px",
    marginTop: "150px",
  };
  return (
    <div className="card" style={divStyles}>
      <h2 style={{ textAlign: "center", paddingBottom: 30, fontSize: 30 ,color:"black"}}>
        Contact Us
      </h2>
      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example1" className="form-control" />
              <label className="form-label" htmlFor="form6Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2" className="form-control" />
              <label className="form-label" htmlFor="form6Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="form6Example3" className="form-control" />
          <label className="form-label" htmlFor="form6Example3">
            Company name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" />
          <label className="form-label" htmlFor="form6Example4">
            Address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form6Example5" className="form-control" />
          <label className="form-label" htmlFor="form6Example5">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="form6Example6" className="form-control" />
          <label className="form-label" htmlFor="form6Example6">
            Phone
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form6Example7"
            rows="4"
          ></textarea>
          <label className="form-label" htmlFor="form6Example7">
            Message{" "}
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
