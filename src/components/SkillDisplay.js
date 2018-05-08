import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  border: 2px solid grey;
`;

const Skill = styled.img`
  max-width: 17em;
  max-height: 17em;
  vertical-align: center;
  padding: 2em;
  margin-bottom: 2em;
  border: 2px solid grey;
`;

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

class SkillDisplay extends Component {
  render() {
    return (
      <Wrapper className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            {this.props.title ? <Title>{this.props.title}</Title> : null}
          </Box>
          {this.props.images.map(image => {
            return (
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
                <Skill src={image} className="white" />
              </Box>
            );
          })}
          {/* option to flip cards - css needs tuning...
          <Box px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
            <div className="flip-container">
              <div className="flip-cards">
                <div className="front-card">
                  <p>Sample Card Animation</p>
                  <Skill src={this.props.images[0]} className="white" />
                </div>
                <div className="reverse-card">
                  <p>FLIPPED!</p>
                  <Skill src={this.props.images[0]} className="white" />
                </div>
              </div>
            </div>
          </Box>*/}
        </Flex>
      </Wrapper>
    );
  }
}

export default SkillDisplay;
