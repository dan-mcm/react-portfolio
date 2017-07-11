import React, { Component } from 'react';
import logo from './logo.svg';

import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import Icon from 'antd/lib/icon';

import './App.css';
import 'antd/lib/date-picker/style/css';

import enGB from 'antd/lib/locale-provider/en_GB';
import LocaleProvider from 'antd/lib/locale-provider';

import { Row, Col } from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Teseract</h2>
        </div>
        <p className="App-intro">
          To get started, leave all hope behind.
        </p>
	<br />
	<Button type="dashed"><Icon type="search"/></Button>
	<Button type="primary">Button</Button>
	<Button type="danger" icon="search">Search</Button>
	<br />
	<br />

	<LocaleProvider locale={enGB}>
	<DatePicker />

	</LocaleProvider>
  	<br />
	<br />

	<Row gutter = {16}>
	  <Col span = {6}>
	    <p>Random Text on the Left how far across can it really go however
before it ends up on the next line?</p>
	  </Col>
	  <Col span = {18}>
	    <h2>I guess the show must go on...</h2>
	    <p>Ohhhhhh snap... Look at that defaulting format. One might almost think it was a template of some sort...</p>
	  </Col>
	</Row>

	<br />

        <Row gutter = {16}>
          <Col span = {6}>
            <p>Random Text on the Left how far across can it really go however
before it ends up on the next line?</p>
          </Col>
          <Col span = {18}>
            <h2>I guess the show must go on...</h2>
            <p>Ohhhhhh snap... Look at that defaulting format. One might almost think it was a template of some sort...</p>
          </Col>
        </Row>

	<br />

        <Row gutter = {16}>
          <Col span = {6}>
            <p>Random Text on the Left how far across can it really go however
before it ends up on the next line?</p>
          </Col>
          <Col span = {18}>
            <h2>I guess the show must go on...</h2>
            <p>Ohhhhhh snap... Look at that defaulting format. One might almost think it was a template of some sort...</p>
          </Col>
        </Row>

 	</div> 
     );
  }
}

export default App;
