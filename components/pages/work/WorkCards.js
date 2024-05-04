import Card from '@/components/common/Card'
import Pagination from '@/components/common/Pagination'
import React from 'react'

export const WorkCards = () => {
    return (
        <Card>
            <div className="project-item">
                <div className="bg-background p-6 pb-0 rounded-lg overflow-hidden relative image">
                    <img src="/assets/img/projects/project-1.png" alt="project-1" className="rounded-lg rounded-br-none rounded-bl-none img-fluid w-100" />
                    <a href="/assets/img/projects/project-1.png"
                        className="full-image-preview gallery-popup absolute top-[50%] left-[50%] z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary -mt-[10px] transition-custom invisible opacity-0">
                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex gap-7 justify-between p-6">
                    <div>
                        <a href="portfolio-details.html" className="text-large font-custom-semibold text-black mb-1">FlowSaaS - SaaS Application Tools</a>
                        <p className="text-medium leading-[1.5em] text-light-black">SaaS App | UI UX Design</p>
                    </div>
                    <div className="visite-btn">
                        <a className='flex items-center text-small text-light-black hover:text-primary leading-[1em]' href="portfolio-details.html">Visit Site
                            <svg className="stroke-light-black ml-1" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-item mt-6">
                <div className="bg-background p-6 pb-0 rounded-lg overflow-hidden relative image">
                    <img src="/assets/img/projects/project-2.png" alt="project-2" className="rounded-lg rounded-br-none rounded-bl-none img-fluid w-100" />
                    <a href="/assets/img/projects/project-2.png"
                        className="full-image-preview gallery-popup absolute top-[50%] left-[50%] z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary -mt-[10px] transition-custom invisible opacity-0">
                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex gap-7 justify-between p-6">
                    <div>
                        <a href="portfolio-details.html" className="text-large font-custom-semibold text-black mb-1">FlowSaaS - SaaS Application Tools</a>
                        <p className="text-medium leading-[1.5em] text-light-black">SaaS App | UI UX Design</p>
                    </div>
                    <div className="visite-btn">
                        <a className='flex items-center text-small text-light-black hover:text-primary leading-[1em]' href="portfolio-details.html">Visit Site
                            <svg className="stroke-light-black ml-1" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-item mt-6">
                <div className="bg-background p-6 pb-0 rounded-lg overflow-hidden relative image">
                    <img src="/assets/img/projects/project-3.png" alt="project-2" className="rounded-lg rounded-br-none rounded-bl-none img-fluid w-100" />
                    <a href="/assets/img/projects/project-3.png"
                        className="full-image-preview gallery-popup absolute top-[50%] left-[50%] z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary -mt-[10px] transition-custom invisible opacity-0">
                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex gap-7 justify-between p-6">
                    <div>
                        <a href="portfolio-details.html" className="text-large font-custom-semibold text-black mb-1">FlowArch - Architecture Service Website</a>
                        <p className="text-medium leading-[1.5em] text-light-black">UI UX Design | Development</p>
                    </div>
                    <div className="visite-btn">
                        <a className='flex items-center text-small text-light-black hover:text-primary leading-[1em]' href="portfolio-details.html">Visit Site
                            <svg className="stroke-light-black ml-1" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


            <Pagination/>
        </Card>
    )
}
