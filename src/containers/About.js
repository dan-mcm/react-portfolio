import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Carousel } from 'antd'

import dan1 from "../images/about/BW.jpg";
import dan2 from "../images/about/DanielMcMahon.jpg";
import dan3 from "../images/about/DanHat.jpg";

import mha from "../images/about/myheroacademia.jpg";
import piano from "../images/about/piano.jpg";
import gb from "../images/about/giantbomb.png";
import twitch from "../images/about/twitch.png";
import steam from "../images/about/steam.png";
import swit from "../images/about/switch.png";
import netflix from "../images/about/netflix.png";

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-left: 0.3em;
  margin-right: 0.3em;
  border-bottom: 2px solid darkred;
  font-size: 200%;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid grey;
`;


const Thumbnail = styled.img`
  max-height: 250px;
  max-width: 250px;
  border-radius: 25px;
  margin: 1em;
`

const Section = styled.div`
  color: white;
  width: 80%;
  margin: auto;
`

const Intro = styled.div`
  padding: 1em;
  margin: 2em;
  color: black;
  background-color: white;
  border: 2px solid grey;
  border-radius: 25px;
`

const Subtitle = styled.h3`
  color: darkred;
  border-bottom: 0.1em solid black;
  font-size: 200%;
`;

const Text = styled.p`
  padding: 1em;
  opacity: 0.8;
  font-size: large;
  margin: auto;
  background-color: lightgrey;
`;

const NBList = styled.ul`
  list-style-type: none;
  text-align: left;
  padding: 0;
`

const Red = styled.span`
  color: darkred;
  font-weight: bold;
`

const CaroImage = styled.img`
  max-width: 600px;
  max-height: 300px;
`

class About extends Component {
  render() {
    return (
      <div>
        <br/>
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>About</Title>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <Thumbnail src={dan1}></Thumbnail>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <Thumbnail src={dan2}></Thumbnail>
              </Box>
              <Box width={[1, 1/3]}>
                <Thumbnail src={dan3}></Thumbnail>
              </Box>
              <Box width={1}>
                <Section>
                  <Intro className='white'>
                    <Subtitle>Me, Myself and I</Subtitle>
                    <b><Text>Daniel McMahon BA, PDE, H.Dip.</Text></b>
                    <br />
                    <Text>There are too many events that happen in a lifetime to define who we are today. <br />
                     My exposure to technology has been ongoing since I was born - here is a snapshot of my life in tech:
                     <br /><br />
                      <NBList>
                        <li><Red>Age 5</Red>: Exposure to DOS</li>
                        <li><Red>Age 8</Red>: Exposure to Internet Noises, Win98, Quake & RuneScape</li>
                        <li><Red>Age 12-18</Red>: Exposure to MSN, Printers, Social Media & Numerous Gaming Consoles</li>
                        <li><Red>Age 19</Red>: Exposure to Elective Modules in Java & Processing</li>
                        <li><Red>Age 22</Red>: Exposure to teaching Music @ Secondary level with Midi interfaces in classroom</li>
                        <li><Red>Age 23</Red>: Minor exposure to using basic CMS, CRM and HTML as an Education Officer</li>
                        <li><Red>Age 22</Red>: Exposure to developing educational websites & Google Map interactive Geography lessons</li>
                        <li><Red>Age 24</Red>: Own a Raspberry Pi</li>
                        <li><Red>Age 25</Red>: Started H.Dip Conversion Course in Computer Science & First Exposure to using Ubuntu</li>
                        <li><Red>Age 26</Red>: Hired as a Professional Software Engineer & First Exposure to using MacBooks</li>
                      </NBList>
                    </Text>
                    <br />
                    <Text>In short: <Red>I'm a humble software engineer, musician and educator</Red></Text>
                  </Intro>
                </Section>
              </Box>
              <Box width={1}>
                <div className="hidechart">
                  <Carousel autoplay>
                     <div><h1>Some Hobbies:</h1></div>
                     <div><CaroImage src={piano}></CaroImage></div>
                     <div><CaroImage src={gb}></CaroImage></div>
                     <div><CaroImage src={mha}></CaroImage></div>
                     <div><CaroImage src={twitch}></CaroImage></div>
                     <div><CaroImage src={netflix}></CaroImage></div>
                     <div><CaroImage src={steam}></CaroImage></div>
                     <div><CaroImage src={swit}></CaroImage></div>
                   </Carousel>
                 </div>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default About;
