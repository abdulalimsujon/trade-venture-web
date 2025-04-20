import Image from 'next/image'
import React from 'react'
import eventImage from "@/assets/events/eventsImage.png";
import PersonImage from "@/assets/events/personImage.png";

export default function page() {
    return (
        <div className='relative'>
            <div className="container-fluid relative bg-[#22CD5A] h-[340px]">
                <div className='pt-24'>
                    <h2 className="text-white font-bold capitalize lg:text-[62px] text-[22px] text-center ">
                        Events Details Page
                    </h2>
                </div>
            </div>
            <div className='container relative top-[-100px]'>
                <Image src={eventImage} className='w-full' />
                <p className='my-5'>The Africa Startup Festival is an annual event that celebrates and supports entrepreneurship and innovation in Africa. It brings together startups, investors, and industry experts to network, learn, and explore new opportunities for growth. The festival offers valuable opportunities for startups to showcase their products, connect with investors, and gain insights into the challenges and opportunities facing African entrepreneurship.</p>
                <button className='bg-primary text-white py-2 px-20 rounded-md my-5'>Register Now!</button>

                <div className="flex justify-between items-center my-10">
                    <div>
                        <h4 className='text-[#22CD5A] text-md'>Event Start Date: 11-Nov-2023</h4>
                    </div>
                    <div>
                        <h4 className='text-red-500 text-md '>Event End Date: 11-Nov-2023</h4>
                        <div>
                        </div>
                    </div>

                </div>
                <div className='my-20'>
                    <h1 className='font-bold text-4xl text-[#22CD5A]'>Our Great speaker</h1>
                    <div className='flex items-center mt-5'>
                        <div className='mr-5'>
                            <Image
                                src={PersonImage}
                                width={275}
                                height={183}
                            />
                        </div>
                        <div className='mr-5'>
                            <Image
                                src={PersonImage}
                                width={275}
                                height={183}
                            />
                        </div>
                        <div className='mr-5'>
                            <Image
                                src={PersonImage}
                                width={275}
                                height={183}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
