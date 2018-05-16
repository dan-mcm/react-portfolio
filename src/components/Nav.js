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
  color: white;
  text-decoration: bold;
  padding: 1em;
  margin-left: 1em;
  margin-right: 1em;
  &:hover {
    text-decoration: none;
    background-image: url(${navImage});
    color: black;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Boxage = styled(Box)`
  &:hover{
    background-image: url(${navImage});
    color: black;
    Linkage{
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
        <Linkage to="/react-portfolio/">Home</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/react-portfolio/about">About</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/react-portfolio/projects">Projects</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/react-portfolio/publications">Publications</Linkage>
      </Boxage>
      <Boxage px={2} py={3} width={[1, 1 / 5]}>
        <Linkage to="/react-portfolio/contact">Contact</Linkage>
      </Boxage>
    </Flex>
  </Navigation>
  </InnerWrapper>
  </Wrapper>
);

export default NavBar;
