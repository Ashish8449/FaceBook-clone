import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginFooter() {
  return (
    <footer className='md:w-4/5 m-auto min-h-[22vh] bg-bg-primary py-1'>
      <div className=' my-4 flex flex-wrap px-3 '>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          English(UK)
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Français(FR)
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          العربية
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          ⵜⴰⵎⴰⵣⵉⵖⵜ
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Español (España)
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          italiano
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Deutsch
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Português (Brasil)
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          हिन्दी
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          中文(简体)
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          日本語
        </Link>
        <Link
          className='hover:underline text-sm mr-3 text-secondary px-1 pt-[0.5]  bg-bg-third'
          to='/'
        >
          <i className='plus_icon'></i>
        </Link>
      </div>
      <div className='divide-y divide-divider'></div>
      <div className=' my-1 flex flex-wrap justify-between px-3'>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Sign Up
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Log in
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Messenger
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Facebook Lite
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Watch
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Places
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Games
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Marketplace
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Facebook Pay
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Oculus
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Portal
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Instagram
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Bulletin
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Local
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Fundraisers
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Services
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Voting Information Centre
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Groups
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          About
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Create ad
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Create Page
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Developers
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Careers
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Privacy
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Cookies
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          AdChoices
          <i className='adChoices_icon'></i>
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Terms
        </Link>
        <Link className='hover:underline text-sm mr-3 text-secondary ' to='/'>
          Help
        </Link>
      </div>
      <div class='  border-solid border border-bg-third w-full h-[1px] my-1'></div>
      <div className='login_footer_wrap'>
        <Link
          className='hover:underline text-sm mr-3 px-3 text-secondary '
          to='/'
          style={{ fontSize: '12px', marginTop: '10px' }}
        >
          {' '}
          Meta © 2022
        </Link>
      </div>
    </footer>
  )
}
