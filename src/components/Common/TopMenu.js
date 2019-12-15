import styled from 'styled-components'
import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import {useSelector} from 'react-redux'

const { SubMenu } = Menu;

const selectPageModelStore = state => state.pageModelStore

const generateMenuClickHandler = (props, toLink) => {
    const { history } = props
    return () => {
        history.push(toLink)
    }
}

const generateMenuComponents = ({pageDict, pageMap}, props) => {

    const { menus } = pageDict
    return (
        <StyledMenu
            mode="horizontal"
        >
            {
                menus.map(
                    menu => {
                        if (Object.keys(menu).includes("subMenus")) {
                            return (
                                <StyledSubMenu key={menu.title} title={menu.title}>
                                    {menu.subMenus.map(subMenu =>
                                        <Menu.Item key={subMenu.id}
                                            onClick={generateMenuClickHandler(props, subMenu.url)}>
                                            {subMenu.title}
                                        </Menu.Item>
                                    )}
                                </StyledSubMenu>
                            )
                        } else {
                            return (
                                <StyledSubMenu key={menu.title} title={menu.title}
                                   onTitleClick={generateMenuClickHandler(props, menu.url)}>
                                </StyledSubMenu>
                            )
                        }
                    }
                )
            }
        </StyledMenu>
    )
}

const TopMenu = (props) => {
    const pageModel = useSelector(selectPageModelStore)

    return (
        generateMenuComponents(pageModel, props)
    );

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

const LineThroughSpan = styled.span`
  text-decoration: line-through;
`

export default withRouter(TopMenu)
          