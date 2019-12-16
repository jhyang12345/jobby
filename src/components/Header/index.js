import React, { Component } from 'react'
import Common from '../Common'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

class HeaderComponent extends Component {

    getSubTitle = () => {
        const { location } = this.props
        const { pathname } = location

        let subTitle = ""
        switch (pathname) {
            case "/rds_to_hive/create":
                subTitle = "RDS To Hive Create"
                break
            case "/rds_to_hive/select":
                subTitle = "RDS To Hive Select"
                break
            case "/wiki-table":
                subTitle = "Wiki-Table"
                break
            default:
                subTitle = "Home"
        }
        return subTitle
    }

    render() {

        return (
            <Header>
                <InnerHeader>
                    <Title>Jobby</Title>
                    <SubTitle>{this.getSubTitle()}</SubTitle>
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
  vertical-align: top;
`

const SubTitle = styled.span`
  display: inline-block;
  height: 100%;
  opacity: 0.7;
  padding: 0px 12px;
  font-size: 16px;
  vertical-align: top;
`

export default withRouter(HeaderComponent)