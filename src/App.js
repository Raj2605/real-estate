import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import HomePage from "./components/HomePage";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import PropertyDetail from "./components/PropertyDetail"; 
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

// Custom hook to check the current location and determine if the Navbar should be hidden
const useHideNavbarOnFrontPage = () => {
  const location = useLocation();
  return location.pathname === "/"; // Hide navbar only on the FrontPage
};

// Create a wrapper for Navbar to handle conditional rendering
const NavbarWrapper = () => {
  const hideNavbar = useHideNavbarOnFrontPage();
  return (
    <>
      {!hideNavbar && <Navbar />} {/* Navbar will not be shown on the FrontPage */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NavbarWrapper /> {/* Conditionally show or hide Navbar */}
      <Routes>
        <Route path="/" element={<FrontPage />} /> {/* Front page */}
        <Route path="/home" element={<HomePage />} /> {/* Home Page */}
        <Route path="/buy" element={<Buy />} /> {/* Buy Page */}
        <Route path="/rent" element={<Rent />} /> {/* Rent Page */}
        <Route path="/services" element={<Services />} /> {/* Services Page */}
        <Route path="/property/:propertyName" element={<PropertyDetail />} /> {/* Property Detail Page */}
        <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
        <Route path="/signin" element={<SignIn />} /> {/* Add SignUp route */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
