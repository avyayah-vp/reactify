import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/images/bg.jpg"
          alt="Background"
          height="650px"
        /> 
        <div className="card-img-overlay d-flex mx-5">
          <div className="div">
            <h5 className="card-title display-3 mb-0 fw-bolder">Rouge Black</h5>
            <p className="card-text fs-3">
              Wear your style.
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
