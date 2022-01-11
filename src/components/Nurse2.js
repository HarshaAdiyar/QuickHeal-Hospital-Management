import React from "react";
import Login from "./Login";
import Notes from "./Notes";

export default function Connect(props) {
  const { showAlert } = props;
  return (
    <div className="row">
      <div className="col">
        <Login
          name="Patient"
          value="Get Patient Details"
          showAlert={showAlert}
        />
      </div>
      <div className="col">
        <Notes name={props.name} />
      </div>
    </div>
  );
}
