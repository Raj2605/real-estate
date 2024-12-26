import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Buy.css';
import Buy1 from '../assets/images/Buy1.jpg';
import Buy2 from '../assets/images/Buy2.jpg';
import AP1 from '../assets/images/AP1.jpg';
import HP2 from '../assets/images/HP2.jpg';


const Buy = () => {
  return (
    <div>
      <h1>Buy Property</h1>
      <p>Explore properties available for purchase in different cities.</p>

      <div className="property-cards">
        <Link to="/property/pune-villa">
          <Card
            title="Luxury Villa in Pune"
            description="Spacious 5 BHK villa with a beautiful garden in the heart of Pune."
            image={Buy1}
            footer="Price: ₹5 Crores"
          />
        </Link>
        <Link to="/property/pune-villa-2">
          <Card
            title="Modern Villa in Pune"
            description="4 BHK villa with modern amenities and excellent connectivity."
            image={Buy2}
            footer="Price: ₹3.5 Crores"
          />
        </Link>
        <Link to="/property/mumbai-plot">
          <Card
            title="Residential Plot in Mumbai"
            description="Prime location plot suitable for residential development in Mumbai."
            image={AP1}
            footer="Price: ₹2.5 Crores"
          />
        </Link>
        <Link to="/property/delhi-apartment">
          <Card
            title="Apartment in Delhi"
            description="Luxurious 3 BHK apartment in a premium society in Delhi."
            image={HP2}
            footer="Price: ₹2 Crores"
          />
        </Link>
      </div>
    </div>
  );
};

export default Buy;
