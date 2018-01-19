import React, {Component} from 'react';
import gh from "../socialicons/gh.png";
import li from "../socialicons/li.png";

class Footer extends Component{
  render(){
    return (
      <footer>
        <p>
          <a href="https://www.linkedin.com/in/daniel-mcmahon-201a6b8a">
            <img src={li} />
          </a>&emsp; &copy; Daniel McMahon 2018 &emsp;<a href="https://github.com/daniel40392">
            <img src={gh} />
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer;





















<footer>
  <p>
    <a href="https://www.linkedin.com/in/daniel-mcmahon-201a6b8a">
      <img src={li} />
    </a>&emsp; &copy; Daniel McMahon 2018 &emsp;<a href="https://github.com/daniel40392">
      <img src={gh} />
    </a>
  </p>
</footer>
