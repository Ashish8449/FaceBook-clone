import React from 'react'

export default function DisplayAccessibility({ setVisibel }) {
  return (
    <div className=''>
      <div className='mb-3 px-5 flex '>
        <div
          className='hover1 rounded-full w-8 h-8 flex justify-center items-center mr-3 '
          onClick={() => setVisibel(0)}
        >
          <i className='arrow_back_icon'></i>
        </div>
        <div className='font-medium text-xl'> Display & Accessibility</div>
      </div>
      <div className='flex px-5'>
        <div className=' w-16 h-8 mr-2 bg-bg-secondary justify-center items-center flex rounded-full'>
          <i className='dark_filled_icon'></i>
        </div>
        <div className=''>
          <div className='text-lg font-medium'>Dark Mode</div>
          <div className='text-sm font-medium text-secondary'>
            {' '}
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </div>
          <label
            htmlFor='darkOff'
            className='hover1 rounded-sm flex pr-2 items-center'
          >
            <span className='flex-1 text-lg my-3 font-medium'>Off</span>
            <input type='radio' className='w-5 h-5' name='dark' id='darkOff' />
          </label>
          <label
            htmlFor='darkOn'
            className='hover1 rounded-sm pr-2 flex  items-center'
          >
            <span className='flex-1 text-lg my-3 font-medium'>On</span>
            <input type='radio' className='w-5 h-5' name='dark' id='darkOn' />
          </label>
        </div>
      </div>{' '}
      <div className='flex px-5'>
        <div className=' w-16 h-8 mr-2 bg-bg-secondary justify-center items-center flex rounded-full'>
          <i className='compact_icon'></i>
        </div>
        <div className=''>
          <div className='text-lg font-medium'>Compact Mode</div>
          <div className='text-sm font-medium text-secondary'>
            {' '}
            Make your font size smaller so that more content can fit on the
            screen.
          </div>
          <label
            htmlFor='compactOff'
            className='hover1 rounded-sm flex pr-2 items-center'
          >
            <span className='flex-1 text-lg my-3 font-medium'>Off</span>
            <input
              type='radio'
              className='w-5 h-5'
              name='compact'
              id='compactOff'
            />
          </label>
          <label
            htmlFor='compactOn'
            className='hover1 rounded-sm pr-2 flex  items-center'
          >
            <span className='flex-1 text-lg my-3 font-medium'>On</span>
            <input
              type='radio'
              className='w-5 h-5'
              name='compact'
              id='compactOn'
            />
          </label>
        </div>
      </div>
      <div
        className='flex align-middle items-center my-2  px-5 py-3 hover3'
      
      >
        <div className='small_circle'>
          <i className='keyboard_icon'></i>
        </div>
        <div className='flex-1 font-medium'>Keyboard</div>
        <div className='rArrow'>
          <i className='right_icon'></i>
        </div>
      </div>
    </div>
  )
}
