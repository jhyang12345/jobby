import React from 'react'
import {useSelector} from "react-redux"
import styled from 'styled-components'

const selectPageModelStore = state => state.pageModelStore

const HomeComponent = (props) => {
    const pageModel = useSelector(selectPageModelStore)
    console.log(pageModel)

    return (
        <HomeContainer>
            <MainTitle>
                Example
            </MainTitle>
            <SubTitle>
                Text
            </SubTitle>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  border-radius: 12px;
  border: #ccc solid 1px;
  width: 900px;
  margin: 16px auto;
  padding: 12px 16px;
`

const MainTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 24px;
  padding: 8px 0px;
  color: #333;
`

const SubTitle = styled.div`
  text-align: left;
  font-size: 18px;
  color: #777;
  padding: 8px 0px;
  padding-left: 36px;
  
`

export default HomeComponent