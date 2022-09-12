import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftLInk({ img, text, notification }) {
  return (
    <Link to='/profile'>
      <div className='flex items-center py-2 lg:px-4 hover1 rounded-md hover:cursor-pointer '>
        <img
          className='lg:w-10 w-12 h-12 lg:h-10 p-2 lg:p-0 mr-3 ml-2 object-cover bg-bg-third md:bg- rounded-full '
          src={`../../../left/${img}.png`}
          alt=''
        />
        {notification !== undefined ? (
          <div className='lg:block hidden'>
            <div className='font-medium'>{text}</div>
            <div className='text-blue-color text-sm flex items-center'>
              {' '}
              <div className='w-2 h-2 mr-2 bg-blue-color rounded-full'></div>{' '}
              {notification}
            </div>
          </div>
        ) : (
          <span className='font-medium lg:block hidden'>{text}</span>
        )}
      </div>
    </Link>
  )
}
