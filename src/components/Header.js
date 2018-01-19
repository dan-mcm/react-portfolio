import React, {Component} from 'react';
import styled from 'styled-components';
import { Col, Row } from "antd";
import me from "../otherimages/DanHat.jpg";

const Image = styled.img`
  vertical-align: middle;
  height: 200px;
  width: 200px;
  border-radius: 200px;
  border: 2px solid black;
`

const Wrapper = styled.h1`
  border-bottom: 2.5px solid black;
  padding:20px;
  background: rgba(255,255,255,0.8);
  vertical-align: middle;
  line-height: 100px;
  font-family: Open Sans;
  font-style: italic;
`;

class Header extends Component{
  render(){
    return (
      <Wrapper>
        <div>
          <Row gutter={8}>
            <Col span={6}><Image src={me} /></Col>
            <Col span={18}><h1>Welcome to the Portfolio Site of Daniel McMahon</h1></Col>
          </Row>
        </div>
      </Wrapper>
    )
  }
}

export default Header;
