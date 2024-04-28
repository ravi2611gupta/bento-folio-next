import Card from '@/components/common/Card'
import React from 'react'
const expertiseItems = [
    { src: 'assets/img/icons/figma.svg', title: 'Figma' },
    { src: 'assets/img/icons/notion.svg', title: 'Notion' },
    { src: 'assets/img/icons/mico.svg', title: 'Miro' },
    { src: 'assets/img/icons/framer.svg', title: 'Framer' },
    { src: 'assets/img/icons/webflow.svg', title: 'Webflow' },
    { src: 'assets/img/icons/zeplin.svg', title: 'Zeplin' }
  ];
const ExpertAreaCard = () => {
  return (
    <Card title="My Expert Area">
      <div className="flex flex-wrap -m-1.5">
        {expertiseItems.map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-1.5" key={index}>
            <div className="flex flex-col items-center">
              <div className=" bg-background rounded-lg w-full flex items-center justify-center py-[14px]">
                <img src={item.src} alt={item.title.toLowerCase()} className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-black leading-[2.5em] text-center text-md font-custom-semibold">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ExpertAreaCard