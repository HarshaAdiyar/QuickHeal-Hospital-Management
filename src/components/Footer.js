import React from "react";

export default function Footer(props) {
  var myStyle = {
    color: "white",
  };
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-4">
          <h4 style={myStyle}>
            <strong>
              <i class="fab fa-quinscape"></i>
              {props.title}
            </strong>
          </h4>
          <p style={myStyle}>
            &nbsp;&nbsp;&nbsp;<strong>Get Well Soon Here</strong>
          </p>
          <br />
          <br />
        </div>

        <div className="col-md-4">
          <h4 style={myStyle}>
            <strong>Our Services</strong>
          </h4>
          <dl>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/">
                Home
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/about">
                About Us
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/connect">
                Connect
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/">
                Login
              </a>
            </li>
          </dl>
          <br />
        </div>
        <div className="col-md-4">
          <h4 style={myStyle}>
            <strong>Follow Us</strong>
          </h4>
          <dl>
            <li style={{ listStyle: "none" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/profile.php?id=100074060727876"
              >
                <i class="fab fa-facebook-square"> Facebook</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/_quickheal_/"
              >
                <i class="fab fa-instagram-square"> Instagram</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/">
                <i class="fab fa-twitter-square"> Twitter</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/">
                <i class="fab fa-linkedin"> LinkedIn</i>
              </a>
            </li>
          </dl>
        </div>
      </div>
      <br />
      <div
        style={
          ({ padding: "2%" },
          {
            textAlign: "center",
          })
        }
      >
        <strong style={{ color: "white" }}>
          {" "}
          &copy; Copyright 2021-22@wt.project
        </strong>
      </div>
    </div>
  );
}
