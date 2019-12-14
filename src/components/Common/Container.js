import React from 'react'
import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import { createSelector } from 'reselect'
import { handleFetchPageModel } from "../../reducers/pageModelStore";
import styled from 'styled-components'
import isEqual from 'lodash.isequal'

const selectPageModelStore = state => state.pageModelStore

const ContainerComponent = (props) => {
    const pageModel = useSelector(selectPageModelStore, isEqual)
    const { pageDict } = pageModel

    const dispatch = useDispatch()

    dispatch(handleFetchPageModel())

    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    overflow-y: auto;
`

export default ContainerComponent