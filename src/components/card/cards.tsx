/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 08/01/2017
 */

import * as React from 'react'

interface CardsProps {
    children: React.ReactNode[]
}

const Cards = (props: CardsProps) => {
    return (
        <div className="--le-cards-container --le-flex-design">
            { props.children }
        </div>
    )
}

export default Cards