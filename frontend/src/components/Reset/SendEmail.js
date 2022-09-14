import React from 'react'
import { Link } from 'react-router-dom'

export default function SendEmail({ userInfos, user }) {
  return (
    <div className='bg-bg-primary sm:max-w-[350px] md:max-w-[640px] px-4  rounded-lg relative'>
      <div className='font-medium px-4 py-4'>Reset Your Password</div>
      <div className='border-b border-bg-secondary'></div>
      <div className=' flex flex-col md:flex-row gap-10 my-3 text-secondary'>
        <div className='max-w-[300px]'>
          <p className="my-2">How do you want to receive the code to reset your password?</p>

          <label htmlFor='email' className='hover1 flex gap-3'>
            <input type='radio' name='' id='email' checked readOnly />
            <div className='label_col'>
              <span>Send code via email </span>
              <span className='break-words'>{user.email}</span>
            </div>
          </label>
        </div>
        <div className='text-center flex flex-col justify-center align-middle items-center'>
          <img
            src={user.picture}
            className='text- w-16 h-16 rounded-full'
            alt=''
          />
          {/* <span className='font-medium text-sm my-2'>{user.email}</span> */}
        </div>
      </div>
      <div className='flex align-middle items-center gap-6 my-3'>
        <Link
          className='ml-auto bg-bg-secondary px-6 py-2 rounded-md text-secondary'
          to='/login'
        >
          Not You ?
        </Link>
        <button
          type='submit'
          className='bg-blue-color px-6 py-2 rounded-md text-bg-primary'
        >
          Continue
        </button>
      </div>
    </div>
  )
}
