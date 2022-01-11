import React from "react";

export default function carausel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/photos/close-up-of-doctor-is-showing-medical-analytics-data-medical-concept-picture-id1164573809?b=1&k=20&m=1164573809&s=170667a&w=0&h=WaTkKu9eytdmv4IAuD6r9Sg6JEVv-N8I8IGa2xkXVEM="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/photos/closeup-of-dentists-hands-and-dental-equipment-picture-id544668418?k=20&m=544668418&s=612x612&w=0&h=WEi6IApdQolVHP-LXX060tYDcD2NavomRqTeFhEHooU="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/photos/doctor-draws-a-cardiogram-heart-picture-id644976664?k=20&m=644976664&s=612x612&w=0&h=tEQRGi9zy9kxE6qK1qoipyAPaw_S5tVoraAHbqEfJYY="
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
