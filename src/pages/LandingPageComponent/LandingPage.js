import React from "react";
import "./LandingPage.css";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBarComponent/TopBar";
import NavBar from "../../components/NavBarComponent/NavBar";
import Buttons from "../../components/ButtonsComponent/Buttons";

function LandingPage() {
  return (
    <div>
      <TopBar topBarMessage="All orders over $50 qualify for FREE SHIPPING!" />
      <NavBar currentPage="landing" />
      <div className="col-12 px-0 landing-jumbo row mx-0">
        <div className="col-12 col-md-4 jumbo-text">
          <h1>Connecting Farmers to Investors</h1>
          <Link to="/auth/signup">
            <Buttons btnClass="btn-custom-green" buttonLabel="Get Started" />  
          </Link>
        </div>
        <div className="col-12 col-md-6 jumbo-fruits ml-auto">

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
