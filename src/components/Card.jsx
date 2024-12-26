import React from "react";
import './Card.css';

const Card = ({ title, description, image, footer, children }) => {
  return (
    <div className="card">
      {/* Optional Image */}
      {image && <img src={image} alt={title} className="card-image" />}
      
      <div className="card-body">
        {/* Optional Title */}
        {title && <h3 className="card-title">{title}</h3>}
        
        {/* Optional Description */}
        {description && <p className="card-description">{description}</p>}
      </div>

      {/* Optional Footer */}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
