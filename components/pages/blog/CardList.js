import Pagination from '@/components/common/Pagination'
import React from 'react'
import { CardItem } from './CardItem'

export const CardList = ({
    cards
}) => {
    return (
        <div className='flex flex-wrap'>
            {cards.map(card => <CardItem card={card} />)}

            <Pagination/>
        </div>
    )
}
