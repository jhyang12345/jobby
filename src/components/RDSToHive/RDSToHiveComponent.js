import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class RDSToHiveComponent extends React.Component {
    render() {
        return (
            <PageContainer>
                <TextArea.Container
                    height={'1200px'}
                    flexDirection={'column'}>
                    <TextArea.Component
                        placeholder={"CREATE TABLE"}>
                    </TextArea.Component>
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

export default RDSToHiveComponent