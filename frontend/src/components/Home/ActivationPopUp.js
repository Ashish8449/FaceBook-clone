import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
export default function ActivationPopUp({ type, header, text, loading }) {
  return (
    <div className='absolute backdrop-blur-sm z-50 justify-center flex align-middle items-center w-full h-screen'>
      <div className='w-[350px]  -translate-y-1/2 text-center shadow-lg h-52 bg-bg-primary rounded-md'>
        <div
          className={`font-medium py-4 border-b border-bg-third ${
            type === 'success' ? 'text-green-color' : 'text-error'
          }`}
        >
          {header}
        </div>
        <div className='mb-12 mt-10'>{text}</div>
        <PropagateLoader color='#1876f2' size={30} loading={loading} />
      </div>
    </div>
  )
}
