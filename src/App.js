import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SkillDisplay from "./components/SkillDisplay";
import "./App.css";

/* Image Imports */
import flk from "./skills/flask.png";
import htmlcs from "./skills/htmlcssjs.png";
import msp from "./skills/mysqlphp.png";
import re from "./skills/react.png";
import py from "./skills/python.png";
import ja from "./skills/java.png";
import ba from "./skills/bash.png";
import p3 from "./skills/processing.png";
import gan from "./skills/googleanalytics.png";
import gad from "./skills/googleadwords.png";
import sca from "./skills/scala.png";
import play from "./skills/play.png";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />

        <SkillDisplay
        title='Web Development'
        images={[flk, htmlcs, msp, re]}
        />

        <SkillDisplay
        title='Programming Languages'
        images={[py, ja, ba, p3]}
        />

        <SkillDisplay
        title='Other Skills'
        images={[sca, gad, gan, play]}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
