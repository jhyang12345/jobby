import React, { Component } from 'react'
import Common from '../Common'
import styled from 'styled-components'

class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Common.SideMenu />
            </Header>
        )
    }
}

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #004c99;
  text-align: center;
  padding: 0px 16px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.25);
`;

export default HeaderComponent