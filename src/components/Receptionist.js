import React from "react";
import { Link } from "react-router-dom";

const Receptionist = () => {
  return (
    <div>
      <div>
        <div className="d-grid gap-2 col-6 mx-auto">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <button className="btn btn-info" type="button" value="SignUp">
            <Link
              // className={`nav-link ${
              //   location.pathname === "/signup" ? "active" : ""
              // }`}
              to="/signup"
            >
              <i className="fas fa-user-plus"> Patient Registration</i>
            </Link>
          </button>
          {/* <br />
            <button
              className="btn btn-outline-secondary "
              type="button"
              value="Recuruitment"
            >
              <Link to="addnote">
                {" "}
                <i className="fas fa-user-plus"> Recruitment</i>
              </Link>
            </button> */}
          <br />
          <button
            className="btn btn btn-info"
            type="button"
            value="Appointment"
          >
            <Link to="/admin-patient-login">
              {" "}
              <i className="fas fa-user-plus"> Patient Appointment</i>
            </Link>
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Receptionist;
