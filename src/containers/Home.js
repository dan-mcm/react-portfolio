import React, { Component } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
// import ChartComponent from "../components/ChartComponent";
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

import play from "../images/skills/backend/play.png";
import express from "../images/skills/backend/express.png";
import mysqlphp from "../images/skills/backend/mysqlphp.png";
import redis from "../images/skills/backend/redis.png";

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

        <div className="hidechart">
          {/* chart broke after implementing linting...
          <ChartComponent />
          */}
        </div>

        <SkillDisplay
          title="DevOps"
          items={[
            { image: bash, subtitle: "Bash", text: "I can do bash me" },
            { image: docker, subtitle: "Docker", text: "I can do docker me" },
            { image: k8, subtitle: "Kubernetes", text: "I can kubernetes me" },
            { image: git, subtitle: "Git", text: "I can do git me" }
          ]}
        />

        <SkillDisplay
          title="Frontend"
          items={[
            {
              image: bootstrap,
              subtitle: "Bootstrap",
              text: "I can do Bootstrap me"
            },
            { image: flask, subtitle: "Flask", text: "I can do Flask me" },
            { image: react, subtitle: "React", text: "I can do React me" },
            { image: redux, subtitle: "Redux", text: "I can do Redux me" },
            {
              image: htmlcssjs,
              subtitle: "HTML/CSS/JS",
              text: "I can do WebDev me"
            },
            {
              image: npm,
              subtitle: "Node Package Manager",
              text: "I can do node management me"
            },
            {
              image: yarn,
              subtitle: "Yarn",
              text: "I can do Yarn Package Management me"
            },
            { image: node, subtitle: "Node", text: "I can do a Node me" }
          ]}
        />

        <SkillDisplay
          title="Backend"
          items={[
            { image: python, subtitle: "Python", text: "I can do a Python me" },
            { image: golang, subtitle: "Go", text: "I can go go go" },
            { image: java, subtitle: "Java", text: "I can haz java" },
            { image: scala, subtitle: "Scala", text: "I can Scala" },
            { image: play, subtitle: "Play", text: "I can play" },
            {
              image: express,
              subtitle: "Express",
              text: "I can do an express"
            },
            {
              image: mysqlphp,
              subtitle: "MySQL/PHP",
              text: "I can do MySQL & PHP"
            },
            {
              image: redis,
              subtitle: "Redis",
              text: "I can do session mgmt me"
            }
          ]}
        />

        <SkillDisplay
          title="Other"
          items={[
            {
              image: processing,
              subtitle: "Processing",
              text: "I can process"
            },
            {
              image: adwords,
              subtitle: "Google AdWords",
              text: "I can add words"
            },
            {
              image: analytics,
              subtitle: "Google Analytics",
              text: "I can analytic"
            },
            {
              image: seo,
              subtitle: "Search Engine Optimization",
              text: "I can optimize"
            }
          ]}
        />
        <br />
      </Wrapper>
    );
  }
}

export default Home;
