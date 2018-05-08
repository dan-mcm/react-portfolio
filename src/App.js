import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Publications from "./containers/Publications";
import Contact from "./containers/Contact";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Nav />
            <Route exact path="/ReactAntd/" component={Home} />
            <Route exact path="/ReactAntd/about" component={About} />
            <Route exact path="/ReactAntd/projects" component={Projects} />
            <Route exact path="/ReactAntd/publications" component={Publications} />
            <Route exact path="/ReactAntd/contact" component={Contact} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
