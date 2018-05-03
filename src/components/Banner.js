import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import diploma from "../images/homepage/diploma.png";
import git from "../images/homepage/github.png";
import mail from "../images/homepage/mail.png";

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

const Image = styled.img`
  vertical-align: middle;
  height: 5em;
  width: 5em;
  border-radius: 5em;
  padding: 5px;
  border: 2px solid black;

`;

class Banner extends Component {
  render() {
    return (
      <Outter className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            <Title>At A Glance</Title>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <h3>Contact</h3>
              <Image src={mail}/>
              <br /><br />
              <a href="mailto:daniel40392@gmail.com">daniel40392@gmail.com</a>
            </Wrapper>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <h3>Qualifications</h3>
              <Image src={diploma}/>
              <br /><br />
              <List>
                <li>BA (hons) Music & Geography (2012)</li>
                <br />
                <li>Professional Diploma in Education (2013)</li>
                <br />
                <li>Higher Diploma in Computer Science (2017)</li>
              </List>
            </Wrapper>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <h3>Github</h3>
              <Image src={git}/>
              <br /><br />
              <a href="https://github.com/daniel40392">GitHub</a>
            </Wrapper>
          </Box>
        </Flex>
      </Outter>
    );
  }
}

export default Banner;
