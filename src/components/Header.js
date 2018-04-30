import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import me from "../images/otherimages/DanHat.jpg";
import background from "../images/otherimages/ep_naturalblack.png";

const Image = styled.img`
  vertical-align: middle;
  height: 4em;
  width: 4em;
  border-radius: 200px;
  border: 2px solid grey;
`;

const Wrapper = styled.h1`
  border-bottom: 2.5px solid lightgrey;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  vertical-align: middle;
  line-height: 100px;
  background-image: url(${background});
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={[1, 1 / 4]}>
            <Image src={me} />
          </Box>
          <Box px={2} py={1} width={[1, 3 / 4]}>
            <h1>(Daniel McMahon) => Portfolio</h1>
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}

export default Header;
