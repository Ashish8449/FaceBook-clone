import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  Friends,
  Gaming,
  Home,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from '../../svg'
import AllMenu from './AllMenu'
import SearchMenu from './SearchMenu'
import UserMenu from './UserMenu'
export default function Header({ page }) {
  const color = '#65676b'
  const { user } = useSelector((state) => state.user)
  const [isMenuVisibel, setMenuVisibel] = useState(false)
  const [isAllMenuVisibel, setAllMenuVisibel] = useState(false)
  const [isUserMenuVisibel, setUserMenuVisibel] = useState(false)
  console.log(user)
  return (
    <header className='fixed items-center h-[56px] bg-bg-primary z-50 w-full top-0 shadow-2xl shadow-shadow-2 flex   text-primary'>
      <div className=''>
        <div className='flex gap-4 items-center py-1 sm:px-4 pl-2 '>
          <Link to='/' className=''>
            <div className='w-10 h-10  rounded-full flex justify-center align-middle cursor-pointer'>
              <Logo />
            </div>
          </Link>

          <div
            className='flex items-center bg-bg-forth  rounded-3xl px-2 pr-3 h-10 mll-5 lg:mr-0'
            onClick={() => setMenuVisibel(true)}
          >
            <Search color={color} className='' />
            <input
              type='text'
              placeholder='Search Facebook'
              className='outline-none ml-2 hidden lg:block  '
              style={{ background: 'transparent' }}
              onClick={() => setMenuVisibel(true)}
            />
          </div>
        </div>
        {isMenuVisibel && (
          <SearchMenu color={color} setMenuVisibel={setMenuVisibel} />
        )}
      </div>
      <div className='flex-1 justify-center'>
        <div className='flex items-center justify-evenly '>
          <Link
            to='/'
            className={`cursor-pointer sm:flex relative justify-center py-1 align-middle items-center xl:w-32 lg:w-20 sm:w-20  h-full  hover1 ${
              page === 'Home' ? ' border-b-2 border-blue-color' : ''
            } hidden `}
          >
            {page === 'Home' ? <HomeActive /> : <Home />}
          </Link>{' '}
          <Link
            to='/'
            className='cursor-pointer flex relative justify-center py-1 align-middle  items-center h-10 hover1'
          >
            <Friends color={color} />
          </Link>{' '}
          <Link
            to='/'
            className='cursor-pointer md:flex hidden relative justify-center py-1 align-middle items-center h-10 hover1'
          >
            <Watch color={color} />
            <div className='absolute top-0 right-4 text-[13px] text-bg-primary font-medium rounded-full  text-center px-[4px] bg-[#e41e3f] '>
              9+
            </div>
          </Link>{' '}
          <Link
            to='/'
            className='cursor-pointer md:flex hidden relative justify-center py-1 align-middle  items-center h-10 hover1'
          >
            <Market color={color} />
          </Link>{' '}
          <Link
            to='/'
            className='cursor-pointer md:flex relative justify-center py-1 align-middle  items-center  h-10 hover1 hidden '
          >
            <Gaming color={color} />
          </Link>
        </div>
      </div>
      <div className='flex ml-auto items-center h-full'>
        {/* <Link to='/profile'><> */}
        <img
          src={user.picture}
          className='w-8 h-8 object-cover rounded-full mr-2 hidden sm:block'
          alt=''
        />
        <Link to='/profile' className='sm:flex align-middle mx-2 hidden '>
          <span className='font-medium '>{user.first_name}</span>
        </Link>
        <div
          className={`hover1 rounded-full small_circle p-3 ${
            isAllMenuVisibel ? 'fill-blue-color' : ''
          } `}
          onClick={() => setAllMenuVisibel(!isAllMenuVisibel)}
        >
          <Menu />
        </div>{' '}
        <div className='hover1 rounded-full small_circle    p-2'>
          <Messenger />
        </div>{' '}
        <div className='hover1 rounded-full p-2 relative small_circle '>
          <Notifications />
          <div className='absolute -top-2 -right-2 text-[13px] text-bg-primary font-medium rounded-full  text-center px-[4px] bg-[#e41e3f] '>
            9+
          </div>
        </div>{' '}
        <div className=''>
          <div
            className={`hover1 rounded-full  relative small_circle  p-2 ${
              isUserMenuVisibel ? 'fill-blue-color' : ''
            } `}
            onClick={() => {
              console.log(isUserMenuVisibel)
              setUserMenuVisibel(!isUserMenuVisibel)
            }}
          >
            <ArrowDown />
          </div>
          {isUserMenuVisibel && (
            <UserMenu user={user} setUserMenu={setUserMenuVisibel} />
          )}
        </div>
      </div>
      {isAllMenuVisibel && (
        <AllMenu color={color} setMenuVisibel={setAllMenuVisibel} />
      )}
    </header>
  )
}
