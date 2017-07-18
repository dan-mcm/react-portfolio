import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';

import { Avatar } from 'antd';

import { Button } from 'antd';

import Chart from './components/Chart';

import gh from './socialicons/gh.png';
import li from './socialicons/li.png';

import flk from './skills/flask.png';
import htmlcs from './skills/htmlcssjs.png';
import msp from './skills/mysqlphp.png';
import re from './skills/react.png';

import py from './skills/python.png';
import ja from './skills/java.png';
import ba from './skills/bash.png';
import p3 from './skills/processing.png';

import gan from './skills/googleanalytics.png';
import gad from './skills/googleadwords.png';
import sca from './skills/scala.png';
import play from './skills/play.png';

import me from './otherimages/DanHat.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Python', 'Java', 'React/JSX', 'JavaScript', 'MySQL', 'Bash', 'Scala', 'PHP'],
        datasets:[
          {
            label:'Dan at a Glance',
            data:[
              30,
              20,
              15,
              15,
              10,
              10,
              5,
              5
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(50, 50, 132, 0.6)',
              'rgba(255, 200, 255, 0.6)'

            ],
          }
        ]
      },
    });
  }
    
    
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Avatar size="large" icon="user" src={me}/>
          <h2>Developyr</h2>
        </div>
        
        <p className="App-intro">
        </p>
        
         <Carousel autoplay>
            <div><h3>Welcome to Developyr - The Portfolio Site of Daniel McMahon</h3></div>
            <div><h3>Qualifications: BA (hons) Music & Geography (2012); Professional Diploma in Education (2013); Higher Diploma in Computer Science (2017)</h3></div>
            <div><h3>Check out my code on <a href="https://github.com/daniel40392">GitHub</a></h3></div>
            <div><h3>Check out my other website projects: <a href="#"> Music Centre</a>, <a href="#">Sienimiili</a></h3></div>
            <div><h3>Contact at <a href="mailto:daniel40392@gmail.com">daniel40392@gmail.com</a></h3></div>
          </Carousel>
        
        <br />
        
        <h3>At A Glance</h3>
        <p className="underline">________</p>
        
        <div>
        <Chart 
            chartData={this.state.chartData}
        />
        </div>
        <br />

        <br />
            
        
        <h3>Web Development</h3>
        <p className="underline">________</p>
        <br />
        <br />
            
        <Row gutter={16}>
          <Col span={4}></Col>
          <Col span={4}><div className="port"><img src={flk}/><div className="unseen"><p>yo!</p></div></div></Col>
          <Col span={4}><div className="port"><p><img src={htmlcs}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={msp}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={re}/></p></div></Col>
          <Col span={4}></Col>
        </Row>
        
        <br />
        
        <h3>Programming Languages</h3>
        <p className="underline">________</p>
        <br />
        <br />
            
        <Row gutter={16}>
          <Col span={4}></Col>
          <Col span={4}><div className="port"><p><img src={py}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={ja}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={ba}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={p3}/></p></div></Col>
          <Col span={4}></Col>
        </Row>
        
        <br />
        
        <h3>Other Skills</h3>
        <p className="underline">________</p>
        <br />
        <br />
            
        <Row gutter={16}>
          <Col span={4}></Col>
          <Col span={4}><div className="port"><p><img src={sca}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={gad}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={gan}/></p></div></Col>
          <Col span={4}><div className="port"><p><img src={play}/></p></div></Col>
          <Col span={4}></Col>
        </Row>
          
        <br />
        <br />
            
      <footer><p><a href="https://www.linkedin.com/in/daniel-mcmahon-201a6b8a"><img src={li}/></a>&emsp; &copy; Developyr 2017 &emsp;<a href="https://github.com/daniel40392"><img src={gh}/></a></p></footer>    
      </div>
    );
  }
}

export default App;
