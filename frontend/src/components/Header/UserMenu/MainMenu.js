import React from 'react'

export default function MainMenu({ user, setVisibel, logOut }) {
  return (
    <div className='mt-5'>
      <div className='flex items-center gap-5 px-5'>
        <img src={user.picture} className='rounded-full w-10 h-10 ' alt='' />
        <div className='font-medium text-lg'>
          {user.first_name + ' ' + user.last_name}
        </div>
      </div>
      <div
        className='flex align-middle items-center my-2  px-5 py-3 hover3'
        onClick={() => setVisibel(1)}
      >
        <div className='small_circle'>
          <i className='settings_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium'>Settings & privacy</div>
        <div className='rArrow'>
          <i className='right_icon'></i>
        </div>
      </div>{' '}
      <div
        className='flex align-middle items-center my-2  px-5 py-3 hover3'
        onClick={() => setVisibel(2)}
      >
        <div className='small_circle'>
          <i className='help_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Help & Support</div>
        <div className='rArrow'>
          <i className='right_icon'></i>
        </div>
      </div>{' '}
      <div
        className='flex align-middle items-center my-2  px-5 py-3 hover3'
        onClick={() => setVisibel(3)}
      >
        <div className='small_circle'>
          <i className='dark_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium'>Display & accessibility</div>
        <div className='rArrow'>
          <i className='right_icon'></i>
        </div>
      </div>{' '}
      <div className='flex align-middle items-center my-2  px-5 py-3 hover3'>
        <div className='small_circle'>
          <i className='logout_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium' onClick={logOut}>
          Log Out
        </div>
      </div>
    </div>
  )
}
