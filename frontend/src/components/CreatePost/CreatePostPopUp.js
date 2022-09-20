import React, { useRef, useState } from 'react'
// import { Feeling, LiveVideo, Photo } from '../../svg'

import { useEffect } from 'react'
import { createPost } from '../../Functions/post'
import { useClickOutSide } from '../../Helper/clickOutSide'
import AddToOurPost from './AddToOurPost'
import EmojiPickerBackground from './EmojiPickerBackground'
import EmojiPickerBackgroun from './EmojiPickerBackground'
import ImagePreview from './ImagePreview'
import dataURItoBlob from '../../Helper/dataURItoBlob'
import PulseLoader from 'react-spinners/PulseLoader'
import { uploadImages } from '../../Functions/uploadImages'
export default function CreatePostPopUp({ user, setVisibelCreatePost }) {
  const CreatePostRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [text, setText] = useState('')
  const [preview, setPreview] = useState(false)
  const [images, setImages] = useState([])
  const [background, setBackground] = useState('')
  useClickOutSide(CreatePostRef, () => setVisibelCreatePost(false))
  const postSubmit = async () => {
    setLoading(true)
    if (background) {
      const response = await createPost(
        null,
        background,
        text,
        null,
        user.id,
        user.token
      )
      console.log(response)
      if (response.status === 'ok') {
        setText('')

        setVisibelCreatePost(false)
      } else {
        setError(response.data.message)
      }
    } else if (images && images.length) {
      const postImages = images.map((img) => {
        return dataURItoBlob(img)
      })
      const path = `${user.username}/post_images`
      let formData = new FormData()
      formData.append('path', path)
      postImages.forEach((image) => {
        formData.append('file', image)
      })
      const response = await uploadImages(formData, path, user.token)
      const res = await createPost(
        null,
        null,
        text,
        response,
        user.id,
        user.token
      )
      console.log(response)
      if (res.status === 'ok') {
        setText('')

        setVisibelCreatePost(false)
      } else {
        setError(res.data.message)
      }
    } else if (text) {
      const response = await createPost(
        null,
        null,
        text,
        null,
        user.id,
        user.token
      )
      console.log(response)
      if (response.status === 'ok') {
        setText('')

        setVisibelCreatePost(false)
      } else {
        setError(response.data.message)
      }
    } else {
      console.log('nothing')
    }
    setLoading(false)
  }

  return (
    <div className='absolute top-0 backdrop-blur-sm z-50 justify-center  flex align-middle items-center w-full h-screen'>
      <div
        className='w-[400px] shadow-lg bg-bg-primary  rounded-md'
        ref={CreatePostRef}
      >
        <div className='flex py-2 px-3'>
          <span className='font-medium flex-1 '>Create Post</span>
          <div
            className='hover:cursor-pointer'
            onClick={() => setVisibelCreatePost(false)}
          >
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
          <EmojiPickerBackground
            text={text}
            setText={setText}
            user={user}
            setBackground={setBackground}
            background={background}
          />
        ) : (
          <ImagePreview
            text={text}
            setText={setText}
            user={user}
            images={images}
            setImages={setImages}
          />
        )}
        <AddToOurPost setPreview={setPreview} />

        <div className='text-center my-3'>
          <button
            onClick={postSubmit}
            className='btn py-2 rounded-lg  px-4 bg-blue-color text-bg-primary w-4/5  '
            disabled={loading}
          >
            {loading ? (
              <PulseLoader color='#fff' size={5} />
            ) : error ? (
              'Try Again'
            ) : (
              'Post'
            )}
          </button>
          {error && <div className='text-error text-center'>{error}</div>}
        </div>
      </div>
    </div>
  )
}
