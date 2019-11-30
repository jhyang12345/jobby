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

    copyToClipboard = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =
            document.getSelection().rangeCount > 0        // Check if there is any content selected previously
                ? document.getSelection().getRangeAt(0)     // Store selection if found
                : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
            document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
            document.getSelection().addRange(selected);   // Restore the original selection
        }
    };

    copyText = () => {
        const { value } = this.props

        this.copyToClipboard(value)
    }

    render() {
        const { placeholder, enableCopy } = this.props
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
                {
                    enableCopy === true
                    ? <Copy
                        onClick={this.copyText}>
                        COPY
                    </Copy>
                    : null
                }

            </TextAreaContainer>
        )
    }
}

const TextAreaContainer = styled.div`
    flex: 1;
    position: relative;
    height: ${props => props.height};
    margin: ${
        props => {
            if ( props.focused === true ) {
                return "11px"
            }
            else if (props.succeeded === true && props.updating === false) {
                return "11px"
            } else if (props.succeeded === false && props.updating === false) {
                return "11px"
            } else {
                return "12px"
            }
        }
    };
    border-radius: 12px;
    border: ${
    props => {
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

const Copy = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #6f9ac5;
  color: white;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`

export default TextAreaComponent