import React, { useRef } from 'react'
import { create, menu } from '../../data/allMenu'
import { useClickOutSide } from '../../Helper/clickOutSide'
import { Search } from '../../svg'
import AllMenuItem from './AllMenuItems'

export default function AllMenu({ color, setMenuVisibel }) {
  const menuRef = useRef(null)
  useClickOutSide(menuRef, () => setMenuVisibel(false))
  return (
    <div
      ref={menuRef}
      className='absolute lg:w-[50%]   max-h-[90vh] right-0 z-10 bg-bg-primary top-[56px] shadow-lg rounded-md  py-3 '
    >
      <div className='my-2 font-semibold text-2xl px-8'>Menu </div>
      <div className='sm:grid flex-wrap sm:grid-cols-3 grid-cols-1   overflow-y-scroll scrollbar h-[80vh]'>
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
          <div className='border-b-2 border-bg-third my-4  relative'>
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
        <div className='pl-3 '>
          <div className='shadow-xl rounded-2xl fixed px-2 '>
            <div className='text-xl font-medium my-3'>Create</div>
            {create.map((item, i) => (
              <div
                className='flex align-middle items-center py-2 h-12 hover1'
                key={i}
              >
                <div className='all_right_circle w-8 flex items-center bg-bg-secondary justify-center h-8 mr-4 rounded-full'>
                  <i className={item.icon}></i>
                </div>
                <div className='font-medium text-lg'>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
