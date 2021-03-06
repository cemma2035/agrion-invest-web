import React from "react";
import "./Auth.css";
import InputGroup from "../../components/InputGroupComponent/InputGroup";
import Buttons from "../../components/ButtonsComponent/Buttons";

import { Container, Row, Col } from "react-bootstrap";
import SwitchButtons from "../../components/SwitchButtonsComponent/SwitchButtons";
import SignInForm from "../../components/SignInFormComponent/SignInForm";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpFormComponent/SignUpForm";
import logo from '../../images/agrion-logo.png';

function Auth() {
  return (
    <div className="signin-full col-12">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
      </nav>
      <div className="signin-con col-12 col-sm-8 col-md-6 col-lg-4 ml-auto mr-5">
        <SwitchButtons buttonLabel1="Log In" buttonLabel2="Sign Up" />
        <Route path="/auth" exact component={SignInForm} />
        <Route path="/auth/signin" exact component={SignInForm} />
        <Route path="/auth/signup" component={SignUpForm} />
      </div>
    </div>
  );
}

export default Auth;
