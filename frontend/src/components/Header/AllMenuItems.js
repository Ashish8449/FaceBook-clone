import React from 'react'

export default function AllMenuItem({ name, description, icon }) {

  return (
    <div className='hover1 flex rounded-xl px-3 py-2 my-3 align-top'>
      <img src={`../../left/${icon}.png`} className='object-contain' alt='' />
      <div className='ml-5'>
        <p className='font-medium'>{name}</p>
        <span className='text-sm leading-[10px] text-secondary tracking-tight'>
          {description}
        </span>
      </div>
    </div>
  )
}
