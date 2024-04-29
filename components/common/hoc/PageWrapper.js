import ProfileCard from '@/components/pages/home/ProfileCard'
import React from 'react'
import Card from '../Card'

const PageWrapper = ({ children }) => {
    return (
        <div className="flex gap-6">
            <div className='w-1/3'>
                <ProfileCard sticky={true} />
            </div>
            <div className='w-2/3'>
                <Card>
                    {children}
                </Card>
            </div>
        </div>
    )
}

export default PageWrapper