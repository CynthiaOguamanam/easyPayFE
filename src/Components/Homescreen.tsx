import React from "react";
import styled from "styled-components"
import Accept from "./Accept";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Methods from "./Methods";
import Superhero from "./Superhero";
import Team from "./Team/Team";
import Features from "./Features/Features";
import Gateway from "./Gateway/Gateway";

const Homescreen = () => {
  return (
    <Div>
      <Header />
      <Superhero />
      <Team />
      <Gateway/>
      <Methods />
      <Accept />
      <Features/> 
      <br />
      <br />
      <br />
      <Footer />
    </Div>
  );
};

export default Homescreen;

const Div = styled.div`
width: 100%;
`;


