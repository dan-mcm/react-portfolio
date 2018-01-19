import React, {Component} from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import { Col, Row } from "antd";

const Outter = styled.div`
  margin-left:100px;
  margin-right:100px;
`

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2.5px solid grey;
  width: 80%;
  margin: auto;
  padding: 25px;
`;

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-family: Open Sans;
  font-size: 200%;
`;

const List = styled.ul`
  list-style-type: none;
  color: black;
`;

class Banner extends Component{
  render(){
    return (
      <Outter>
        <Row gutter={8}>
          <Title>At A Glance</Title>
          <Col span={12}>
            <Chart />
          </Col>
          <Col span={12}>
            <Wrapper className='white'>
              <h3>Qualifications:</h3>
              <List>
                <li>BA (hons) Music & Geography (2012)</li>
                <li>Professional Diploma in Education (2013)</li>
                <li>Higher Diploma in Computer Science (2017)</li>
              </List>
              <br />
              <h3>
                Check out my code -->{" "}
                <a href="https://github.com/daniel40392">GitHub</a>
              </h3>
              <br />
              <h3>
                Check out my other website projects --><a href="#">
                  {" "}
                  Music Centre
                </a>, <a href="#">Sienimiili</a>
              </h3>
              <br />
              <h3>
                Contact at -->{" "}
                <a href="mailto:daniel40392@gmail.com">daniel40392@gmail.com</a>
              </h3>
            </Wrapper>
          </Col>
        </Row>
      </Outter>
    )
  }
}

export default Banner;
