import React from 'react'
import { useSelector } from 'react-redux'

export default function Cover({ userProfile }) {
  //   const { user } = useSelector((state) => state.profile)
  //   console.log(user)
  console.log(userProfile)
  return (
    <div className='bg-[#fff] shadow-md w-full  mt-[56px]'>
      <div className='md:w-[80vw] mx-auto'>
        {/* cover  */}
        <div className='bg-bg-third w-full min-h-[330px] rounded-xl relative'>
          <div className='absolute bottom-3 right-8 '>
            <div className='flex font-medium bg-bg-primary px-4 py-2 gap-2 rounded-md items-center cursor-pointer'>
              <i className='camera_filled_icon'></i>
              Add Cover Photo
            </div>
          </div>
        </div>

        <div className='flex mt-5'>
          <div className='flex flex-1 gap-5 ml-10 '>
            <div className='relative -top-20 w-44 h-50'>
              <img
                src={userProfile?.picture}
                className=' w-44 h-44 rounded-full relative'
                alt=''
              />
              <i className='camera_filled_icon  bg-bg-forth absolute right-3 h-10 w-12  bottom-10'></i>
            </div>
            <div className='font-bold text-2xl md:translate-y-5'>
              {userProfile?.first_name + ' ' + userProfile.last_name}
            </div>
          </div>
          <div className='md:mx-8 grid grid-cols-2 gap-3'>
            <div className='bg-blue-color flex gap-3 px-4 py-3 h-12 text-[#fff] font-medium rounded-md'>
              <img
                src='../../../icons/plus.png'
                alt=''
                className='w-6 h-6 invert object-contain'
              />
              Add to Story
            </div>{' '}
            <div className='bg-blue-color  h-12  flex gap-3 px-4 py-3 text-[#fff] font-medium rounded-md'>
              <img
                src='../../../icons/plus.png'
                alt=''
                className='w-6 h-6 invert object-contain'
              />
              Add to Story
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
