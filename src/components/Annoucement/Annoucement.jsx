import React from "react";
import img1 from "../assets/cards/img1.png";
import "../Annoucement/Annoucement.scss";

function Annoucement() {
  return (
    <div className="announcement-section">
      <h1 className="heading">Annoucements</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-container ">
              <img className="card-img" src={img1} alt="image" />
              <h5 className="title">
                2021 Annual Report
                <br />
                <a href="#">Read more</a>
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card-container ">
              <img src={img1} alt="image" />
              <h5 className="title">
                A Look into the future
                <br />
                <a href="#">Read more</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Annoucement;
