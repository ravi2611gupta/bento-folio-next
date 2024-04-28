import React from 'react'

const ExperienceItem = (item) => {
    return (
        <div key={item.company} className="flex items-center">
            <div className="w-24">
                <p className="text-sm font-medium text-gray-500">{item.date}</p>
            </div>
            <div className="flex items-center pl-4">
                <div className="w-8 h-8 p-1.5 bg-background rounded-md">
                    <img src={item.icon} alt={item.company} className="h-full w-full" />
                </div>
                <div className="ml-4">
                    <h4 className="text-md font-semibold">{item.company}</h4>
                    <h6 className="text-sm">{item.role}</h6>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem