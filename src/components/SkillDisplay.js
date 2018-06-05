import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  padding-bottom: 1em;
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

const Card = styled.div`
  margin: auto;
  background-color:white;
  color: black;
  max-width: 17em;
  max-height: 17em;
  min-width: 17em;
  min-height: 17em;
  border: 2px solid grey;
  h3{
    border-bottom: 1px solid black;
  }
`

const Boxage = styled(Box)`
  margin: auto;
`

class SkillDisplay extends Component {
  render() {
    return (
      <Wrapper className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            {this.props.title ? <Title>{this.props.title}</Title> : null}
          </Box>
          {this.props.items.map(item => {
            return (
              <Boxage px={2} py={1} width={[1, 1 / 2, 1 / 4]}>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <Skill src={item.image} className="white" />
                  </div>
                  <div className="back">
                    <Card><h3>{item.subtitle}</h3>
                    <p>{item.text}</p></Card>
                  </div>
                </div>
              </div>

              </Boxage>
            );
          })}
        </Flex>
      </Wrapper>
    );
  }
}

export default SkillDisplay;
