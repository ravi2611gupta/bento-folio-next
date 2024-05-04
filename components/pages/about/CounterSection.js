import React from 'react'
import { CircleArea } from './CircleArea'

export const CounterSection = () => {
  return (
    <div className="flex justify-between my-12 gap-7">
        <div className="flex gap-10 max-w-96 flex-grow">
          <div className="counter-item">
            <h3 className="text-extra-large font-custom-bold text-black leading-[0.9em]">40+</h3>
            <p className="text-xs font-custom-regular text-light-black leading-[1.5em] mt-2">Year of Experience</p>
          </div>
          <div className="counter-item">
            <h3 className="text-extra-large font-custom-bold text-black leading-[0.9em]">86+</h3>
            <p className="text-xs font-custom-regular text-light-black leading-[1.5em] mt-2">Project Completed
            </p>
          </div>
          <div className="counter-item">
            <h3 className="text-extra-large font-custom-bold text-black leading-[0.9em]">72+</h3>
            <p className="text-xs font-custom-regular text-light-black leading-[1.5em] mt-2">Happy Client
            </p>
          </div>
        </div>
        <CircleArea />
      </div>
  )
}
