import React from "react";
import { Link } from "react-router-dom";
export default function Buttons() {
  // function admin() {
  //     var x=document.getElementById("Admin");
  //     const value=x.id;
  //     // console.log("true");

  // }
  
  return (
    <div
      style={{
        backgroundImage: "url(/syringe2.gif)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
     
    >
     
      <div
        className="container my-5 "
        style={{
          textAlign: "center",
          paddingTop: "0%",
          paddingBottom: "20%",

          backgroundImage: "url(/syringe2.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          
        }}
        
      >
        {/* <img  src="https://sgmh.org/wp-content/uploads/2018/02/sgmh-emergency-services3000x2000-1260x840.jpeg" alt="..."/> */}
        <div style={{paddingTop:"0%"}} >
        <button type="button" className="btn btn-dark my-3" id="Admin "  >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="login-admin"
              >
            Admin
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" id="Doctor "  >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="login-doctor"  
          >
            Doctor
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" id="Nurse "  >
          <Link  
            style={{ textDecoration: "none", color: "white" }}
            to="login-nurse"
          >
            Nurse
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" id="Receptionist"  >
          <Link  
            style={{ textDecoration: "none", color: "white" }}
            to="login-recep"
          >
            Receptionist
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" id="Patient"  >
          <Link
          
            style={{ textDecoration: "none", color: "white" }}
            to="login-patient"
          >
            Patient
          </Link>
        </button>
       
        {/* <button type="button" className="btn btn-outline-info">Info</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-outline-dark">Dark</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
      </div>
    </div>
    </div>
  );
}

// onClick={e => this.handleInput(e, "id")}
