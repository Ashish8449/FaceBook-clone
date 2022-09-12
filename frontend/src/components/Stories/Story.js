import React from 'react'

export default function Story({ item }) {
  return (
    <div className='cursor-pointer shadow-md rounded-xl md:w-24  h-48 relative'>
      <div class='relative overflow-hidden bg-no-repeat bg-cover max-w-xs'>
        <img
          className='w-32 h-48  shadow-md rounded-xl transition-all  hover:scale-125'
          src={item.image}
          alt=''
        />
      </div>
      <div className='absolute top-2 w-10 z-10 left-2 rounded-full'>
        <img
          src={item.profile_picture}
          className='w-8 h-8 rounded-full border border-blue-color'
          alt=''
        />
      </div>
      <div className='md:text-sm text-xs px-3 opacity-90 break-words font-bold absolute bottom-4  text-bg-primary'>
        {item.profile_name}
      </div>
    </div>
  )
}
