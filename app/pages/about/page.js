import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import { ArticleSection } from '@/components/pages/about/ArticleSection'
import { AwardSection } from '@/components/pages/about/AwardSection'
import { CircleArea } from '@/components/pages/about/CircleArea'
import { CounterSection } from '@/components/pages/about/CounterSection'
import { FeedBackSection } from '@/components/pages/about/FeedBackSection'
import WorkingWithSection from '@/components/pages/about/WorkingWithSection'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>

      <AboutSection title="Hi, This Is <span>Cris Rayaan</span> 👋" desc="A Passionate <b>Full Stack Developer</b> 🖥️ & <b>Product Designer</b> having
            <b>12 years</b> of Experiences over 24+ Country Worldwide. " />
      <CounterSection />
      <WorkingWithSection />
      <FeedBackSection />
      <AwardSection />
      <ArticleSection />

      <WorkTogetherSlider />
    </PageWrapper>
  )
}

export default page