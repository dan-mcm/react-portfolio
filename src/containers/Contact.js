import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  padding: 20px;
  b: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <br />
        <div className="black">
          <Flex flexWrap="wrap">
            <Box width={1}>
              <Title>Contact</Title>
            </Box>
          </Flex>
        </div>
        <br />
      </Wrapper>
    );
  }
}

export default Contact;
