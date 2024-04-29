import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>
      <h1>This is services page</h1>
      <WorkTogetherSlider/>
    </PageWrapper>
  )
}

export default page