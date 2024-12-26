import React, { useState } from "react";
import "./HomePage.css";
import Card from "./Card";
import HP1 from '../assets/images/HP1.jpg';
import HP2 from '../assets/images/HP2.jpg';
import AP1 from '../assets/images/AP1.jpg';
import AP2 from '../assets/images/AP2.jpg';
import AP3 from '../assets/images/AP3.jpg';
import MV1 from '../assets/images/MV1.jpg';
import Car1 from '../assets/images/Car1.jpg';
import Car2 from '../assets/images/Car2.jpg';
import Car3 from '../assets/images/Car3.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = () => {
  const [newLaunchesOnly, setNewLaunchesOnly] = useState(false);

  const handleToggle = () => {
    setNewLaunchesOnly(!newLaunchesOnly);
  };

  return (
    <div className="home-page">
      <h1>Find Where You Belong</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Project Name"
          aria-label="Search by project name"
        />
      </div>

      {/* Filters Section */}
      <div className="filters">
        <select aria-label="Property Type">
          <option value="residential">RESIDENTIAL</option>
          <option value="commercial">COMMERCIAL</option>
        </select>
        <select aria-label="Location">
          <option value="pune">PUNE</option>
          <option value="mumbai">MUMBAI</option>
          <option value="delhi">DELHI</option>
        </select>
        <select aria-label="Property Category">
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="plot">Plot</option>
        </select>
        <select aria-label="Project Status">
          <option value="status">STATUS</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <select aria-label="Budget Range">
          <option value="budget">BUDGET</option>
          <option value="below-50">Below 50 Lakhs</option>
          <option value="50-75">50 Lakhs - 75 Lakhs</option>
          <option value="above-75">Above 75 Lakhs</option>
        </select>
        <button className="reset-btn" aria-label="Reset Filters">
          RESET
        </button>
      </div>

      {/* Explore Homes Section */}
      <h2>Explore Homes</h2>
      <div className="explore-homes">
        <Card
          title="Luxury Apartment"
          description="3 BHK with amazing city view"
          image={HP1}
          footer="Price: $500,000"
        />
        <Card
          title="Luxury Apartment"
          description="3 BHK with amazing city view"
          image={HP2}
          footer="Price: $500,000"
        />
        <Card
          title="Modern Villa"
          description="Spacious villa with a private garden"
          image={MV1}
          footer="Price: $800,000"
        />
        <Card
          title="Affordable Plot"
          description="Perfect plot for building your dream home"
          image={AP1}
          footer="Price: $300,000"
        />
        <Card
          title="Affordable Plot"
          description="Perfect plot for building your dream home"
          image={AP2}
          footer="Price: $300,000"
        />
        <Card
          title="Affordable Plot"
          description="Perfect plot for building your dream home"
          image={AP3}
          footer="Price: $300,000"
        />
      </div>

      {/* Carousel Section */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Car1}
              className="d-block w-100"
              alt="Car1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Car2}
              className="d-block w-100"
              alt="Car2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Car3}
              className="d-block w-100"
              alt="Car3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* New Section */}
<div className="after-carousel-section">
  <h5>Why Choose Us?</h5>
  <p>
    We are dedicated to helping you find the perfect home tailored to your needs and aspirations. With a wide range of properties, from luxury apartments to affordable plots, we ensure quality and satisfaction in every choice. Our team of professionals is committed to providing seamless assistance throughout your property journey. Whether you are looking for a vibrant urban apartment or a serene villa with private gardens, our listings are curated to meet diverse tastes and budgets. Explore your dream home with us and experience unmatched service and transparency. Your comfort and trust are our top priorities, and we aim to make your real estate journey hassle-free and enjoyable. Let us guide you in discovering the place where you truly belong, surrounded by comfort, convenience, and style. Together, we can turn your dream of owning a home into a beautiful reality.
  </p>
</div>
    </div>
  );
};

export default HomePage;
