import styled from 'styled-components'
import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <StyledMenu
        onClick={this.handleClick}
        mode="horizontal"
      >
          <StyledSubMenu key="g1" title="RDS to Hive">
            <Menu.Item key="1">Create Table</Menu.Item>
            <Menu.Item key="2">Select Table</Menu.Item>
          </StyledSubMenu>
          <StyledSubMenu key="g2" title="Hive to RDS">
            <Menu.Item key="3">Create Table</Menu.Item>
            <Menu.Item key="4">Select Table</Menu.Item>
          </StyledSubMenu>
          <StyledSubMenu key="g3" title="Wiki Table">
          </StyledSubMenu>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled(Menu)`
  height: 100%;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  border-bottom: none;
  margin-right: 24px;
  float: right;
`

const StyledSubMenu = styled(SubMenu)`
  height: 100%;
  line-height: 60px;
  margin-right: 12px;
  &>div:hover {
    color: rgba(255, 255, 255, 1.0) !important;
  }
  &:hover {
    border-bottom-color: #FFF !important;
  }
`

export default SideMenu
          