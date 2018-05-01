import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Structure = styled.div`
  min-height: 400px;
  margin: 1em;
`;

const CardTitle = styled.h1`
  color: darkred;
  border-bottom: 0.1em solid black;
`;

class Card extends Component {
  render() {
    return (
      <Structure className="white">
        <CardTitle>{this.props.title}</CardTitle>
        <p>Lorem Ipsum Dulce Et Decorum Est</p>
      </Structure>
    );
  }
}

export default Card;
