import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class ContainerComponent extends React.Component {

    render() {
        return (
            <Container>
                <Content>Text</Content>
                <Content>Another test</Content>
            </Container>
        )
    }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  display: inline-block;
`

export default ContainerComponent