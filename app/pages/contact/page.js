import { Faq } from '@/components/common/Faq'
import PageWrapper from '@/components/common/hoc/PageWrapper'
import { AboutSection } from '@/components/pages/about/AboutSection'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>
      <AboutSection title="Let's 👋 <span>Work</span> Together" desc="I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level." available={false} />

      <div className="mt-12 bg-background p-12 rounded-xl">
        <div className='flex gap-4'>
          <div className="w-full mb-5">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" id="name" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-primary focus:border-primary " />
          </div>
          <div className="w-full mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email" id="email" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-primary focus:border-primary " />
          </div>
        </div>

        <div className='flex gap-4'>
          <div className="w-full mb-5">
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
            <input type="text" id="subject" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-primary focus:border-primary " />
          </div>
          <div className="w-full mb-5">
            <label for="budget" className="block mb-2 text-sm font-medium text-gray-900">Budget</label>
            <select id="budget" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary">
              <option disabled selected>Select Budget</option>
              <option value="US">$5000</option>
              <option value="CA">$5000 - $10000</option>
              <option value="FR">$10000 - $20000</option>
              <option value="DE">$20000+</option>
            </select>
          </div>
        </div>

        <div className='w-full mb-5'>
          <label for="comment" className="block mb-2 text-sm font-medium text-gray-900">Comment</label>
          <textarea id="comment" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="w-full mb-5">
          <button type="button" className="flex items-center justify-center gap-2 text-white w-full bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-[18px] me-2 mb-2"><span>Send Message</span> <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg></button>

        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.555902240418!2d81.04660277489408!3d26.885847261245615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be27437d8ea07%3A0xfc37f0f423ef507!2sKC%20Residency!5e0!3m2!1sen!2sin!4v1714824768800!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" style={{ borderRadius: "8px", marginTop: "50px" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Faq />
    </PageWrapper>
  )
}

export default page