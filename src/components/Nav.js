import React, { Component } from "react";
import styled from "styled-components";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const NoBullets = styled.ul`
  list-style-type: none;
  float:left;
  margin: 0;
  padding: 0;
  color: grey;
`

const CustomList = styled.li`
  display: inline;
  color: black;
  padding: 25px;
  border: 2px solid grey;
  text-align: center;
  vertical-align: center;
`
class Nav extends Component {
  render() {
    return (
      <div>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Skills</Menu.Item>
            <Menu.Item key="3">Updates</Menu.Item>
            <Menu.Item key="4">Side Projects</Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default Nav;
