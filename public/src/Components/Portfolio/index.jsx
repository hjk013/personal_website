import "./portfolio.scss";
import React from "react";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";

const Portfolio = () => (
  <div id="portfolio">
    <LaptopBreakpoint>
      <div className="portfolio-title">
        <h1>Most Recent Projects</h1>
        <hr className="portfolio-hr" />
      </div>
      <div className="portfolio-container">
        <div className="card">
          <div className="card-side card-side-front">
            <div className="card__picture card__picture--1" />
            <h4 className="card__heading">
              <span className="card__heading-span">Currently Viewing</span>
            </h4>
            <div className="card__details">
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back ">
            <h4 className="card__back-title">Personal Website</h4>
            <div className="portfolio-button-container">
              <a href="#" className="portfolio-button">
                Details
              </a>
              <a href="#" className="portfolio-button">
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-side card-side-front">
            <div className="card__picture card__picture--2" />
            <h4 className="card__heading">
              <span className="card__heading-span">Amazon System Design</span>
            </h4>
            <div className="card__details">
              <ul>
                <li>Node.js</li>
                <li>Postgres</li>
                <li>Nginx</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back ">
            <h4 className="card__back-title">Amazon System Design</h4>
            <div className="portfolio-button-container">
              <a href="#" className="portfolio-button">
                Details
              </a>
              <a href="#" className="portfolio-button">
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-side card-side-front">
            <div className="card__picture card__picture--3" />
            <h4 className="card__heading">
              <span className="card__heading-span">Airbnb Listings Page</span>
            </h4>
            <div className="card__details">
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back ">
            <h4 className="card__back-title">Airbnb Listings Page</h4>
            <div className="portfolio-button-container">
              <a href="#" className="portfolio-button">
                Details
              </a>
              <a href="#" className="portfolio-button">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </LaptopBreakpoint>
  </div>
);

export default Portfolio;
