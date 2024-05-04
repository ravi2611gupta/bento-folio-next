import React from 'react'

export const AboutSection = ({
    title,
    desc,
    available = true,
}) => {
  return (
    <div className="flex">
        <div className="w-full" style={{
          maxWidth: "unset"
        }}>
          {title && <h1 className="text-extra-large font-custom-bold text-black leading-[0.9em] mb-6" dangerouslySetInnerHTML={{__html: title}} />}
          {desc && <p className='text-[18px] font-custom-regular leading-[1.5em]' dangerouslySetInnerHTML={{__html: desc}} />}
        </div>
        {available && <div style={{ flex: "0 0 auto" }}>
          <span className='flex items-center text-[18px] font-custom-semibold bg-background py-2 px-4 rounded-lg leading-[1.8em]'><i className="fas fa-circle"></i> Available For Hire</span>
        </div>}
      </div>
  )
}
