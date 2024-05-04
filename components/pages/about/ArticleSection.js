import React from 'react'
import { CardItem } from '../blog/CardItem'

const cards = [
    { id: 1, img: "/assets/img/blog/blog-img-1.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
    { id: 2, img: "/assets/img/blog/blog-img-2.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
]

export const ArticleSection = () => {
    return (
        <div className="mt-12">
            <h2 className="text-[30px] font-custom-semibold text-black leading-[1.2em] mb-8">Article and Publications</h2>
            <div className='flex flex-wrap'>
                {cards.map(card => <CardItem card={card} margin=" " />)}
            </div>
        </div>
    )
}
