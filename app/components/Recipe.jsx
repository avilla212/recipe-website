import React from 'react'
import RecipeItem from '../components/RecipeItem'
import cheesecake from '../assets/cheesecake.png'

const Recipe = () => {
  return (
    // grid grid-cols-3 gap-4

    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='font-bold tracking-widest text-center'>Recipes</h1>
        <div className='grid md:grid-cols-2 gap-8'>
            <RecipeItem photos={cheesecake} />
            <RecipeItem photos={cheesecake} />
            <RecipeItem photos={cheesecake} />
            <RecipeItem photos={cheesecake} />

        </div>
    </div>
    </div>
  )
}

export default Recipe