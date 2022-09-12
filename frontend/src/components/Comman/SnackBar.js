import React, { useEffect } from 'react'

export default function SnackBar({ onClose, isSucess, text }) {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 5000)
  })
  return (
    <div
      class={`${
        !isSucess ? 'bg-[#65ec5c]' : 'bg-[#d95252]'
      } text-[#fff] border border-red-400 text-red-700 px-4 py-3 rounded min-w-[350px] absolute top-[60px] right-0 z-[100] pr-16 `}
      role='alert'
    >
      <span class='block sm:inline'>{text}</span>
      <span class='absolute top-0 bottom-0 right-0 px-4 py-3 text-[#fff]'>
        <svg
          class='fill-bg-secondary h-6 w-6 text-[#fff]'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          color='white'
          onClick={onClose}
        >
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      </span>
    </div>
  )
}
