import React from 'react'
import Image from 'next/image'

const RecipeItem = ({photos}) => {
  return (
    <div className='relative flex flex-col items-center justify-center h-auto w-full py-4'>
        
        <Image className ='rounded-xl h-full object-cover' src={photos} alt='/' />
        <h1 className='text-5xl'>Recipe title</h1>
        <ul className='mt-4'>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>

        </ul>
    </div>
  )
}

export default RecipeItem