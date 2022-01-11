import React from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {
  return (
    <div>
      <div className="card" style={{ width: 18 + "em" }}>
        <img src={props.link} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <Link to={props.link1} className="btn btn-primary">
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
}
