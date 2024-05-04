import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import { CardList } from '@/components/pages/blog/CardList'
import React from 'react'

const cards = [
  { id: 1, img: "/assets/img/blog/blog-img-1.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
  { id: 2, img: "/assets/img/blog/blog-img-2.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
  { id: 3, img: "/assets/img/blog/blog-img-3.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
  { id: 4, img: "/assets/img/blog/blog-img-4.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
  { id: 5, img: "/assets/img/blog/blog-img-5.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
  { id: 6, img: "/assets/img/blog/blog-img-6.jpg", title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", from: "15 min read", to: "Nov 6, 2023", tag: "Development" },
]

const page = () => {
  return (
    <PageWrapper>
      <AboutSection available={false} title="My Recent Article and Publications" desc="I'm here to help if you're searching for a product designer to bring your idea to life or a
                        design partner to help take your business to the next level." />
      
      <CardList cards={cards} />
      <WorkTogetherSlider />
    </PageWrapper>
  )
}

export default page