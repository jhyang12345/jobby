import React from 'react'
import Common from '../Common'
import TextArea from '../TextArea'
import styled from 'styled-components'
import { setFromText, handlePrestoWikiTable, setToText } from "../../reducers/WikiTable";
import { connect } from 'react-redux'
import transformCreateToWiki from "../../reducers/WikiTable";

class WikiTableComponent extends React.Component {

    runButtonHandler = () => {
        const { dispatch } = this.props

        console.log("Button Clicked")
        dispatch(handlePrestoWikiTable())
    }

    handleFromTextChange = (evt) => {
        const { dispatch } = this.props
        const text = evt.target.value
        dispatch(setFromText(text))
    }

    handleToTextChange = (evt) => {
        const { dispatch } = this.props
        const text = evt.target.value
        dispatch(setToText(text))
    }

    render() {
        const { fromText, toText } = this.props

        return (
            <PageContainer>
                <TextArea.Container
                    height={'1200px'}
                    flexDirection={'column'}>
                    <TextArea.Component
                        placeholder={"CREATE TABLE"}
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
                        placeholder={"CREATE TABLE"}
                        value={toText}
                        onChange={this.handleToTextChange}
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

const mapStateToProps = ({transformCreateToWiki}) => {
    const { fromText, toText } = transformCreateToWiki
    return {
        fromText,
        toText,
    }
}
export default connect(mapStateToProps)(WikiTableComponent)