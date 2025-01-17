import React from 'react'
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
        this.handleContainerResize()
    }

    handleContainerResize = () => {
        const curElem = this.containerRef.current
        const width = curElem.offsetWidth;

        if (this.props.flexDirection !== undefined) {
            this.setState(() => ({
                flexDirection: this.props.flexDirection,
            }))
        } else if (width < maximumContainerWidth) {
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
                {...this.props}
                ref={this.containerRef}
                flexDirection={flexDirection}>
                {this.props.children}
            </Container>
        )
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleContainerResize)
    }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height === undefined ? '100%' : props.height};
  align-content: center;
  flex: 1;
  flex-direction: ${props => props.flexDirection};
`

const Content = styled.div`
  flex: 1;
  display: inline-block;
`

export default ContainerComponent