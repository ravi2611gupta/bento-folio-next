import React from 'react'

const Card = ({ image, title, sticky=false, children }) => {
    return (
        <div className={`${sticky && "sticky top-24"} border-none bg-white shadow-sm rounded-2xl p-6`}>
            {image && <div className="bg-background rounded-lg overflow-hidden flex items-center justify-center mb-6">
                <img src={image} className='mt-2' alt="card-image" />
            </div>}

            <div className='text'>
                {title && <h3 className="text-[24px] font-custom-bold leading-[1.999em] gap-6">{title}</h3>}
                {children}
            </div>
        </div>
    )
}

export default Card