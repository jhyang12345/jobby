import React from 'react'
import {useSelector} from "react-redux"
import styled from 'styled-components'

const selectPageModelStore = state => state.pageModelStore

const HomeComponent = (props) => {
    const pageModel = useSelector(selectPageModelStore)
    console.log(pageModel)

    return (
        <HomeContainer>
            
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  border-radius: 12px;
  border: #ccc solid 1px;
  width: 900px;
  margin: 16px auto;
  padding: 12px;
`

export default HomeComponent