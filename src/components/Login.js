import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Login(props) {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    name: "",
    design: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        design: credentials.design,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(credentials));

    console.log(json);
    if (json.success) {
      //save the auth token and redirect

      // if (design === props.name) {
      localStorage.setItem("token", json.authtoken);
      history.push(`/${props.name}`);
      props.showAlert("LoggedIn Successfully ", "success");
      // } else {
      //   props.showAlert("Login to Correct Page", "danger");
      //   console.log(newNotes);
      // }
    } else {
      props.showAlert("Invalid Credentials", "danger");
      console.log(credentials.design);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container my-5 mx-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1 className="text-center my-3"> {props.value}</h1>
          <label htmlFor="email" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
