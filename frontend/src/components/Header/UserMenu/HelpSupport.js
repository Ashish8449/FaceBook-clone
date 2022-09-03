import React from 'react'

export default function HelpSupport({ setVisibel }) {
  return (
    <div className=''>
      <div className='mb-3 px-5 flex '>
        <div
          className='hover1 rounded-full w-8 h-8 flex justify-center items-center mr-3 '
          onClick={() => setVisibel(0)}
        >
          <i className='arrow_back_icon'></i>
        </div>
        <div className='font-medium text-xl'>Settings & privacy</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='help_center_icon'></i>
        </div>
        <div className='flex-1 font-medium '>Help Center</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='email_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Support Inbox</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='info_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium '>Report a Problem</div>
      </div>
    </div>
  )
}
