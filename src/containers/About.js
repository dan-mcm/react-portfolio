import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-left: 0.3em;
  margin-right: 0.3em;
  border-bottom: 2px solid darkred;
  font-size: 200%;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid grey;
`;

class About extends Component {
  render() {
    return (
      <div>
        <br/>
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>About</Title>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default About;
