import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class RDSToHiveComponent extends React.Component {

    runButtonHandler = () => {
        console.log("Button Clicked")
    }

    render() {
        return (
            <PageContainer>
                <TextArea.Container
                    height={'1200px'}
                    flexDirection={'column'}>
                    <TextArea.Component
                        placeholder={"CREATE TABLE"}>
                    </TextArea.Component>
                    <RunButton
                        onClick={this.runButtonHandler}
                        >
                        RUN
                    </RunButton>
                    <TextArea.Component
                        placeholder={"CREATE TABLE"}>
                    </TextArea.Component>
                </TextArea.Container>
            </PageContainer>

        )
    }
}

const PageContainer = styled.div`
  margin: 0px auto;
  max-width: 1080px;
`

const RunButton = styled.div`
  display: inline-block;
  align-self: center;
  padding: 6px 24px;
  height: 42px;
  line-height: 30px;
  background-color: #326fad;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
  color: #FFF;
`

export default RDSToHiveComponent