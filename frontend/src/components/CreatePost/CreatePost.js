import React from 'react'
import { Feeling, LiveVideo, Photo } from '../../svg'

export default function CreatePost({ user, setVisibelCreatePost }) {
  return (
    <div className='bg-bg-primary shadow-lg rounded-xl mt-3   py-5 '>
      <div className='flex gap-3 items-center md:px-8 px-3'>
        <img
          src={user.picture}
          className='w-10 object-cover h-10 rounded-full'
          alt=''
        />
        <div className='bg-bg-forth h-10 hover2 cursor-pointer rounded-3xl flex-1 px-3 flex items-center text-secondary' onClick={()=>setVisibelCreatePost((pre)=>!pre)} >
          {' '}
          What's on your mind ?{' '}
        </div>
      </div>
      <div className='border-b my-3 border-bg-secondary'></div>
      <div className='flex justify-between mt-4 md:px-8 px-4'>
        <div className='flex flex-wrap justify-center items-center md:gap-3 gap-1'>
          <LiveVideo color='#f3425f' />
          <div className='text-secondary font-medium text-sm sm:text-base'>
            Live Video
          </div>
        </div>{' '}
        <div className='flex items-center gap-3 flex-wrap justify-center'>
          <Photo color='#4bbf67' />
          <div className='text-secondary font-medium   text-sm sm:text-base'>
            Photo/Video
          </div>
        </div>{' '}
        <div className='flex items-center gap-3 flex-wrap justify-center'>
          <Feeling color='#f7b928' />
          <div className='text-secondary font-medium  text-sm sm:text-base'>
            Feeling Activity
          </div>
        </div>
      </div>
    </div>
  )
}
