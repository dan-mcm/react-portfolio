import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Chart from "./Chart";


const Outter = styled.div`
  border: 2px solid grey;
  padding-bottom: 2em;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid grey;
  width: 80%;
  margin: auto;
  padding: 1em;
`;

const Title = styled.h1`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

class ChartComponent extends Component {
  render() {
    return (
      <Outter className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            <Title>Skill Snapshot</Title>
          </Box>
          <Box px={2} py={4} width={1}>
            <Wrapper className="chartBackground">
              <Chart />
            </Wrapper>
          </Box>
        </Flex>
      </Outter>
    );
  }
}

export default ChartComponent;
