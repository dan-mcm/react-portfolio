import React, { Component } from "react";
import { Carousel, Row, Col, Button } from "antd";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.css";

import Chart from "./components/Chart";
import Banner from "./components/Banner";

// THIS IS CRAZY - should be props of an element!
import gh from "./socialicons/gh.png";
import li from "./socialicons/li.png";
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

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2.5px solid grey;
  width: 80%;
  margin: auto;
  padding: 25px;
`;

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-family: Open Sans;
  font-size: 200%;
`;

const List = styled.ul`
  list-style-type: none;
  color: black;
`;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Banner />

        <Row gutter={8}>
          <Title>At A Glance</Title>

          <Col span={12}>
            <Chart />
          </Col>
          <Col span={12}>
            <Wrapper>
              <h3>Qualifications:</h3>
              <List>
                <li>BA (hons) Music & Geography (2012)</li>
                <li>Professional Diploma in Education (2013)></li>
                <li>Higher Diploma in Computer Science (2017)</li>
              </List>
              <br />
              <h3>
                Check out my code -->{" "}
                <a href="https://github.com/daniel40392">GitHub</a>
              </h3>
              <br />
              <h3>
                Check out my other website projects --><a href="#">
                  {" "}
                  Music Centre
                </a>, <a href="#">Sienimiili</a>
              </h3>
              <br />
              <h3>
                Contact at{" "}
                <a href="mailto:daniel40392@gmail.com">daniel40392@gmail.com</a>
              </h3>
            </Wrapper>
          </Col>
        </Row>

        <div />

        <Title>Web Development</Title>

        <Row gutter={16}>
          <Col span={4} />
          <Col span={4}>
            <div className="port">
              <img src={flk} />
              <div className="unseen">
                <p>yo!</p>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={htmlcs} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={msp} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={re} />
              </p>
            </div>
          </Col>
          <Col span={4} />
        </Row>

        <Title>Programming Languages</Title>

        <Row gutter={16}>
          <Col span={4} />
          <Col span={4}>
            <div className="port">
              <p>
                <img src={py} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={ja} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={ba} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={p3} />
              </p>
            </div>
          </Col>
          <Col span={4} />
        </Row>

        <Title>Other Skills</Title>

        <Row gutter={16}>
          <Col span={4} />
          <Col span={4}>
            <div className="port">
              <p>
                <img src={sca} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={gad} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={gan} />
              </p>
            </div>
          </Col>
          <Col span={4}>
            <div className="port">
              <p>
                <img src={play} />
              </p>
            </div>
          </Col>
          <Col span={4} />
        </Row>

        <footer>
          <p>
            <a href="https://www.linkedin.com/in/daniel-mcmahon-201a6b8a">
              <img src={li} />
            </a>&emsp; &copy; Developyr 2018 &emsp;<a href="https://github.com/daniel40392">
              <img src={gh} />
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
