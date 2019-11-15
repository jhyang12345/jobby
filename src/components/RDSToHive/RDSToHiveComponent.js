import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'

class RDSToHiveComponent extends React.Component {
    render() {
        return (
            <TextArea.Component
                placeholder={"CREATE TABLE"}>
            </TextArea.Component>
        )
    }
}