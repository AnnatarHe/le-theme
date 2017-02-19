import * as React from 'react'
import { Link } from 'react-router'

interface CardProps {
    to: string
    image: string
    title: string
    desc: string
}

class Card extends React.PureComponent<CardProps, any> {
    constructor(props: CardProps) {
        super(props)
    }

    render() {
        return (
            <div className="--le-card-item --le-flex-design --le-flex-center">
                <Link to={this.props.to}>
                    <img src={this.props.image} className="--le-card-item-image --le-flex-design" />
                    <div className="--le-card-item-content --le-flex-design --le-flex-center">
                        <h5 className="--le-card-item-title">{this.props.title}</h5>
                        {this.props.desc ? <span className="--le-card-item-desc">{this.props.desc}</span> : null}
                    </div>
                </Link>
            </div>
        )
    }
}

export default Card