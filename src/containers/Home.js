import React, { Component } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SkillDisplay from "../components/SkillDisplay";

/* Image Imports */


import htmlcssjs from "../images/skills/frontend/htmlcssjs.png";
import bootstrap from "../images/skills/frontend/bootstrap.png";
import react from "../images/skills/frontend/react.png";
import flask from "../images/skills/frontend/flask.png";

import npm from "../images/skills/frontend/npm.png";
import yarn from "../images/skills/frontend/yarn.png";
import redux from "../images/skills/frontend/redux.png";
import node from "../images/skills/frontend/node.png";

import python from "../images/skills/backend/python.png";
import golang from "../images/skills/backend/golang.png";
import java from "../images/skills/backend/java.png";
import scala from "../images/skills/backend/scala.png";

import play from  "../images/skills/backend/play.png";
import express from  "../images/skills/backend/express.png";
import mysqlphp from  "../images/skills/backend/mysqlphp.png";
import redis from  "../images/skills/backend/redis.png";

import bash from "../images/skills/devops/bash.png";
import docker from "../images/skills/devops/docker.png";
import k8 from "../images/skills/devops/kubernetes.png";
import git from "../images/skills/devops/git.png";

import processing from "../images/skills/other/processing.png";
import adwords from "../images/skills/other/googleadwords.png";
import analytics from "../images/skills/other/googleanalytics.png";
import seo from "../images/skills/other/seo.png";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <br />
        <Banner />
        <SkillDisplay title="DevOps" images={[bash, docker, k8, git]} />
        <SkillDisplay title="Frontend" images={[bootstrap, flask, react, redux, htmlcssjs, npm, yarn, node]} />
        <SkillDisplay title="Backend" images={[python, golang, java, scala, play, express, mysqlphp, redis]} />
        <SkillDisplay title="Other" images={[processing, adwords, analytics, seo]} />
        <br />
      </Wrapper>
    );
  }
}

export default Home;
