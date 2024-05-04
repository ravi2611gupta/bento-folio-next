"use client"
import React, { useState } from 'react'

const faqs = [
    { id: 1, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
    { id: 2, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
    { id: 3, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
    { id: 4, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
    { id: 5, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
    { id: 6, title: "What does a product designer need to know?", desc: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." },
]

export const Faq = () => {
    const [selectedId, setSelectedId] = useState(1);

    const toggleAccordion = id => setSelectedId(prevId => (prevId !== id) ? id : null);
    return (
        <div className='mt-12'>
            <h2 className="text-[30px] font-custom-semibold text-black leading-[1.2em] mb-8">Frequently Asked Questions

            </h2>

            {faqs.map(faq => <div className='my-4 border border-border rounded-lg'>
                <h2>
                    <button type="button" onClick={() => toggleAccordion(faq.id)} className="w-full flex items-center justify-between text-large font-custom-semibold text-black bg-background p-6 rounded-lg">
                        <span>{faq.title}</span>
                        <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                            {selectedId === faq.id ? <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                            </svg>
                                : <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                </svg>}

                        </div>
                    </button>
                </h2>
                <div className={`${selectedId === faq.id ? "" : "hidden"} transition-custom`} aria-labelledby="accordion-flush-heading-1">
                    <div className="p-6 pt-2 text-[18px] text-black">
                        {faq.desc}
                    </div>
                </div>
            </div>)}
        </div>

    )
}
