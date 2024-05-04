import Card from '@/components/common/Card'
import React from 'react'

const ProjectCard = () => {
    return (
        <Card title="Recent Projects">
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
                    <div className="h-1/5 pt-3 absolute bottom-0 left-0 bg-gradient-to-t from-[#00000080] to-[#00000000] w-full">
                        <span className="text-xs font-custom-semibold text-primary bg-white rounded px-2 py-1 m-4 leading-[1.999em]">Product Design</span>
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
                    <div className="h-1/5 pt-3 absolute bottom-0 left-0 bg-gradient-to-t from-[#00000080] to-[#00000000] w-full">
                        <span className="text-xs font-custom-semibold text-primary bg-white rounded px-2 py-1 m-4 leading-[1.999em]">Product Design</span>
                    </div>
                </div>
            </div>
           
        </Card>
    )
}

export default ProjectCard