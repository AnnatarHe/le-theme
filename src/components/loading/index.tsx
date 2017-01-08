import * as React from 'react'

const Loading = () => {
    return (
        <div className="--le-loading-container --le-flex-design --le-flex-center">
            <i className="fa fa-spinner fa-pulse fa-3x"></i>
            <span className="--le-loading-text"> loading... </span>
        </div>
    )
}

export default Loading