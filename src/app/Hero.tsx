import Image from 'next/image'
import React from 'react'
import profile_pic from '@/images/profile_pic.jpg'

const Hero = () => {
    return (
        <div className='md:py-48 pt-24 pb-10'>
            <div className="md:hstack flex flex-col-reverse md:gap-24 items-center gap-10">
                <h2 className='text-center md:text-left font-bold text-[50px]/[70px]'>
                    Hi 👋,<br />
                    My name is<br />
                    <span className='bg-gradient-to-r from-[#13B0F5] bg-clip-text text-transparent to-[#E70FAA]'>Bjorn-Donald</span><br />
                    I build things for web
                </h2>
                <div className='w-[349px] shrink-0 h-[349px] rounded-full center from-[#E70FAA] to-[#13B0F5] bg-gradient-to-r'>
                    <div className='w-[331px] shrink-0 h-[331px] relative rounded-full  overflow-hidden'>
                        <Image className='w-auto h-full object-cover object-center' src={profile_pic} alt='Bjorn-Donald Bassey' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero