import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function DateOfBirthSelector({
  bMonth,
  bYear,
  bDay,
  handelRegisterChange,
  dateError,
 
}) {
  const desktopView = useMediaQuery({
    query: '(min-width: 767px)',
  })
  console.log(dateError)
  const yearTemp = new Date().getFullYear()
  const years = Array.from(new Array(108), (val, index) => yearTemp - index)
  const months = Array.from(new Array(12), (val, index) => 1 + index)
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate()
  }
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index)
  return (
    <div className=''>
      <div className='text-secondary text-sm'>
        Date of birth <i className='info_icon'></i>
      </div>
      <div className='relative'>
        <div className='flex md:gap-8 my-3 justify-between '>
          <select
            className='border border-bg-third mr-4 rounded-sm h-9 px-4'
            name='bDay'
            onChange={handelRegisterChange}
            value={bDay}
           
          >
            {days.map((day, i) => (
              <option value={day} key={i} className='w-16'>
                {day}
              </option>
            ))}
          </select>{' '}
          <select
            className='border border-bg-third mr-4 rounded-sm h-9 px-4'
            name='bMonth'
            value={bMonth}
            onChange={handelRegisterChange}
          >
            {months.map((month, i) => (
              <option value={month} key={i} className='w-16'>
                {month}
              </option>
            ))}
          </select>{' '}
          <select
            className='border border-bg-third mr-4 rounded-sm h-9 px-4'
            name='bYear'
            onChange={handelRegisterChange}
          >
            {years.map((year, i) => (
              <option value={year} key={i} className='w-16'>
                {year}
              </option>
            ))}
            {}
          </select>{' '}
        </div>
        {dateError && (
          <div
            className={`${
              desktopView ? 'absolute top-0 left-[100%] lg:w-96 md:w-72' : ''
            } `}
          >
            <div className={` input_error `}>
              {dateError}

              <div
                className={` ${
                  desktopView
                    ? 'error_arrow_right absolute top-0'
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
