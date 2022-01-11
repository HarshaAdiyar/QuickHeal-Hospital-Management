import React from "react";
import "./Pharmacy.css";
export default function Pharmacy() {
  var myStyle = {
    color: "red",
  };
  return (
    <div style={{ backgroundImage: "url(/pharmacy.jpg)" }}>
      <div className="container ">
        <br />
        <h1 id="phar-h1">PHARMACY</h1>
        <br />
        <div>
          The Pharmacy at Quickheal Hospital is well-stocked with any medicines
          you may need. With a simple principle of offering patients maximum
          comfort, we have ensured that patients can quickly get their
          prescriptions refilled without having to go far from the hospital. We
          value your time and help you dedicate more time to take care of your
          loved ones at home. Free yourself from driving down to Pharmacy,
          waiting at the counter for your medicine. Our skilled Pharmacists will
          make certain timely and prompt delivery of your medicines are
          delivered at the comfort of your home and also keep a track of the
          refills. We assure you safe and secure services round the clock. This
          makes us one of the best Pharmacy in Bangalore.
          <br />
          <br />
          <h3 id="phar-h3" style={{ textAlign: "center" }}>
            HIGHLIGHTS
          </h3>
          <br />
          <div className="row">
            <div id="pharcard-div" className="pharcard-div1 col">
              <div style={myStyle} className="ms-5 ps-5">
                <i
                  style={{ fontSize: "200%" }}
                  class="fas fa-prescription-bottle-alt"
                ></i>
              </div>
              <h4 style={myStyle}>Medication Services</h4>
              <dl className="mx-2">
                <li style={{ listStyle: "none" }}>Prescription Compounding</li>
                <li style={{ listStyle: "none" }}>Home Delivery</li>
                <li style={{ listStyle: "none" }}>
                  Flu Shots and Immunizations
                </li>
                <li style={{ listStyle: "none" }}>Durable Medical Equipment</li>
                <li style={{ listStyle: "none" }}>Adherence Packaging</li>
                <li style={{ listStyle: "none" }}>
                  Medication Synchronization
                </li>
                {/* <li style={{ listStyle: "none" }}>
                Medication Therapy Management Services
              </li>
              <li style={{ listStyle: "none" }}>Private Consultation Room</li> */}
              </dl>
            </div>
            <div id="pharcard-div" className="pharcard-div2 col">
              <div style={myStyle} className="ms-5 ps-5">
                <i style={{ fontSize: "200%" }} class="fas fa-archive"></i>
              </div>
              <h4 style={myStyle}>Over The Counter</h4>
              <dl className="mx-2">
                <li style={{ listStyle: "none" }}></li>
                <li style={{ listStyle: "none" }}>
                  Cold and Allergy Medication
                </li>
                <li style={{ listStyle: "none" }}>Vitamins</li>
                <li style={{ listStyle: "none" }}>Oral Health products</li>
                <li style={{ listStyle: "none" }}>First Aid items</li>
                <li style={{ listStyle: "none" }}>Hosiery and socks</li>
                <li style={{ listStyle: "none" }}>Feminine Hygiene products</li>
              </dl>
            </div>
            <div id="pharcard-div" className="pharcard-div3 col">
              <div style={myStyle} className="ps-5 ms-5">
                <i style={{ fontSize: "200%" }} class="fas fa-gift"></i>
              </div>
              <h4 style={myStyle}>Cards & Gifts</h4>
              <dl id="dl-3" className="mx-2">
                <li style={{ listStyle: "none" }}>Cosmetics</li>
                <li style={{ listStyle: "none" }}>Infant Care</li>
                <li style={{ listStyle: "none" }}>Hair Care</li>
                <li style={{ listStyle: "none" }}>Shower and Bath Items</li>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
