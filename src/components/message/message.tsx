/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import * as React from 'react'
import ReactElement = React.ReactElement;
import * as ReactCssTransitionGroup from 'react-addons-css-transition-group'

interface MessageProps {
    show: boolean,
    Content: React.ReactNode | string
}

class Message extends React.PureComponent<MessageProps, any> {
    constructor(props: MessageProps) {
        super(props)
    }

    render() {
        const Content = typeof this.props.Content === 'string' ? (
            <div className="--le-message-content">
                <span className="--le-message-text">{this.props.Content}</span>
            </div>
            ) : this.props.Content
        const Result = this.props.show ? (
            <div>
                { Content }
            </div>
        ) : null

        return (
            <ReactCssTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={250}
            >
                { Result }
            </ReactCssTransitionGroup>
        )
    }
}

export default Message