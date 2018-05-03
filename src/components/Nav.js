import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import navImage from "../images/otherimages/ep_naturalwhite.png";

const Navigation = styled.div`
  background-color: black;
  color: white;
  font-size: 1em;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding: 2em;
  }
  li {
    display: inline;
    padding: 1em;
    text-decoration: none;
    margin-left: 1em;
    margin-right: 1em;
  }
  li:hover {
    background-image: url(${navImage});
    color: black;
  }
`;

const NavBar = () => (
  <Navigation className="black">
    <ul>
      <li>
        <Link
          to="/ReactAntd/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/ReactAntd/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/ReactAntd/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </Link>
      </li>
    </ul>
  </Navigation>
);

export default NavBar;
