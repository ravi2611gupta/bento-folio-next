import React from 'react'

const WorkTogetherSlider = () => {
    return (
        <div className="bg-background overflow-hidden rounded-lg p-6 mt-12 mb-6 flex items-center whitespace-nowrap">
            <div className="slider-main flex gap-4 align-items-center">
                <div className="flex whitespace-nowrap animate-scrolling gap-6 items-center">
                    <a className='inline-block text-extra-large font-custom-semibold text-light-black relative mx-0 my-4' href="#">Let's 👋 Work Together</a>
                    <a className='inline-block text-extra-large font-custom-semibold text-light-black relative mx-0 my-4' href="#">Let's 👋 Work Together</a>
                </div>
                <div className="flex whitespace-nowrap animate-scrolling gap-6 items-center">
                    <a className='inline-block text-extra-large font-custom-semibold text-light-black relative mx-0 my-4' href="#">Let's 👋 Work Together</a>
                    <a className='inline-block text-extra-large font-custom-semibold text-light-black relative mx-0 my-4' href="#">Let's 👋 Work Together</a>
                </div>
            </div>
        </div>
    )
}

export default WorkTogetherSlider