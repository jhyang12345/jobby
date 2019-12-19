import React, {Fragment} from 'react'
import {useSelector} from "react-redux"
import styled from 'styled-components'
import {Link} from "react-router-dom";

const selectPageModelStore = state => state.pageModelStore

const generateHomeMenuComponents = ({pageDict, pageMap}) => {
    const { menus } = pageDict
    return (
        <Fragment>
            {
                menus.map(menu => {
                    return (
                        <Fragment>
                            <MainTitle to={menu.url === undefined ? "/" : menu.url}>
                                {menu.title}
                            </MainTitle>
                            {
                                menu.subMenus !== undefined
                                ? menu.subMenus.map(subMenu => <SubTitle to={subMenu.url}>{subMenu.title}</SubTitle>)
                                : null
                            }
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

const HomeComponent = (props) => {
    const pageModel = useSelector(selectPageModelStore)

    return (
        <HomeContainer>
            {generateHomeMenuComponents(pageModel)}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  border-radius: 12px;
  border: #ccc solid 1px;
  width: 720px;
  margin: 16px auto;
  padding: 12px 16px;
`

const MainTitle = styled(Link)`
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
  padding: 8px 0px;
  color: #333;
`

const SubTitle = styled(Link)`
  display: block;
  text-align: left;
  font-size: 18px;
  color: #777;
  padding: 8px 0px 8px 36px;
`

export default HomeComponent