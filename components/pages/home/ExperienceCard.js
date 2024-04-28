import Card from '@/components/common/Card'
import Marquee from '@/components/common/Marquee';
import React from 'react'
import ExperienceItem from './ExperienceItem';

const experienceItems = [
    { company: 'Adobe', role: 'Senior UI UX Designer', date: '2021-2024', icon: 'assets/img/icons/adobe.svg' },
    { company: 'Google Inc.', role: 'Senior Product Designer', date: '2021-2024', icon: 'assets/img/icons/google.svg' },
    { company: 'Meta Inc.', role: 'Product Designer', date: '2021-2024', icon: 'assets/img/icons/meta.svg' },
  ];

const ExperienceCard = () => {
  return (
    <Card title="Work Experience">
         <div className="relative flex h-56 flex-row items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover vertical className="[--duration:7s]">
        {experienceItems.map((review) => (
          <ExperienceItem key={review.company} {...review} />
        ))}
      </Marquee>
    </div>
    </Card>
  )
}

export default ExperienceCard