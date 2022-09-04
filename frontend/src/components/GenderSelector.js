import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function GenderSelector({
  handelRegisterChange,
  genderError,
  ...props
}) {
  const desktopView = useMediaQuery({
    query: '(min-width: 767px)',
  })
  console.log(genderError)
  return (
    <div className=''>
      <div className='text-secondary text-sm'>
        Gender <i className='info_icon'></i>
      </div>
      <div className='relative'>
        <div className='grid grid-cols-3 my-3 md:gap-8'>
          <label
            htmlFor='male'
            className='border border-secondary flex justify-center align-middle py-2 rounded-md mr-2'
          >
            Male{' '}
            <input
              type='radio'
              name='gender'
              id='male'
              value='male'
              onChange={handelRegisterChange}
              className='ml-2'
            />
          </label>{' '}
          <label
            htmlFor='male'
            className='border border-secondary flex justify-center align-middle py-2 rounded-md mr-2'
          >
            Female{' '}
            <input
              type='radio'
              name='gender'
              id='female'
              value='Female'
              onChange={handelRegisterChange}
              className='ml-2'
            />
          </label>{' '}
          <label
            htmlFor='male'
            className='border border-secondary flex justify-center align-middle py-2 rounded-md mr-2'
          >
            Other{' '}
            <input
              type='radio'
              name='gender'
              id='other'
              value='Other'
              onChange={handelRegisterChange}
              className='ml-2'
            />
          </label>
        </div>
        {genderError && (
          <div
            className={`${
              desktopView ? 'absolute top-0 right-[105%] lg:w-72 md:w-52 ' : ''
            } `}
          >
            <div className={` input_error `}>
              {genderError}

              <div
                className={` ${
                  desktopView
                    ? 'error_arrow_left absolute top-0'
                    : 'error_arrow_bottom'
                } `}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
