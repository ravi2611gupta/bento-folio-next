import WorkTogetherSlider from '@/components/common/WorkTogetherSlider'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import { AwardSection } from '@/components/pages/about/AwardSection'
import { FeedBackSection } from '@/components/pages/about/FeedBackSection'
import WorkingWithSection from '@/components/pages/about/WorkingWithSection'
import ServiceCard from '@/components/pages/home/ServiceCard'
import React from 'react'

const services = [
  { imgSrc: '/assets/img/icons/ui-ux.svg', alt: 'ui-ux', title: 'UI UX Design' },
  { imgSrc: '/assets/img/icons/app.svg', alt: 'app', title: 'Mobile App' },
  { imgSrc: '/assets/img/icons/prd-design.svg', alt: 'prd-design', title: 'Product Design' },
  { imgSrc: '/assets/img/icons/branding.svg', alt: 'branding', title: 'Branding' },
  { imgSrc: '/assets/img/icons/camera.svg', alt: 'photography', title: 'Photography' },
  { imgSrc: '/assets/img/icons/youtube.svg', alt: 'motion-design', title: 'Motion Design' },
  { imgSrc: '/assets/img/icons/web-development.svg', alt: 'web-development', title: 'Web Development' },
  { imgSrc: '/assets/img/icons/view.svg', alt: 'visualization', title: 'Visualization' },
];

const page = () => {
  return (
    <PageWrapper>

      <AboutSection title="Services I <span>Offered</span>" desc="Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <b>Product
                          Design and Development</b> Services!" />
      <ServiceCard services={services} />
      <div className="my-14 rounded-lg aspect-video overflow-hidden">
        <img src="/assets/img/blog/blog-img-1.jpg" alt="blog-img-1" className="h-full object-cover rounded-lg w-full" />
      </div>
      <WorkingWithSection />
      <FeedBackSection />
      <AwardSection />
      {/* F&Q Section */}

      <WorkTogetherSlider />
    </PageWrapper>
  )
}

export default page