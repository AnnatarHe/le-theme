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
        <div className={`--le-alert --le-alert-${props.type}`}>
            <p>{props.msg}</p>
            { props.cb ? <Button type={props.type}>好哒</Button> : null }
        </div>
    )
}

export default Alert
