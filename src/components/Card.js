import React from "react";
import CardItem from "./CardItem";
// import { Link } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   // Link
// } from "react-router-dom";

export default function Card() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-4">
          <CardItem
            title="Laboratory"
            link1="/lab"
            desc="Quickheal Health maintains a full-service laboratory performing clinical analysis on blood, tissue and other body fluids.                          "
            link="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
          />
        </div>
        <div className="col-md-4">
          <CardItem
            title="Pharmacy"
            link1="/phar"
            desc="Quickheal Hospital Pharmacy is well-stocked with any medicines
          you may need.One-stop shop for all pharmacy and medical needs."
            link="https://i.pinimg.com/736x/e0/fe/01/e0fe01ba2d69e6b7fbbca832737a20c6.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardItem
            title="Facilities"
            link1="/fac"
            desc="Many people don’t think twice about these facilities unless they need them. It’s good to know more about the facilities."
            link="https://cms.wellcome.org/sites/default/files/styles/image_full_mobile/public/iStock_UnderstandingPatientDataLaunchesToday_201704006_1200x1200.png?itok=J1i1YXVL"
          />
        </div>
      </div>
      <br />
    </div>
  );
}
