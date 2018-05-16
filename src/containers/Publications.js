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

const SubTitle = styled.h1`
  color: darkred;
  border-bottom: 0.1em solid black;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2em;
  border: 2px solid grey;
`;

const Linkage = styled.a`
  color: darkred;
`
class Publications extends Component {
  render() {
    return (
      <div>
        <br />
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>Publications</Title>
              </Box>
              <Box width={1}>
                <Wrapper className="white">
                  <SubTitle>DEV.TO</SubTitle>
                  <br />
                  <Linkage href="https://dev.to/daniel40392/leveling-up-from-create-react-app-to-express--some-neat-styling-libraries-130p">
                    Leveling Up: From Create-React-App to Express (& some neat
                    styling libraries)
                  </Linkage>
                  <br />
                  <br />
                  <Linkage href="https://dev.to/daniel40392/visualizing-fibonacci-for-the-music-lover-in-you-2609">
                    Visualizing Fibonacci: For the Music Lover in You!
                  </Linkage>
                  <br />
                  <br />
                </Wrapper>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default Publications;
