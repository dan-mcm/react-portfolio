import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Outter = styled.div`
  border: 2px solid grey;
  padding-bottom: 2em;
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid grey;
  width: 80%;
  margin: auto;
  padding: 1em;
`;

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

const List = styled.ul`
  list-style-type: none;
  color: black;
  padding: 0;
`;

class Banner extends Component {
  render() {
    return (
      <Outter className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            <Title>At A Glance</Title>
          </Box>
          <Box px={20} py={1} width={[1]}>
            <Wrapper className="white">
              <h3>Qualifications:</h3>
              <List>
                <li>BA (hons) Music & Geography (2012)</li>
                <li>Professional Diploma in Education (2013)</li>
                <li>Higher Diploma in Computer Science (2017)</li>
              </List>
              <br />
              <h3>
                Check out my code <br />
                <a href="https://github.com/daniel40392">GitHub</a>
              </h3>
              <br />
              <h3>
                Check out my other project <br />
                <a href="#"> Music Centre</a>
              </h3>
              <br />
              <h3>
                Contact at <br />
                <a href="mailto:daniel40392@gmail.com">daniel40392@gmail.com</a>
              </h3>
            </Wrapper>
          </Box>
        </Flex>
      </Outter>
    );
  }
}

export default Banner;
