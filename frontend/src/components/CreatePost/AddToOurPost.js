import React from 'react'
import { Dots, Feeling, Photo } from '../../svg'
export default function AddToOurPost({ setPreview }) {
  return (
    <div className='my-2'>
      <div className='flex align-middle border px-4 py-2 border-bg-forth mx-2 rounded-sm'>
        <div className='flex-1 font-medium text-[12px] text-secondary'>
          Add to your post
        </div>
        <div className='flex'>
          <div className='mx-2 hover1' onClick={() => setPreview(true)}>
            <Photo color='#45bd62' />
          </div>{' '}
          <div className='mx-2 hover1'>
            <i className='tag_icon'></i>
          </div>
          <div className='mx-2 hover1'>
            <Feeling color='#f7b928' />
          </div>
          <div className='mx-2 hover1'>
            <i className='maps_icon'></i>
          </div>
          <div className='mx-2 hover1'>
            <i className='microphone_icon'></i>
          </div>
          <div className=' hover1'>
            <Dots color='#65676b' />
          </div>
        </div>
      </div>
    </div>
  )
}
