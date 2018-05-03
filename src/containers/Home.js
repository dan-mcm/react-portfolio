import React, { Component } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SkillDisplay from "../components/SkillDisplay";

/* Image Imports */
import flk from "../images/skills/flask.png";
import htmlcs from "../images/skills/htmlcssjs.png";
import msp from "../images/skills/mysqlphp.png";
import re from "../images/skills/react.png";
import py from "../images/skills/python.png";
import ja from "../images/skills/java.png";
import ba from "../images/skills/bash.png";
import p3 from "../images/skills/processing.png";
import gan from "../images/skills/googleanalytics.png";
import gad from "../images/skills/googleadwords.png";
import sca from "../images/skills/scala.png";
import play from "../images/skills/play.png";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <br />
        <Banner />
        <SkillDisplay title="Web Development" images={[flk, htmlcs, msp, re]} />
        <SkillDisplay title="Programming Languages" images={[py, ja, ba, p3]} />
        <SkillDisplay title="Other Skills" images={[sca, gad, gan, play]} />
        <br />
      </Wrapper>
    );
  }
}

export default Home;
