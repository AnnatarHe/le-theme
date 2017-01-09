import * as React from 'react'
import Button from '../button/button'
import { buttonType } from '../../types/button'

export interface AlertProps {
    type: buttonType,
    msg: string,
    cb?: Function
}

const Alert = (props: AlertProps) => {
    return (
        <div className={`--le-alert-container --le-alert-${props.type} --le-flex-design`}>
            <p className="--le-alert-text --le-flex-design">{props.msg}</p>
            { props.cb ? <Button type="error" size="large" radius="radius">好哒</Button> : null }
        </div>
    )
}

export default Alert
