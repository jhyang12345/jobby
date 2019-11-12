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
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>Helpers</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="RDS to Hive">
            <Menu.Item key="1">Create Table</Menu.Item>
            <Menu.Item key="2">Select Table</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Hive to RDS">
            <Menu.Item key="3">Create Table</Menu.Item>
            <Menu.Item key="4">Select Table</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled(Menu)`
  height: 100%;
  position: absolute;
`

export default SideMenu
          