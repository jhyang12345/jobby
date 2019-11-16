import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class ContainerComponent extends React.Component {

    constructor(props) {
        super(props)
        this.containerRef = React.createRef()
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleContainerResize)
    }

    handleContainerResize = () => {
        const curElem = this.containerRef.current
        const width = curElem.offsetWidth;
        console.log(width)
    }

    render() {
        return (
            <Container
                ref={this.containerRef}>
                <Content>Text</Content>
                <Content>Another test</Content>
            </Container>
        )
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleContainerResize)
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