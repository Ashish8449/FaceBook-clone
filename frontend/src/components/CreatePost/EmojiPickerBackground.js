import React, { useEffect, useRef, useState } from 'react'
import Picker from 'emoji-picker-react'

const postBackgrounds = [
  '../../../images/postbackgrounds/1.jpg',
  '../../../images/postbackgrounds/2.jpg',
  '../../../images/postbackgrounds/3.jpg',
  '../../../images/postbackgrounds/4.jpg',
  '../../../images/postbackgrounds/5.jpg',
  '../../../images/postbackgrounds/6.jpg',
  '../../../images/postbackgrounds/7.jpg',
  '../../../images/postbackgrounds/8.jpg',
  '../../../images/postbackgrounds/9.jpg',
]
export default function EmojiPickerBackground({
  text,
  setText,
  user,
  secondary,
  background,
  setBackground,
}) {
  const [picker, setPicker] = useState(false)
  const [showbg, setShowbg] = useState(false)

  const [cursorPostion, setCursorPostion] = useState(false)
  const textRef = useRef(null)
  const bgRef = useRef(null)
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
  const handelBg = (i) => {
    bgRef.current.style.backgroundImage = `url(${postBackgrounds[i]})`
    setBackground(postBackgrounds[i])
    bgRef.current.classList.add('bgHandler')
  }
  const removeBg = () => {
    bgRef.current.classList.remove('bgHandler')
    bgRef.current.style.backgroundImage = null
    setBackground(false)
  }

  return (
    <div className={`${secondary ? 'flex' : ''}`}>
      <div className='' ref={bgRef}>
        <textarea
          value={text}
          ref={textRef}
          id=''
          cols='25'
          rows='10'
          placeholder={`What is on your mind, ${user.first_name}?`}
          className=' bg-bg-primary px-4 w-full  focus:outline-0 resize-none pb-5 '
          onChange={(e) => setText(e.target.value)}
          style={{
            paddingTop: `${
              background
                ? Math.abs(textRef.current.value.length * 0.1 - 25)
                : '0'
            }%`,
          }}
        ></textarea>
      </div>
      <div
        className={` ${
          secondary ? '' : 'flex'
        } px-4 justify-between  items-center relative`}
      >
        <div
          className={` ${secondary ? 'hidden' : 'flex-1'} flex align-middle`}
        >
          <img
            className={` ${secondary ? '' : ''}w-10 -h-10'`}
            src='../../../icons/colorful.png'
            alt=''
            onClick={() => setShowbg((pre) => !pre)}
          />

          {showbg && (
            <div className='flex gap-1 align-middle items-center mx-2'>
              <div>
                <div
                  className='w-7 h-7 object-cover rounded-sm bg-bg-secondary cursor-pointer'
                  onClick={removeBg}
                ></div>
              </div>
              {showbg &&
                postBackgrounds.map((item, index) => (
                  <div>
                    <img
                      src={item}
                      alt=''
                      className='w-7 h-7 object-cover rounded-sm hover:cursor-pointer'
                      onClick={() => handelBg(index)}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>

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
