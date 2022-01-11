import React from "react";
import Carausel1 from "./Carausel1";
import Card from "./Card";
import Details from "./Details";

const Main = () => {
  return (
    <div>
      <div className="container my-4 ">
        <Carausel1 />
      </div>
      <div className="container">
        <Details />
      </div>
      <div className="container">
        <Card />
      </div>
    </div>
  );
};

export default Main;
