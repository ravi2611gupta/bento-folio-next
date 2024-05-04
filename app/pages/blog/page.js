import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import { CardList } from '@/components/pages/blog/CardList'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>
      <AboutSection available={false} title="My Recent Article and Publications" desc="I'm here to help if you're searching for a product designer to bring your idea to life or a
                        design partner to help take your business to the next level." />
      
      <CardList/>
      <WorkTogetherSlider />
    </PageWrapper>
  )
}

export default page