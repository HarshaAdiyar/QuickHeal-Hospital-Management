import React from "react";
import { Link } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <div className="d-grid gap-2 col-6 mx-auto">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <br /> <br />
        <h2 style={{ textAlign: "center" }}>Welcome to Admin page</h2>
        <button className="btn btn btn-info " type="button" value="SignUp">
          <Link to="/signup">
            <i className="fas fa-user-plus"> Registration</i>
          </Link>
        </button>
        <br />
        <div class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Link>
              {" "}
              <i className="fas fa-user-plus"> Recruitment</i>
            </Link>
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item">
                <Link to="/admin-doctor-login" name="Doctor ">
                  <i className="fas fa-user-plus"> Doctor</i>
                </Link>
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                <Link to="/admin-nurse-login" name="Nurse ">
                  <i className="fas fa-user-plus"> Nurse</i>
                </Link>
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                <Link to="/admin-recep-login" name="Receptionist ">
                  <i className="fas fa-user-plus"> Receptionist</i>
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <button className="btn btn btn-info" type="button" value="Appointment">
          <Link to="/admin-patient-login">
            <i className="fas fa-user-plus"> Patient Appointment</i>
          </Link>
        </button>
        <br /> <br /> <br />
      </div>
    </div>
  );
}
