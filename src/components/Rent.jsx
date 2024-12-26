import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; 
import HP1 from '../assets/images/HP1.jpg';
import HP2 from '../assets/images/HP2.jpg';
import AP3 from '../assets/images/AP3.jpg';
import MV1 from '../assets/images/MV1.jpg';

const Rent = () => {
  return (
    <div>
      <h1>Rent Property</h1>
      <p>Discover rental properties available in various cities for your needs.</p>

      <div className="property-cards">
        {/* Property 1 - Apartment in Bangalore */}
        <Link to="/rent-property/bangalore-apartment">
          <Card
            title="Modern Apartment in Bangalore"
            description="3 BHK apartment with a stunning city view and modern interiors."
            image={HP1}
            footer="Rent: ₹50,000/month"
          />
        </Link>

        {/* Property 2 - Studio Apartment in Mumbai */}
        <Link to="/rent-property/mumbai-studio">
          <Card
            title="Studio Apartment in Mumbai"
            description="Cozy studio apartment in a prime location, perfect for singles."
            image={HP2}
            footer="Rent: ₹25,000/month"
          />
        </Link>

        {/* Property 3 - Villa in Hyderabad */}
        <Link to="/rent-property/hyderabad-villa">
          <Card
            title="Luxury Villa in Hyderabad"
            description="4 BHK villa with a private pool and spacious garden."
            image={MV1}
            footer="Rent: ₹1,00,000/month"
          />
        </Link>

        {/* Property 4 - Shared Flat in Pune */}
        <Link to="/rent-property/pune-shared-flat">
          <Card
            title="Shared Flat in Pune"
            description="2 BHK flat in a serene locality, ideal for shared living."
            image={HP2}
            footer="Rent: ₹15,000/month per person"
          />
        </Link>

        {/* Property 5 - Office Space in Delhi */}
        <Link to="/rent-property/delhi-office-space">
          <Card
            title="Office Space in Delhi"
            description="Fully furnished office space in a business district."
            image={AP3}
            footer="Rent: ₹75,000/month"
          />
        </Link>
      </div>
    </div>
  );
};

export default Rent;
