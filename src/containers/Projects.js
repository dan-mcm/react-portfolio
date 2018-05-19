import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import Card from "../components/Card";

import python from "../images/cardicons/python.png";
import flask from "../images/cardicons/flask.png";
import pi from "../images/cardicons/pi.png";
import react from "../images/cardicons/react.png";
import circleci from "../images/cardicons/circleci.png";
import node from "../images/cardicons/node.png";
import heroku from "../images/cardicons/heroku.png";
import scala from "../images/cardicons/scala.png";
import play from "../images/cardicons/play.png";
import sbt from "../images/cardicons/sbt.png";
import aws from "../images/cardicons/aws.png";
import markdown from "../images/cardicons/markdown.png";
import htmlcssjs from "../images/cardicons/htmlcssjs.png";
import js from "../images/cardicons/js.png";
import auth0 from "../images/cardicons/auth0.png";
import jupyter from "../images/cardicons/jupyter.png";

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

class Projects extends Component {
  render() {
    return (
      <div>
        <br />
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>Projects</Title>
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Fibonacci Visualiser"
                  summary="A series of Python experiments based on the Fibonnaci, Figurate and Catalan series. Includes sheet music generators and NLTK statistics on music generated."
                  code="https://github.com/daniel40392/MusicPrograms"
                  images={[python]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="D&D Toolkit"
                  summary="A tool to aid DM's running 5th Edition D&D Campaigns. Built in React and features CircleCI continuous integration"
                  code="https://github.com/daniel40392/dnd"
                  project="https://daniel40392.github.io/dnd/"
                  images={[react, circleci]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Cat UI"
                  summary="An experimental service for interacting with the Cat API using Node, Express & React. Deployed on Heroku."
                  code="https://github.com/daniel40392/cat-ui"
                  project="https://cat-ui.herokuapp.com/"
                  images={[react, node, heroku]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Inspiration API"
                  summary="An API built with Scala and the Play Framework. Uses SBT."
                  code="https://github.com/daniel40392/inspiration-api"
                  images={[scala, play, sbt]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Home Server"
                  summary="A Flask application that runs off a Raspberry Pi. Shows useful nearby information based on various API calls to services such as Dublin Bus, Dublin Bikes, Google Maps, Google Calendar, Facebook and the Open Weather Map."
                  code="https://github.com/daniel40392/HomeServer"
                  images={[flask, python, pi]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Dublin Bikes"
                  summary="Dublin Bikes Availability Project. Includes web scraping service and was deployed with the use of AWS services (RDS, EC2, S3)."
                  code="https://github.com/daniel40392/DublinBikes"
                  images={[python, aws]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Docs"
                  summary="Some personal coding notes - made with mkdocs for ease of notation using Markdown."
                  code="https://github.com/daniel40392/docs"
                  project="https://daniel40392.github.io/docs/"
                  images={[python, markdown]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Vixyn Portfolio"
                  summary="An experimental portfolio website setup for burlesque performer Vixyn Von Trix."
                  code="https://github.com/daniel40392/vixyn-portfolio"
                  project="https://daniel40392.github.io/vixyn-portfolio/"
                  images={[react]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Twitch Bot"
                  summary="An experiment with creating a Twitch Bot in Node with tmi.js"
                  code="https://github.com/daniel40392/TwitchChatbot"
                  images={[node]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Twitter Bot"
                  summary="A basic Twitter Bot setup using Python & Tweepy."
                  code="https://github.com/daniel40392/TwitterBot"
                  images={[python]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Pong in JS"
                  summary="A web based version of Pong designed with Javascript."
                  code="https://github.com/daniel40392/Javascript-Pong"
                  images={[js]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Developyr"
                  summary="A legacy portfolio site designed with raw HTML & CSS - initially hosted via static bucket hosting on AWS."
                  code="https://github.com/daniel40392/DevelopyrWebsiteAWS"
                  images={[htmlcssjs]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="React Auth0"
                  summary="Experimentation with the use of Auth0 and React."
                  code="https://github.com/daniel40392/react-auth0-service"
                  images={[react, auth0]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Node Auth0"
                  summary="Experimentation with the use of Auth0 and Node."
                  code="https://github.com/daniel40392/node-auth0-server"
                  images={[node, auth0]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Data Analytics"
                  summary="A few Jupyter Notebook Data Analytic exercises completed during College."
                  code="https://github.com/daniel40392/DataAnalytics"
                  images={[python, jupyter]}
                />
              </Box>
              <br />
              <br />
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default Projects;
