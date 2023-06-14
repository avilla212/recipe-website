import React from 'react'
import Image from 'next/image'
import food from '../assets/food.png'

const About = () => {
  return (
    <div id = 'about' className='w-full  p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'> 
        <div className='col-span-2'>
          <p className='py-6 text-xl'>
            Hi Kate or anyone viewing this. This is a website I made from scratch in order to store all of the delicious food recipes 
            my girlfriend and I find on tiktok. Otherwise, they will get lost in our messages on tiktok. 
          </p>
        </div>

        <div className='w-full h-auto m-auto flex items-center justify-center p-4 '>
          <Image 
          className='rounded-xl'
          src={food}
          />
        </div>
      </div>
    </div>
  )
}

export default About