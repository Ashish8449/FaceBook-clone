import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Picker from 'emoji-picker-react'
import { useClickOutSide } from '../../Helper/clickOutSide'
export default function Comments({ user }) {
  const [picker, setPicker] = useState(false)
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [cursorPostion, setCursorPostion] = useState(false)
  const [commentImg, setCommentImg] = useState('')
  const textRef = useRef(null)
  const imageInputRef = useRef(null)
  const pickerRef = useRef(null)

  const handelEmoji = (e, { emoji }) => {
    const ref = textRef.current
    ref.focus()
    setPicker(true)
    const start = text.substring(0, ref.selectionStart)
    const end = text.substring(ref.selectionEnd)
    setText(start + emoji + end)
    setCursorPostion(start.length + emoji.length)
  }

  useEffect(() => {
    textRef.current.selectionEnd = cursorPostion
  }, [cursorPostion])

  useClickOutSide(pickerRef, () => setPicker(false))
  const handelImage = (e) => {
    let file = e.target.files[0]
    console.log(file)
    if (
      file.type !== 'image/jpeg' &&
      file.type !== 'image/png' &&
      file.type !== 'image/gif' &&
      file.type !== 'image/webp' &&
      file.type !== 'image/gif'
    ) {
      setError(`${file.name} formate is not supported`)
      return
    } else if (file.size > 1024 * 3 * 1024) {
      setError(`${file.name} is too large`)
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      setCommentImg(e.target.result)
    }
  }
  return (
    <div className='bg-bg-primary rounded-b-xl border-t border-bg-secondary pl-4'>
      <div className='flex my-3 gap-3 '>
        <div className='w-10 h-10 rounded-full'>
          <img
            src={user.picture}
            alt='userimg'
            className='rounded-full w-full h-full'
          />
        </div>
        <div className='flex-1 rounded-3xl bg-bg-third h-11 flex mr-3 align-middle items-center relative'>
          <input
            type='text'
            className='flex-1 bg-bg-third rounded-3xl focus:outline-none px-3'
            placeholder='Write a comment...'
            value={text}
            ref={textRef}
            onChange={(e) => setText(e.target.value)}
          />
          {picker && (
            <div
              className={`absolute z-50  bottom-12 right-0 `}
              ref={pickerRef}
            >
              <Picker onEmojiClick={handelEmoji} />
            </div>
          )}
          <input
            type='file'
            hidden
            // accept='images/jpeg, image/png, image/gif, image/webp'
            ref={imageInputRef}
            onChange={handelImage}
          />
          <div className='pr-8 flex gap-3'>
            <i
              className='emoji_icon '
              onClick={() => setPicker((pre) => !pre)}
            ></i>
            <i
              className='camera_icon'
              onClick={() => imageInputRef.current.click()}
            ></i>
            <i className='gif_icon'></i>
            <i className='sticker_icon'></i>
          </div>
        </div>
      </div>
      {error && (
        <div className='flex  justify-between items-center my-3 pr-3'>
          <div className='text-error'>{error}</div>
          <div className=''>
            <button className='bg-blue-color px-3 py-1 rounded-md text-bg-primary'>
              Try Again
            </button>
          </div>
        </div>
      )}
      {commentImg && (
        <div className='w-52 h-28 my-3 relative'>
          <img
            src={commentImg}
            className='w-full h-full object-cover rounded-sm'
            alt=''
          />
          <div
            onClick={() => setCommentImg('')}
            className='cursor-pointer w-6 flex justify-center items-center h-6 rounded-full absolute top-0 right-0 bg-bg-forth'
          >
            <i className='exit_icon '></i>
          </div>
        </div>
      )}
    </div>
  )
}
