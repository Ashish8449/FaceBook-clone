import React, { useEffect, useRef, useState } from 'react'
import { useClickOutSide } from '../../Helper/clickOutSide'
import { Return, Search } from '../../svg'

export default function SearchMenu({ color, setMenuVisibel }) {
  const menuRef = useRef(null)
  const inputRef = useRef(null)
  const [isIcon, setIcon] = useState(true)
  useClickOutSide(menuRef, () => setMenuVisibel(false))
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div
      className='absolute top-0  p-3 min-h-[400px] max-h-[70vh] shadow-xl rounded-xl z-10 transition-transform bg-bg-primary md:min-w-[300px]'
      ref={menuRef}
    >
      <div className=''>
        <div className='flex gap-4 items-center'>
          <div className=''>
            <Return color={color} />
          </div>

          <div className=''>
            <div className='flex items-center bg-bg-forth  rounded-3xl px-2 pr-3 h-10'>
              {isIcon && <Search color={color} className='' />}
              <input
                ref={inputRef}
                type='text'
                placeholder='Search Facebook'
                className='outline-none ml-2  '
                style={{ background: 'transparent' }}
                onFocus={() => setIcon(false)}
                onBlur={() => setIcon(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 flex'>
        <div className='font-medium text-base'>Recent Searchs</div>
        <div className='text-blue-color ml-auto mr-5 hover:cursor-pointer'>
          Edit
        </div>
      </div>
    </div>
  )
}
