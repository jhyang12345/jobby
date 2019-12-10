import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'
import { handleSetFromText, handleSetToText, handleFetchFunction } from "../../reducers/generateConverterStore"
import { getRdsToHiveCreate } from '../../utils/requestHandler'
import { actionSuffix } from "../../reducers/RdsToHiveCreate";

import { connect } from 'react-redux'

class RDSToHiveCreateComponent extends React.Component {

    runButtonHandler = () => {
        const { dispatch, fromText } = this.props

        console.log("Button Clicked")
        dispatch(handleFetchFunction(fromText, getRdsToHiveCreate, actionSuffix))
    }

    handleFromTextChange = (evt) => {
        const { dispatch } = this.props
        const text = evt.target.value
        dispatch(handleSetFromText(text, actionSuffix))
    }

    handleToTextChange = (evt) => {
        const { dispatch } = this.props
        const text = evt.target.value
        dispatch(handleSetToText(text, actionSuffix))
    }

    render() {
        const {
            fromText,
            toText,
            pending,
            succeeded,
            updating,
        } = this.props

        return (
            <PageContainer>
                <TextArea.Container
                    height={'1200px'}
                    flexDirection={'column'}>
                    <TextArea.Component
                        placeholder={"CREATE TABLE RDS..."}
                        value={fromText}
                        onChange={this.handleFromTextChange}
                    >
                    </TextArea.Component>
                    <RunButton
                        onClick={this.runButtonHandler}
                    >
                        RUN
                    </RunButton>
                    <TextArea.Component
                        placeholder={"CREATE SCRIPT..."}
                        value={toText}
                        onChange={this.handleToTextChange}
                        pending={pending}
                        succeeded={succeeded}
                        updating={updating}
                        enableCopy={true}
                    >
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
  &:hover {
    cursor: pointer;
  }
`

const mapStateToProps = ({transformRDSToHiveCreate}) => {
    const {
        fromText,
        toText,
        pending,
        succeeded,
        updating
    } = transformRDSToHiveCreate
    return {
        fromText,
        toText,
        pending,
        succeeded,
        updating,
    }
}

export default connect(mapStateToProps)(RDSToHiveCreateComponent)