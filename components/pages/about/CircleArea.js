import React from 'react'

export const CircleArea = () => {
    return (
        <div className="-mt-9 mr-4">
            <div className="relative p-4" style={{
                flex: "0 0 auto",
            }}>
                <img className="absolute h-28 w-28 animate-customSpin" style={{
                    top: "50%" , left:"50%", transform : "translate(-50%, -50%)"
                }} src="/assets/img/about-us/circle-text.svg" alt="circle-text" />
                <span className="w-[70px] h-[70px] bg-primary rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 5V35" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15 30L20 35L25 30" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
