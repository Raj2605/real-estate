import React from 'react';
import { useParams } from 'react-router-dom';
import './RentPropertyDetail.css'; 

const RentPropertyDetail = () => {
  const { rentPropertyName } = useParams();
  const rentPropertyDetails = {
    "bangalore-apartment": {
      title: "Modern Apartment in Bangalore",
      images: [
        "https://example.com/bangalore-apartment-1.jpg",
        "https://example.com/bangalore-apartment-2.jpg"
      ],
      description: "A 3 BHK apartment located in the heart of Bangalore. It offers modern interiors, a stunning city view, and close proximity to major IT hubs.",
      rent: "₹50,000/month",
      area: "1800 sq. ft.",
      amenities: "Gym, Swimming Pool, 24/7 Security"
    },
    "mumbai-studio": {
      title: "Studio Apartment in Mumbai",
      images: [
        "https://example.com/mumbai-studio-1.jpg"
      ],
      description: "A cozy studio apartment in a prime location of Mumbai, perfect for singles or young professionals looking for convenience.",
      rent: "₹25,000/month",
      area: "500 sq. ft.",
      amenities: "Furnished, Near Public Transport"
    },
    "hyderabad-villa": {
      title: "Luxury Villa in Hyderabad",
      images: [
        "https://example.com/hyderabad-villa-1.jpg",
        "https://example.com/hyderabad-villa-2.jpg"
      ],
      description: "A luxurious 4 BHK villa in Hyderabad with a private pool, large garden, and ample parking space.",
      rent: "₹1,00,000/month",
      area: "4000 sq. ft.",
      amenities: "Private Pool, Garden, 24/7 Security"
    },
    "pune-shared-flat": {
      title: "Shared Flat in Pune",
      images: [
        "https://example.com/pune-shared-flat.jpg"
      ],
      description: "A 2 BHK flat in Pune available for shared living, ideal for students or professionals looking for an affordable and comfortable stay.",
      rent: "₹15,000/month per person",
      area: "1000 sq. ft.",
      amenities: "Furnished, Wi-Fi, Housekeeping"
    },
    "delhi-office-space": {
      title: "Office Space in Delhi",
      images: [
        "https://example.com/delhi-office-space.jpg"
      ],
      description: "A fully furnished office space in a business district of Delhi, perfect for startups or small businesses.",
      rent: "₹75,000/month",
      area: "1500 sq. ft.",
      amenities: "Conference Room, High-speed Internet"
    }
  };

  const property = rentPropertyDetails[rentPropertyName];
  if (!property) {
    return <h2>Property not found!</h2>;
  }

  return (
    <div className="rent-property-detail">
      <h1>{property.title}</h1>
      <div className="image-gallery">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property Image ${index + 1}`} className="property-image" />
        ))}
      </div>
      <p>{property.description}</p>
      <div>
        <h3>Rent: {property.rent}</h3>
        <p>Area: {property.area}</p>
        <p>Amenities: {property.amenities}</p>
      </div>
    </div>
  );
};

export default RentPropertyDetail;
