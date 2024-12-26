import React from "react";
import { Link } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img
            src="https://img.icons8.com/?size=100&id=60654&format=png&color=000000"
            alt="Navbar Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />Kings Real Estate</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent">
                Rent
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link> {/* Add Sign Up link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link> {/* Add Sign Up link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
