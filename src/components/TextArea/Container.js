import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

const maximumContainerWidth = 1000

class ContainerComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            flexDirection: 'row',
        }

        this.containerRef = React.createRef()
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleContainerResize)
    }

    handleContainerResize = () => {
        const curElem = this.containerRef.current
        const width = curElem.offsetWidth;

        if (width < maximumContainerWidth) {
            this.setState(() => ({
                flexDirection: 'column',
            }))
        } else {
            this.setState(() => ({
                flexDirection: 'row',
            }))
        }
    }

    render() {
        const { flexDirection } = this.state

        return (
            <Container
                ref={this.containerRef}
                flexDirection={flexDirection}>
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
  flex-direction: ${props => props.flexDirection};
`

const Content = styled.div`
  flex: 1;
  display: inline-block;
`

export default ContainerComponent