import React from 'react'
import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import { createSelector } from 'reselect'
import { handleFetchPageModel } from "../../reducers/pageModelStore";
import styled from 'styled-components'
import isEqual from 'lodash.isequal'

const selectPageModelStore = state => state.pageModelStore

const generatePageDict = (pageMap) => {
    return (
        <div></div>
    )
}

const ContainerComponent = (props) => {
    const pageModel = useSelector(selectPageModelStore, isEqual)
    const { pageDict, pageMap } = pageModel

    const dispatch = useDispatch()

    dispatch(handleFetchPageModel())

    return (
        <Container>
            {props.children}
            {generatePageDict(pageMap)}
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    overflow-y: auto;
`

export default ContainerComponent