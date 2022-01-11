import React, { useState } from "react";
// import { useHistory } from "react-router";

const Fetchuser = () => {
  const response = fetch("http://localhost:5000/api/auth/getuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const user = response;
  console.log(user);

  //save the auth token and redirect
  //   JSON.parse(localStorage.setItem(user));

  return <div></div>;
};

export default Fetchuser;
