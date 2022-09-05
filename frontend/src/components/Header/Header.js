import React from 'react'
import { Link } from 'react-router-dom'
import { Friends, Gaming, HomeActive, Logo, Search, Watch } from '../../svg'
export default function Header() {
  const color = '#65676b'
  return (
    <header className='fixed h-[56px] bg-bg-primary z-50 w-full top-0 shadow-2xl shadow-shadow-2 grid grid-cols-3 text-primary'>
      <div className='flex gap-4 items-center py-1 px-4'>
        <Link to='/'>
          <div className='w-10 h-10 rounded-full flex justify-center align-middle cursor-pointer'>
            <Logo />
          </div>
        </Link>

        <div className='flex items-center bg-bg-forth  rounded-3xl px-2 pr-3 h-10'>
          <Search color={color} className='' />
          <input
            type='text'
            placeholder='Search Facebook'
            className='outline-none ml-2  '
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      <div className='flex items-center gap-4  translate-x-[3px]'>
        <Link
          to='/'
          className='cursor-pointer flex relative justify-center py-1 align-middle items-center w-32 h-full  hover1 border-b-2 border-blue-color'
        >
          <HomeActive />
        </Link>{' '}
        <Link
          to='/'
          className='cursor-pointer flex relative justify-center py-1 align-middle  items-center w-32 h-10 hover1'
        >
          <Friends color={color} />
        </Link>{' '}
        <Link
          to='/'
          className='cursor-pointer flex relative justify-center py-1 align-middle items-center  w-32 h-10 hover1'
        >
          <Watch color={color} />
          <div className='absolute top-0 right-4 text-[13px] text-bg-primary font-medium rounded-full  text-center px-[4px] bg-[#e41e3f] '>
            9+
          </div>
        </Link>{' '}
        <Link
          to='/'
          className='cursor-pointer flex relative justify-center py-1 align-middle  items-center w-32 h-10 hover1'
        >
          <Gaming color={color} />
        </Link>
      </div>
      <div className=''>right</div>
    </header>
  )
}
