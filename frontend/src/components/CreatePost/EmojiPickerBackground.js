import React, { useEffect, useRef, useState } from 'react'
import Picker from 'emoji-picker-react'
export default function EmojiPickerBackground({
  text,
  setText,
  user,
  secondary,
}) {
  console.log(secondary)
  const [picker, setPicker] = useState(false)
  const [cursorPostion, setCursorPostion] = useState(false)
  const textRef = useRef(null)
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
  return (
    <div className={`${secondary ? 'flex' : ''}`}>
      <textarea
        value={text}
        ref={textRef}
        id=''
        cols='30'
        rows='10'
        placeholder={`What is on your mind, ${user.first_name}?`}
        className='h-24 bg-bg-primary px-4 w-full  focus:outline-0 resize-none'
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div
        className={` ${
          secondary ? '' : 'flex'
        } px-4 justify-between  items-center relative`}
      >
        <img
          className={` ${
            secondary ? 'hidden' : ''
          }w-10 -h-10' src='../../../icons/colorful.png`}
          alt=''
        />
        <div className='relative'>
          {picker && (
            <div
              className={`absolute z-50 ${
                secondary ? 'top-8' : 'bottom-10'
              }  -right-64 `}
            >
              <Picker onEmojiClick={handelEmoji} />
            </div>
          )}
          <i
            className='emoji_icon_large'
            onClick={() => setPicker((curr) => !curr)}
          ></i>
        </div>
      </div>
    </div>
  )
}
