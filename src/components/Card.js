import React, { Component } from "react";
import styled from "styled-components";

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

class Card extends Component {
  render() {
    return (
      <Structure className="white">
        <CardTitle>{this.props.title}</CardTitle>
          <br/>
          {
            this.props.project ? <div><a href={this.props.project}>Access Project</a><br/><br/></div> : null
          }

          {
            this.props.code ? <div><a href={this.props.project}>Access Code</a><br/><br/></div> : null
          }
          <br/><br/>
          {
            this.props.img ? <div><img src={this.props.img} alt={this.props.img}/><br/><br/></div> : null
          }
          <br/>
        </Structure>
    );
  }
}

export default Card;
