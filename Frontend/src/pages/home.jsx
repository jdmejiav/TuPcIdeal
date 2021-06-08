import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Home/body";
import { FooterContainer } from "../components/footer/containers/footer";
import ParticleComponent from "../components/particles";

import "../styles/home.css";
export default class Home extends Component {

  render() {
    return (
      <div className="container-home">
        <Navbar />
        <ParticleComponent/>
        <Body></Body>
        <FooterContainer />
      </div>
    );
  }
}
