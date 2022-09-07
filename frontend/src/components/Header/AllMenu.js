import React from 'react'
import { menu } from '../../data/allMenu'
import { Search } from '../../svg'
import AllMenuItem from './AllMenuItems'

export default function AllMenu({ color }) {
  return (
    <div className='absolute md:w-[45%] max-h-[90vh] right-0 z-10 bg-bg-primary top-[56px] shadow-lg rounded-md  py-3 '>
      <div className='my-2 font-semibold text-2xl px-8'>Menu </div>
      <div className='grid grid-cols-3 gap-6 overflow-y-scroll h-[80vh]'>
        <div className='col-span-2 shadow-xl px-8  '>
          <div className='flex items-center bg-bg-forth  rounded-3xl px-2 pr-3 h-10'>
            <Search color={color} className='' />
            <input
              type='text'
              placeholder='Search Menu'
              className='outline-none ml-2  '
              style={{ background: 'transparent' }}
            />
          </div>
          <div className='border-b-2 border-bg-third my-4 '>
            <div className='font-semibold text-xl my-3 '>Social</div>
            {menu.map((item, i) => (
              <AllMenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
