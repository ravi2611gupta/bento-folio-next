import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import { WorkCards } from '@/components/pages/work/WorkCards'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>
      <AboutSection available={false} title="Check Out My Latest <span>Projects</span>" desc="I'm here to help if you're searching for a product designer to bring your idea to life or a
                        design partner to help take your business to the next level." />
      
      <WorkCards/>
      <WorkTogetherSlider />
    </PageWrapper>
  )
}

export default page