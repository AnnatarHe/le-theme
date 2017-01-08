import * as React from 'react'

interface CardProps {

}

class Card extends React.PureComponent<CardProps, any> {
    constructor(props: CardProps) {
        super(props)
    }

    render() {
        return (
            <div className="--le-card-item --le-flex-design --le-flex-center">
            </div>
        )
    }
}

export default Card