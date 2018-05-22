import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import hoverImage from "../images/otherimages/ep_naturalblack.png";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Structure = styled.div`
  min-height: 500px;
  margin: auto;
  padding: 2em;
  margin: 1em;
  margin-bottom: 2em;
  text-align: center;
  border: 2px solid grey;
`;

const CardTitle = styled.h3`
  color: darkred;
  border-bottom: 0.1em solid black;
  font-size: 200%;
`;

const Linkage = styled.a`
  padding: 1em;
  color: white;
  background-image: url(${hoverImage});
  border: 2px solid grey;
  margin: 2em;
  &:hover {
    background-color: darkred;
    background-image: none;
    border: 2px solid grey;
    color: white;
  }
`;

const Text = styled.p`
  background-color: white;
  padding: 1em;
  border: 2px solid grey;
  font-size: large;
`;

const Thumbnail = styled.img`
  max-height: 5em;
  min-height: 5em;
  margin: auto;
  padding: 1em;
  &:hover {
    animation: ${rotate360} 1s linear infinite;
  }
`;

class Card extends Component {
  render() {
    return (
      <Structure className="white">
        <CardTitle>{this.props.title}</CardTitle>
        <br />
        {this.props.summary ? <Text>{this.props.summary}</Text> : null}

        {this.props.images
          ? this.props.images.map(image => (
              <Thumbnail alt={image} src={image} />
            ))
          : null}

        <br />
        <br />
        {this.props.project ? (
          <div>
            <Linkage href={this.props.project}>Access Project</Linkage>
          </div>
        ) : null}
        <br />
        <br />
        {this.props.code ? (
          <div>
            <Linkage href={this.props.code}>Access Code</Linkage>
          </div>
        ) : null}
        <br />
        <br />
        {this.props.img ? (
          <div>
            <img src={this.props.img} alt={this.props.img} />
          </div>
        ) : null}
        <br />
      </Structure>
    );
  }
}

export default Card;
