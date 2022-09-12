import React from 'react'

export default function SimpleModal({ onClose, isOpen, ...props }) {
  const handelClose = () => {
    console.log('pre')
    onClose(false)
  }

  return (
    <div
      className={`absolute ${
        isOpen ? '' : 'hidden'
      } top-0 bg-[] bg-[rgba(255,255,255,0.5)] z-50 w-full  flex justify-center`}
    >
      <div
        id='popup-modal'
        tabindex='-1'
        class=' bg-bg-primary z-10 md:inset-0 md:h-auto shadow-md rounded-lg my-3 relative py-2'
      >
        <div className='absolute z-50 top-4 right-3 hover:cursor-pointer '>
          <i
            className='z-50 exit_icon  ml-auto object-contain hover:cursor-pointer'
            onClick={handelClose}
          ></i>
        </div>
        <div class='relative px-4 w-[80vw] max-w-md md:w-96 md:h-auto'>
          {props.children}
        </div>
      </div>
    </div>
  )
}
