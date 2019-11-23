import React, { Component } from 'react'
import Common from '../Common'
import styled from 'styled-components'

class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <InnerHeader>
                    <Title>Jobby</Title>
                    <Common.SideMenu />
                </InnerHeader>

            </Header>
        )
    }
}

const Header = styled.div`
  position: fixed;
  font-family: 'Roboto Mono', monospace;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #004c99;
  text-align: left;
  padding: 0px 16px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.25);
`;

const InnerHeader = styled.div`
  height: 100%;
  min-width: 1200px;
`

const Title = styled.span`
  display: inline-block;
  height: 100%;
  padding: 0px 16px;
`

export default HeaderComponent