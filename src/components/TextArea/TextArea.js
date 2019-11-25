import styled from 'styled-components'
import React from 'react';

class TextAreaComponent extends React.Component {
    state = {
        focused: false,
    }

    componentDidMount() {
        console.log("TextArea Mounted")
    }

    setFocus = (focused) => {
        this.setState(() => ({
            focused,
        }))
    }

    render() {
        const { placeholder } = this.props

        return (
            <TextAreaContainer
                focused={this.state.focused}
                height={"720px"}>
                <TextArea
                    spellCheck ={false}
                    focused={this.state.focused}
                    placeholder={placeholder}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                    >
                </TextArea>
            </TextAreaContainer>
        )
    }
}

const TextAreaContainer = styled.div`
    flex: 1;
    height: ${props => props.height};
    margin: ${props => props.focused === true ? "11px": "12px"};
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
    padding: 12px;
`

export default TextAreaComponent