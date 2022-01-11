import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Home(props) {
  let user = localStorage.getItem("token");
  // const value = user.name;
  console.log(user);
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>
              <i class="fab fa-quinscape"></i>
              {props.title}
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex flex-row-reverse bd-highlight mx-3">
            {" "}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {!localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <i className="fa-thin fa-house"></i>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      <i className="fas fa-home"> Home</i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      {/* {props.aboutText} */}
                      <i className="fas fa-plus-square"> About</i>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/connect" ? "active" : ""
                      }`}
                      to="/connect"
                    >
                      <i className="fas fa-envelope"> Connect</i>
                      {/* {props.aboutText1} */}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
                      }`}
                      to="/login"
                    >
                      <i className="fas fa-sign-in-alt"> Login</i>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/signup" ? "active" : ""
                      }`}
                      to="/signup"
                    >
                      <i className="fas fa-user-plus"> Signup</i>
                    </Link>
                  </li> */}
                </>
              ) : (
                <>
                  <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                  </button>
                </>
              )}
            </ul>
            {/* <form className="d-flex">
              <Link className="btn btn-primary" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary" to="/singup" role="button">
                Signup
              </Link>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  aboutText1: PropTypes.string,
};

Home.defaultProps = {
  title: "QuickHeal",
  aboutText: "About",
  aboutText1: "Connect",
};
