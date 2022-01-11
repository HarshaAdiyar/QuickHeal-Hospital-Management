import React from "react";
import Notes from "./Notes";
// import logo from "../public/patient.gif";
const Patient = (props) => {
  return (
    <div className="row">
      <div className="col">
        <img src="/patient1.gif" alt="..." />
      </div>
      <div className="col">
        <Notes name={props.name} />
      </div>
    </div>
  );
};

export default Patient;
