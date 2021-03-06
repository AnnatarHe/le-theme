/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 08/01/2017
 */

import * as React from 'react'

interface CardsProps {
    children: React.ReactNode[]
}

class Cards extends React.PureComponent<CardsProps, any> {
    static Card: React.ReactNode

    render() {
        return (
            <div className="--le-cards-container --le-flex-design">
                { this.props.children }
            </div>
        )
    }
}

export default Cards