import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class ContainerComponent extends React.Component {

    render() {
        return (
            <Container>
                <div>Text</div>
                <div>Another test</div>
            </Container>
        )
    }
}

const Container = styled.div`
  flex: 1;
  flex-direction: row;
`

export default ContainerComponent