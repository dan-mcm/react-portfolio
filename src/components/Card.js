import React, { Component } from "react";
import styled from "styled-components";
import hoverImage from "../images/otherimages/ep_naturalblack.png";

const Structure = styled.div`
  min-height: 400px;
  max-height: 400px;
  margin: auto;
  padding: 1em;
  text-align: center;
  border: 2px solid grey;
  margin-bottom: 0.5em;
`;

const CardTitle = styled.h1`
  color: darkred;
  border-bottom: 0.1em solid black;
`;

const Linkage = styled.a`
  padding: 1em;
  color: darkred;
  &:hover {
    background-image: url(${hoverImage});
    border: 2px solid grey;
    color: white;
  }
`;

const Thumbnail = styled.img`
  max-height: 5em;
  min-height: 5em;
  margin: auto;
  padding: 1em;
`;
class Card extends Component {
  render() {
    return (
      <Structure className="white">
        <CardTitle>{this.props.title}</CardTitle>
        <br />
        {this.props.summary ? <p>{this.props.summary}</p> : null}

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
            <br />
            <br />
          </div>
        ) : null}

        {this.props.code ? (
          <div>
            <Linkage href={this.props.code}>Access Code</Linkage>
            <br />
            <br />
          </div>
        ) : null}
        <br />
        <br />
        {this.props.img ? (
          <div>
            <img src={this.props.img} alt={this.props.img} />
            <br />
            <br />
          </div>
        ) : null}
        <br />
      </Structure>
    );
  }
}

export default Card;
