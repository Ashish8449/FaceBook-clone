import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { stories } from '../../data/home'
import { ArrowRight, Plus } from '../../svg'
import Story from './Story'

export default function Stories() {
  const mobileView = useMediaQuery({
    query: '(max-width: 767px)',
  })
  const max = mobileView ? 4 : 5
  return (
    <div className='flex items-center w-full'>
      <div className='shadow-lg rounded-lg relative  h-48 mr-2 w-32 hover:cursor-pointer'>
        <img
          src='../../../images/default_pic.png'
          alt=''
          className='rounded-t-md w-full h-[80%]'
        />
        <div className='absolute w-7 h-7 text-lg flex justify-center items-center rounded-full bottom-8 left-[40%] translate-[50%] bg-blue-color'>
          <Plus color='#fff' />
        </div>
        <div className='h-12 md:text-sm text-center text-xs font-medium   flex justify-center items-center '>
          Create Story
        </div>
      </div>
      <div className='flex justify-evenly md:gap-2 gap:1 relative'>
        {stories.slice(0, max).map((item, i) => (
          <Story item={item} key={i} />
        ))}
        <div className=' hover:cursor-pointer bg-bg-secondary opacity-90 flex justify-center rounded-full items-center w-10 h-10 absolute z-30 top-[40%] right-0'>
          <ArrowRight color='#65676b' />
        </div>
      </div>
    </div>
  )
}
