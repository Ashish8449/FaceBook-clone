import React, { useRef, useState } from 'react'
// import { Feeling, LiveVideo, Photo } from '../../svg'

import { useEffect } from 'react'
import AddToOurPost from './AddToOurPost'
import EmojiPickerBackground from './EmojiPickerBackground'
import EmojiPickerBackgroun from './EmojiPickerBackground'
import ImagePreview from './ImagePreview'
export default function CreatePost({ user }) {
  const [text, setText] = useState('')
  const [preview, setPreview] = useState(true)
  const [images, setImages] = useState([])

  console.log(images)

  return (
    <div className='absolute top-0 backdrop-blur-sm z-50 justify-center  flex align-middle items-center w-full h-screen'>
      <div className='w-[400px] shadow-lg bg-bg-primary  rounded-md'>
        <div className='flex py-2 px-3'>
          <span className='font-medium flex-1 '>Create Post</span>
          <div className=''>
            <i className='exit_icon'></i>
          </div>
        </div>
        <div className='border-b border-bg-secondary '></div>
        <div className='flex px-4 my-2 gap-1'>
          <div className='rounded-full w-12 h-12'>
            <img
              src={user.picture}
              className='object-cover rounded-full w-10 h-10'
              alt=''
            />
          </div>
          <div className=''>
            <div className='font-medium text-sm'>
              {user.first_name} {user.last_name}
            </div>
            <div className='flex bg-bg-secondary py-1 rounded-mditems-center align-middle gap-2 justify-center'>
              <div className=''>
                {' '}
                <img src='../../../icons/public.png' alt='' />
              </div>
              <span className='text-xs font-medium'>Public</span>
              <i className='arrowDown_icon'></i>
            </div>
          </div>
        </div>
        {!preview ? (
          <EmojiPickerBackground text={text} setText={setText} user={user} />
        ) : (
          <ImagePreview
            text={text}
            setText={setText}
            user={user}
            images={images}
            setImages={setImages}
          />
        )}
        <AddToOurPost />
      </div>
    </div>
  )
}
