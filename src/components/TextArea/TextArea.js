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
                height={"720px"}
                {...this.props}
                >
                <TextArea
                    spellCheck ={false}
                    focused={this.state.focused}
                    placeholder={placeholder}
                    onChange={this.props.onChange}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                    value={this.props.value}
                    {...this.props}
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
        console.log(props)
        console.log((props.succeeded === false) && (props.updating === false))
        if ( props.focused === true ) {
            return "2px #afccd3 solid"
        }
        // else if (props.pending === true) {
        //    
        // }
        else if (props.succeeded === true && props.updating === false) {
            return "2px #85D4BA solid"
        } else if (props.succeeded === false && props.updating === false) {
            return "2px #CC5566 solid"
        }
        else {
            return"1px #AAA solid"
        }
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