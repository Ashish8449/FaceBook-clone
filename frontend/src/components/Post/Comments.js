import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Picker from 'emoji-picker-react'
import { useClickOutSide } from '../../Helper/clickOutSide'
export default function Comments({ user }) {
  const [picker, setPicker] = useState(false)
  const [text, setText] = useState('')

  const [cursorPostion, setCursorPostion] = useState(false)
  const textRef = useRef(null)
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
  return (
    <div className='bg-bg-primary rounded-b-xl border-t border-bg-secondary pl-4'>
      <div className='flex my-3 gap-3'>
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
          <input type="file" hidden />
          <div className='pr-8 flex gap-3'>
            <i
              className='emoji_icon '
              onClick={() => setPicker((pre) => !pre)}
            ></i>
            <i className='camera_icon'></i>
            <i className='gif_icon'></i>
            <i className='sticker_icon'></i>
          </div>
        </div>
      </div>
    </div>
  )
}
