import Card from '@/components/common/Card';
import React from 'react'

const ServiceCard = ({
    services
}) => {
    return (
        <Card title="Services I Offered">
            <div className="services-main">
                <div className="flex flex-wrap -m-1.5">

                    {services.map((service, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-1.5">
                            <div className="bg-background pt-[16px] pr-[16px] pb-[16px] ps-[16px] rounded-2xl flex items-center justify-center flex-col">
                                <div className="bg-white rounded-lg w-full py-6 flex items-center justify-center">
                                    <img src={service.imgSrc} alt={service.alt} />
                                </div>
                                <div className="text">
                                    <h3 className="text-medium font-custom-semibold text-black leading-[2.999em] mt-4">{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Card>
    )
}

export default ServiceCard