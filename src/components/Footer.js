import React, { Component } from "react";
import gh from "../images/socialicons/gh.png";
import li from "../images/socialicons/li.png";
import styled from "styled-components";

const Image = styled.img`
  min-height: 3em;
  min-width: 3em;
`;

const Text = styled.p`
  font-size: 1em;
`;

class Footer extends Component {
  render() {
    return (
      <footer>
        <Text>
          <a href="https://www.linkedin.com/in/daniel-mcmahon-201a6b8a">
            <Image src={li} />
          </a>&emsp; &copy; Daniel McMahon 2018 &emsp;<a href="https://github.com/daniel40392">
            <Image src={gh} />
          </a>
        </Text>
      </footer>
    );
  }
}

export default Footer;