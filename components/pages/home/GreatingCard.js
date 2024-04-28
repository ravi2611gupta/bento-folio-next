import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import React from 'react'

const GreatingCard = () => {
    return (
        <Card>
            <div className="bg-background overflow-hidden rounded-lg h-14 mb-6 flex items-center whitespace-nowrap">
                <div className="animate-scrolling">
                    <p className="text-[18px] font-custom-semibold text-light-black mr-2 animate-marquee">
                        Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital
                        Experiences 🎨
                    </p>
                </div>
            </div>
            <h3 className="text-extra-large font-custom-bold text-black leading-[1.375em] block">Let's👋
                <span className="block">Work Together</span>
            </h3>
            <Button variant="link" className="inline-flex px-0">
                 Let's Talk
                <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11.6665V6.6665H12.5" stroke-width="1.5" stroke='#4770FF' stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke-width="1.5" stroke='#4770FF' stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </Button>
        </Card>
    )
}

export default GreatingCard