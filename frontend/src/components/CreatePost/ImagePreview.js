import React from 'react'
import { useRef } from 'react'
import EmojiPickerBackground from './EmojiPickerBackground'

export default function ImagePreview({
  text,
  setText,
  user,
  images,
  setImages,
}) {
  const imageInputRef = useRef(null)
  console.log(images)
  const handleImages = (e) => {
    let files = Array.from(e.target.files)

    files.forEach((img) => {
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = (readerEvent) => {
        setImages((images) => [...images, readerEvent.target.result])
      }
    })
  }
  return (
    <div className=''>
      <EmojiPickerBackground
        text={text}
        setText={setText}
        user={user}
        secondary={true}
      />
      <input
        type='file'
        accept='image/jpeg,image/png,image/webp,image/gif'
        multiple
        hidden
        ref={imageInputRef}
        onChange={handleImages}
      />
      {images && images.length ? (
        <div className='add_pics_inside1 p0  '>
          <div className='preview_actions absolute'>
            <button className='hover1'>
              <i className='edit_icon'></i>
              Edit
            </button>
            <button
              className='hover1'
              onClick={() => {
                imageInputRef.current.click()
              }}
            >
              <i className='addPhoto_icon'></i>
              Add Photos/Videos
            </button>
          </div>
          <div
            className=' bg-bg-primary w-8 h-8 text-sm rounded-full absolute flex justify-center items-center top-2 right-2 hover1'
            onClick={() => {
              setImages([])
            }}
          >
            <i className='exit_icon'></i>
          </div>
          <div
            className={
              images.length === 1
                ? 'preview1'
                : images.length === 2
                ? 'preview2'
                : images.length === 3
                ? 'preview3'
                : images.length === 4
                ? 'preview4 '
                : images.length === 5
                ? 'preview5'
                : images.length % 2 === 0
                ? 'preview6'
                : 'preview6 singular_grid'
            +"hidden"}
          >
            {images.map((img, i) => (
              <img className='rounded-md' src={img} key={i} alt='' />
            ))}
          </div>
        </div>
      ) : (
        <div className='border border-bg-forth px-2 '>
          <div
            className='bg-bg-third relative rounded-md'
            onClick={() => imageInputRef.current.click()}
          >
            <div className='  bg-bg-primary w-8 h-8 text-sm rounded-full absolute flex justify-center items-center top-2 right-2 hover1'>
              <i className='exit_icon'></i>
            </div>
            <div className='flex flex-col align-middle items-center justify-center cursor-pointer m-2 h-[200px] '>
              <div className=''>
                <i className='addPhoto_icon'></i>
              </div>
              <span className='text-sm font-medium mt-2'>
                Add Photos/Videos
              </span>
              <span className='text-secondary text-xs'>or drag and drop</span>
            </div>
          </div>
          <div className='bg-bg-third px-2 py-2 flex '>
            <div className='flex-1 flex gap-2 items-center'>
              <div className='bg-bg-secondary w-8 h-8 flex justify-center items-center rounded-full'>
                <i className='phone_icon'></i>
              </div>
              <div className='text-sm text-secondary font-medium'>
                Add phots from your mobile device.
              </div>
            </div>
            <button className='bg-bg-secondary px-2 rounded-md py-1'>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
