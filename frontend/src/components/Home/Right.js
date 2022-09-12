import React from 'react'
import { Dots, NewRoom, Search } from '../../svg'

export default function Right({ user }) {
  const color = '#65676b'
  return (
    user && (
      <div className=' w-64 right-10 mt-3 ml-3 rounded-md hidden lg:block '>
        <div className='pb-3 border-b border-secondary text-secondary'>
          Sponsored
        </div>
        <div className='flex items-center mt-3'>
          <div className='flex-1'>Contacts</div>
          <div className='flex items-center'>
            <div className='mr-3 text-lg hover1'>
              <NewRoom color={color} />
            </div>
            <div className='mr-3 text-lg hover1'>
              <Search color={color} />
            </div>
            <div className='mr-3 text-lg hover11'>
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className='flex hover3 items-center rounded-md my-3 hover:cursor-pointer  py-3'>
          <img
            src={user.picture}
            className='w-12 h-12 rounded-full mr-3 ml-2'
            alt=''
          />
          <div className='text-lg font-medium'>
            {user.first_name} {user.last_name}
          </div>
        </div>
      </div>
    )
  )
}
