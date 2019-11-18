import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'

class RDSToHiveComponent extends React.Component {
    render() {
        return (
            <TextArea.Container>
                <TextArea.Component
                    placeholder={"CREATE TABLE"}>
                </TextArea.Component>
                <TextArea.Component
                    placeholder={"CREATE TABLE"}>
                </TextArea.Component>
            </TextArea.Container>
        )
    }
}

export default RDSToHiveComponent