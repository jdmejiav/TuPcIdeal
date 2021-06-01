import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Home/body";
import { FooterContainer } from "../components/footer/containers/footer";

import "../styles/home.css";
export default class Home extends Component {

  render() {
    return (
      <div className="container-home">
        <Navbar />
        <Body></Body>
        <FooterContainer />
      </div>
    );
  }
}
