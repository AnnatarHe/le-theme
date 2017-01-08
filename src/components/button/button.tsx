import * as React from 'react'

type buttonType = 'default' | 'success' | 'error' | 'info'

interface ButtonProps {
    type: buttonType,
    text: string
}

class Button extends React.PureComponent<ButtonProps, any> {

    static defaultProps = {
        type: 'default'
    }

    render() {
        return (
            <button 
                className={`--le-button --le-button-${this.props.type}`}
            >
                { this.props.text }
            </button>
        )
    }

}

export default Button
