import React, { Component } from 'react'
import styled from 'styled-components'

class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                Jobby
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
  background-color: #14484f;
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.35);
`;

export default HeaderComponent