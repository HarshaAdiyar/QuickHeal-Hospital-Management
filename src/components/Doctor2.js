import React from "react";
import { Link } from "react-router-dom";
import "./doctor2.css";
import Notes from "./Notes";

export default function Doctor2(props) {
  var open = function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  var close = function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  return (
    <>
      <div>
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={close}>
            ×
          </a>
          {/* <a href="/">Today's Appointment</a>
          <a href="/">Future Appointment</a> */}
          <Link to="/admin-patient-login">Patient Registration</Link>
        </div>
        <button className="openbtn " onClick={open}>
          ☰ Menu
        </button>
        <div id="main" className="row">
          <div style={{ backgroundImage: "url(/doctor.gif)" }} className="col">
            <p id="idd">
              {" "}
              <b>
                “An apple daily can away doctor but the doctor is cute then
                forgot the fruit.”{" "}
              </b>
            </p>
            <p id="idd">
              <b>“The best doctor gives the least medicines.”</b>
            </p>
            <p id="idd">
              <b>“Sometimes, doctors risk their lives just save others.</b>
            </p>

            <p id="idd">
              <b>
                “I can’t be selfish because I have lots of responsibilities.”
              </b>
            </p>

            <p id="idd">
              <b>“It’s gonna be tough but tough can’t be impossible.”</b>
            </p>

            <p id="idd">
              <b>“DOCTOR such a mindblowing word.”</b>
            </p>

            <p id="idd">
              <b>
                {" "}
                “An amazing doctor is hard to find and impossible to forgot.”
              </b>
            </p>

            <p id="idd">
              <b>“Doctor’s are great as long as you don’t need them.”</b>
            </p>

            <p id="idd">
              <b>
                {" "}
                “Study hard until you can say “I am a doctor” everything is
                gonna be alright.”
              </b>
            </p>
          </div>
          <div className="col">
            <Notes name={props.name} />
          </div>
        </div>
      </div>
    </>
  );
}
