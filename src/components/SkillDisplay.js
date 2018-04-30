import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Wrapper = styled.div`
  background-image: url("../images/otherimages/ep_naturalwhite.png");
  margin-top: 2em;
  margin-bottom: 2em;
  border: 2px solid grey;
`;

const Block = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2.5px solid grey;
  height: 300px;
  width: 300px;
  position: relative;
  margin: auto;
`;

const Skill = styled.img`
  max-width: 18em;
  max-height: 18em;
  vertical-align: center;
  padding: 2em;
  margin-bottom: 2em;
`;

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

class SkillDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            {this.props.title ? <Title>{this.props.title}</Title> : null}
          </Box>
          <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
            <Skill src={this.props.images[0]} className="white" />
          </Box>
          <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
            <Skill src={this.props.images[1]} className="white" />
          </Box>
          <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
            <Skill src={this.props.images[2]} className="white" />
          </Box>
          <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
            <Skill src={this.props.images[3]} className="white" />
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}

export default SkillDisplay;
