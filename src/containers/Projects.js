import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import Card from "../components/Card";

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

class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <br />
        <div className="black">
          <Flex flexWrap="wrap">
            <Box width={1}>
              <Title>Projects</Title>
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Fibonacci Visualiser" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="D&D Toolkit" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Cat UI" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Inspiration API" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Home Server" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Dublin Bikes" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Docs" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Vixyn Portfolio" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Twitch Bot" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Twitter Bot" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Pong in JS" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Developyr" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="React Auth0" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Node Auth0" />
            </Box>
            <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
              <Card title="Data Analytics" />
            </Box>
          </Flex>
        </div>
        <br />
      </Wrapper>
    );
  }
}

export default Projects;
