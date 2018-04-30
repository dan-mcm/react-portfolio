import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SkillDisplay from "./components/SkillDisplay";
import CustomCarousel from "./components/CustomCarousel";
import Nav from "./components/Nav";
import "./App.css";

/* Image Imports */
import background from "./images/otherimages/ep_naturalblack.png";
import flk from "./images/skills/flask.png";
import htmlcs from "./images/skills/htmlcssjs.png";
import msp from "./images/skills/mysqlphp.png";
import re from "./images/skills/react.png";
import py from "./images/skills/python.png";
import ja from "./images/skills/java.png";
import ba from "./images/skills/bash.png";
import p3 from "./images/skills/processing.png";
import gan from "./images/skills/googleanalytics.png";
import gad from "./images/skills/googleadwords.png";
import sca from "./images/skills/scala.png";
import play from "./images/skills/play.png";

//  background-image: url(${background});

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <br />
        <br />
        <br />

        <Wrapper>
          <Banner />

          <SkillDisplay
            title="Web Development"
            images={[flk, htmlcs, msp, re]}
          />

          <SkillDisplay
            title="Programming Languages"
            images={[py, ja, ba, p3]}
          />

          <SkillDisplay title="Other Skills" images={[sca, gad, gan, play]} />
        </Wrapper>
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default App;
