// import { useState } from "react"
import React from "react";

export default function Connect() {
  return (
    <>
      <div className="container my-5">
        <div className="row my-3">
          <div className="col-md-4 " style={{ width: 18 + "em" }}>
            <img
              style={({ height: "300px" }, { width: "300px" })}
              src="https://images.financialexpress.com/2017/12/cats-21-1.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-4 mx-5 px-5 my-2">
            <h5 className="">
              <b>Davanagere</b>
            </h5>
            <p>
              Vijayanagar 1st cross, M G Road , Davanagere, Karnataka - 567893
            </p>
            <p>
              Email : <a href="/connect">quickheal@gmail.com</a>
            </p>
            Contact : <a href="/connect">0283-943423</a>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-4 " style={{ width: 18 + "em" }}>
            <img
              style={({ height: "300px" }, { width: "300px" })}
              src="https://ewscripps.brightspotcdn.com/83/c1/207e538a4daaa8d1ee021e725b2f/pch-exterior-night.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-4 mx-5 px-5 my-3">
            <h5 className="">
              <b>Mysore</b>
            </h5>
            <p>Vijayanagar 1st cross, M G Road , Mysore, Karnataka - 567893</p>
            <p>
              Email : <a href="/connect">quickheal@gmail.com</a>
            </p>
            Contact : <a href="/connect">0283-943423</a>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-4 " style={{ width: 18 + "em" }}>
            <img
              style={({ height: "300px" }, { width: "300px" })}
              src="http://healthcare.wsp-pb.com/wp-content/uploads/2017/09/engineering-humber-river-hospital.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-4 mx-5 px-5 my-3">
            <h5 className="">
              <b>Belgaum</b>
            </h5>
            <p>
              Tilakwadi 1st cross, Congress Road , Belgaum, Karnataka - 590033
            </p>
            <p>
              Email : <a href="/connect">quickheal@gmail.com</a>
            </p>
            Contact : <a href="/connect">0283-943423</a>
          </div>
        </div>
      </div>
    </>
  );
}
