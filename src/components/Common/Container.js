import React from 'react'
import styled from 'styled-components'

const ContainerComponent = (props) => {
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