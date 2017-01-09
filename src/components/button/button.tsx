import * as React from 'react'
import { buttonType } from '../../types/button'

interface ButtonProps {
    type: buttonType
    radius?: string
    size?: string
    ghost?: boolean
    children?: React.ReactNode
}

class Button extends React.PureComponent<ButtonProps, any> {

    static defaultProps = {
        type: 'default',
        size: 'normal',
        radius: 'rangle',
        ghost: false
    }

    render() {
        const { type, children, size, ghost, radius, ...others} = this.props
        return (
            <button 
                className={`--le-button-container --le-button-${ type } --le-button-${ size} --le-flex-design --le-flex-center --le-button-${radius} ${ ghost ? '--le-button-ghost' : ''}`}
                {...others}
            >
                { children }
            </button>
        )
    }

}

export default Button
