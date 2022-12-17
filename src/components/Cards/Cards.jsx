import React from "react";
import "../Cards/Cards.scss";
import img1 from "../assets/cards/img1.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Accounts
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            {/* <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="card-container ">
                <img src={img1} alt="image" />
                <h5>Footprint Across Four Continents</h5>
                <button className="cards-btn" type="submit">
                  Proud Heritage
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
