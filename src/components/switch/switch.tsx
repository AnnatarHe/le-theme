import * as React from 'react'

interface SwitchProps {
    desc: string
    pos: boolean
    onChange: React.EventHandler<React.MouseEvent<HTMLDivElement>>
}

const Switch = (props: SwitchProps) => {
    return (
        <div className="--le-switch-container --le-flex-design --le-flex-center">
            <div className="--le-switch-bar-container" onClick={props.onChange}>
                <div className="--le-switch-bar"></div>
                <div className={`--le-switch-pointer ${props.pos ? '--le-switch-pointer-left' : '--le-switch-pointer-right'}`}></div>
            </div>
            <div className="--le-switch-display">
                <span>{props.desc}</span>
            </div>
        </div>
    )
}

export default Switch