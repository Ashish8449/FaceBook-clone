import React from 'react'
import { Link } from 'react-router-dom'
import { Dots } from '../../svg'

export default function ProfileMenu() {
  return (
    <div>
      <div className='flex border-t-2 items-center border-secondary'>
        <div className='hover1 rounded px-6 font-medium text-secondary text-lg py-3 profile_menu_active'>
          <Link to='/'>Posts</Link>
        </div>
        <div className='hover1 px-6 font-medium text-secondary text-lg py-3 '>
          <Link to='/'>About</Link>
        </div>
        <div className='hover1 px-6 font-medium text-secondary text-lg py-3 '>
          <Link to='/'>Friends</Link>
        </div>
        <div className='hover1 px-6 font-medium text-secondary text-lg py-3 '>
          <Link to='/'>Photos</Link>
        </div>
        <div className='hover1 px-6 font-medium text-secondary text-lg py-3 '>
          <Link to='/'>Videos</Link>
        </div>
        <div className='hover1 px-6 font-medium text-secondary text-lg py-3 '>
          <Link to='/'>More</Link>
        </div>
        <div className='ml-auto bg-bg-third p-3 rounded px-5'>
          <Dots />
        </div>
      </div>
    </div>
  )
}
