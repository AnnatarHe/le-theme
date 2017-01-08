import * as React from 'react'
import { buttonType } from '../../types/button'

interface ButtonProps {
    type: buttonType,
    children?: React.ReactNode
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
                {this.props.children}
            </button>
        )
    }

}

export default Button
