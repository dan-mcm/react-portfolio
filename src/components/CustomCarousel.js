import React, { Component } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import hip from "../codememes/joke-hip.jpg";
import bugs from "../codememes/joke-99-bugs.jpg";
import motto from "../codememes/joke-life-motto.jpg";
import colon from "../codememes/joke-semi-colon.jpg";

const Wrapper = styled.div`
  margin-bottom: 50px;
`
const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
  margin-left:100px;
  margin-right:100px;
`;

class CustomCarousel extends Component {
  render() {
    return (
      <Wrapper>
        <Title>The Facts of Life</Title>
        <Carousel autoplay>
          <div>
            <img src={bugs}/>
          </div>
          <div>
            <img src={motto}/>
          </div>
          <div>
            <img src={colon}/>
          </div>
          <div>
            <img src={hip}/>
          </div>
        </Carousel>
      </Wrapper>
    );
  }
}

export default CustomCarousel;
