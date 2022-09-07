import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from '../../svg'
import AllMenu from './AllMenu'
import SearchMenu from './SearchMenu'
export default function Header() {
  const color = '#65676b'
  const { user } = useSelector((state) => state)
  const [isMenuVisibel, setMenuVisibel] = useState(false)
  console.log(user)
  return (
    <header className='fixed h-[56px] bg-bg-primary z-50 w-full top-0 shadow-2xl shadow-shadow-2 grid grid-cols-3 text-primary'>
      <div className=''>
        <div className='flex gap-4 items-center py-1 px-4 '>
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
              onClick={() => setMenuVisibel(true)}
            />
          </div>
        </div>
        {isMenuVisibel && (
          <SearchMenu color={color} setMenuVisibel={setMenuVisibel} />
        )}
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
      <div className='flex ml-auto items-center h-full'>
        {/* <Link to='/profile'><> */}
        <Link to='/profile' className='flex align-middle'>
          <img
            src={user?.picture}
            className='w-8 h-8 object-cover rounded-full'
            alt=''
          />
          <span className='font-medium mx-2'>{user.first_name}</span>
        </Link>
        <div className='hover1 rounded-full mx-3 p-3'>
          <Menu />
        </div>{' '}
        <div className='hover1 rounded-full  p-2'>
          <Messenger />
        </div>{' '}
        <div className='hover1 rounded-full  p-2 relative'>
          <Notifications />
          <div className='absolute top-0 -right-2 text-[13px] text-bg-primary font-medium rounded-full  text-center px-[4px] bg-[#e41e3f] '>
            9+
          </div>
        </div>{' '}
        <div className='hover1 rounded-full  p-2'>
          <ArrowDown />
        </div>
      </div>
      <AllMenu color={color} />
    </header>
  )
}
