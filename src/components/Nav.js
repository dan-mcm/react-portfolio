import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import navImage from "../images/otherimages/ep_naturalwhite.png";
import navImageBlack from "../images/otherimages/ep_naturalblack.png";

const Wrapper = styled.div`
  background-image: url(${navImageBlack});
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`;

const InnerWrapper = styled.div`
  max-width: 80%;
  margin: auto;
`;

const Navigation = styled.div`
  background-color: black;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Linkage = styled(Link)`
  font-size: large;
  color: white;
  text-decoration: bold;
  padding: 1em;
  width: 100%;
  height: 100%;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Boxage = styled(Box)`
  border: 2px solid transparent;
  &:hover{
    background-image: url(${navImage});
    border: 2px solid grey;
    color: black;
    ${Linkage}{
      color: black;
    }
  }

`

const NavBar = () => (
  <Wrapper>
  <InnerWrapper>
  <Navigation className="black">
    <Flex flexWrap="wrap">
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/">Home</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/about">About</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/projects">Projects</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/publications">Publications</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/contact">Contact</Linkage>
      </Boxage>
    </Flex>
  </Navigation>
  </InnerWrapper>
  </Wrapper>
);

export default NavBar;
