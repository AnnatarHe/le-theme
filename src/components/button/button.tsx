import * as React from 'react'

export interface ButtonProps {
    type: string
}

class Button extends React.PureComponent<ButtonProps, never> {

    render() {
        return (
            <button>hello</button>
        )
    }

}

export default Button
