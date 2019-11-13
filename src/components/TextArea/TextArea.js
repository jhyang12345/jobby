import styled from 'styled-components'
import React from 'react';

class TextAreaComponent extends React.Component {
    state = {
        focused: false,
    }

    setFocus = (focused) => {
        this.setState(() => ({
            focused,
        }))
    }

    render() {
        return (
            <TextAreaContainer
                focused={this.state.focused}
                height={"720px"}>
                <TextArea
                    spellCheck ={false}
                    focused={this.state.focused}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                    >
                </TextArea>
            </TextAreaContainer>
        )
    }
}

const TextAreaContainer = styled.div`
    height: ${props => props.height};
    margin: 12px;
    border-radius: 12px;
    border: ${
    props => {
        return props.focused === true
            ? "2px #afccd3 solid"
            : "1px #AAA solid"
    }
};
`

const TextArea = styled.textarea`
    font-family: 'Roboto Mono', monospace;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    padding: ${props => props.focused === true ? "11px": "12px"};
`

export default TextAreaComponent