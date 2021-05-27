import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { FooterContainer } from "../components/footer/containers/footer";
import Body from "../components/resultados/resultados";

export default class Resultados extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <FooterContainer/>
      </div>
    );
  }
}
