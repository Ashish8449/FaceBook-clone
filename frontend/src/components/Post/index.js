import React from 'react'
import Moment from 'react-moment'
import { Public } from '../../svg'
export default function Post({ post }) {
  const { user } = post
  return (
    <div className='bg-bg-primary shadow-md rounded-lg py-3  '>
      <div className='flex px-4'>
        <div className='flex-1'>
          <div className='flex gap-3'>
            <img
              src={user.picture}
              className='w-10 h-10 rounded-full border-blue-color border'
              alt=''
            />
            <div className=''>
              <div className='font-medium text-md'>{user.first_name}</div>
              <div className='flex text-xs gap-1 align-middle items-center'>
                <Moment fromNow interval={30}>
                  {post.createdAt}
                </Moment>
                .<Public color='#828387' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
