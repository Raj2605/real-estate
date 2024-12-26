import React from 'react';
import { useParams } from 'react-router-dom';
import HP1 from '../assets/images/HP1.jpg';
import HP2 from '../assets/images/HP2.jpg';
import AP1 from '../assets/images/AP1.jpg';
import AP2 from '../assets/images/AP2.jpg';
import './PropertyDetails.css';

const PropertyDetail = () => {
  const { propertyName } = useParams();
  const propertyDetails = {
    "pune-villa": {
      title: "Luxury Villa in Pune",
      images: [HP1, HP2],
      description: "Spacious 5 BHK villa with a beautiful garden in the heart of Pune. Ideal for family living, this villa offers ample space and luxury in one of Pune's best locations.",
      price: "₹5 Crores"
    },
    "pune-villa-2": {
      title: "Modern Villa in Pune",
      images: [HP1, HP2],
      description: "4 BHK villa with modern amenities and excellent connectivity. Located in a growing residential area, this property promises both comfort and convenience.",
      price: "₹3.5 Crores"
    },
    "mumbai-plot": {
      title: "Residential Plot in Mumbai",
      images: [AP1, AP2],
      description: "Prime location plot suitable for residential development in Mumbai. This plot offers great potential for investment in a rapidly developing area.",
      price: "₹2.5 Crores"
    },
    "delhi-apartment": {
      title: "Apartment in Delhi",
      images: [HP1, HP2],
      description: "Luxurious 3 BHK apartment in a premium society in Delhi. A modern home equipped with the latest amenities, perfect for urban living.",
      price: "₹2 Crores"
    }
  };

  // Retrieve the property based on the URL parameter (propertyName)
  const property = propertyDetails[propertyName];

  // Fallback if the property is not found
  if (!property) {
    return <h2>Property not found!</h2>;
  }

  return (
    <div className="property-detail">
      <h1 className="property-title">{property.title}</h1>
      <div className="image-gallery">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property Image ${index + 1}`} className="property-image" />
        ))}
      </div>
      <p className="property-description">{property.description}</p>
      <div className="property-price">
        <h3>Price: {property.price}</h3>
      </div>
    </div>
  );
};

export default PropertyDetail;
