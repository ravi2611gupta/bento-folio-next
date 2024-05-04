import React from 'react'

export const CardItem = ({card, margin="mt-10"}) => {
  return (
    <div className={`${margin} px-3 w-1/2`}>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                    <a href="#" className="d-block w-100">
                        <img src={card.img} alt="blog-img-3" className="w-full object-cover object-center h-full rounded-lg" />
                    </a>
                    <a href="#" className="bg-white text-small z-10 px-2 absolute rounded-md bottom-4 left-4 inline-block" style={{
                        height: "unset"
                    }}>{card.tag}</a>
                </div>
                <div className="text">
                    <a href="#" className="text-large font-custom-semibold text-black mb-3">{card.title}</a>
                    <ul className="list-unstyled">
                        <li className='inline-block text-sm text-[rgba(87, 96, 118, 0.5)] relative pl-3 ml-1 pr-1'>{card.from}</li>
                        <li className='inline-block text-sm text-[rgba(87, 96, 118, 0.5)] relative pl-3 ml-1 pr-1'>{card.to}</li>
                    </ul>
                </div>
            </div>
  )
}
