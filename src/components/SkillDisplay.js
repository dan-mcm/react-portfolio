import React, {Component} from 'react';
import styled from 'styled-components';
import { Button, Col, Row } from "antd";

const Wrapper = styled.div`
  margin:100px;
`
const Block = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2.5px solid grey;
  height: 300px;
  width: 300px;
  position:relative;
  margin: auto;
`
const Skill = styled.img`
  max-width:100%;
  max-height:100%;
  vertical-align: center;
  padding:20px;
  margin:auto;
`
const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-family: Open Sans;
  font-size: 200%;
`;

class SkillDisplay extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Wrapper>
      {(this.props.title) ? <Title>{this.props.title}</Title> : null }


        <Row gutter={16}>
          <Col span={6}>
            <Block><Skill src={this.props.images[0]} /></Block>
          </Col>
          <Col span={6}>
            <Block><Skill src={this.props.images[1]} /></Block>
          </Col>
          <Col span={6}>
            <Block><Skill src={this.props.images[2]} /></Block>
          </Col>
          <Col span={6}>
            <Block><Skill src={this.props.images[3]} /></Block>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default SkillDisplay;
