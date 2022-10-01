import React, { useState } from 'react'
import { left } from '../../data/home'
import { ArrowDown1 } from '../../svg'
import LeftLInk from './LeftLInk'

export default function HomeLeftMenu({ user }) {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <div className=' w-20   xl:bg-bg-secondary bg-bg-primary  border-r-2 border-bg-primary lg:border-r-0   xl:w-80  sm:block hidden  rounded-md overflow-y-scroll h-[95%] py-2 pb-10 scrollbar text-primary '>
      <div className='flex items-center  lg:px-4 '>
        <img
          className='lg:w-10 w-12 ml-2 h-12 lg:h-10  mr-3 bg-bg-third rounded-full'
          src={user.picture}
          alt=''
        />
        <div className='font-medium text-lg  lg:block hidden'>
          {user.first_name} {user.last_name}
        </div>
      </div>
      {left.slice(0, 8).map((item, i) => (
        <LeftLInk
          key={i}
          img={item.img}
          text={item.text}
          notification={item.notification}
        />
      ))}
      {!seeMore && (
        <div className='flex px-5' onClick={() => setSeeMore(true)}>
          <div className='small_circle'>
            <ArrowDown1 />
          </div>
          <div className='font-medium text-lg lg:block hidden'>See more</div>
        </div>
      )}
      {seeMore &&
        left
          .slice(8, left.length)
          .map((item, i) => (
            <LeftLInk
              key={i}
              img={item.img}
              text={item.text}
              notification={item.notification}
            />
          ))}
      {seeMore && (
        <div className='flex px-4 ' onClick={() => setSeeMore(false)}>
          <div className='small_circle rotate-180'>
            <ArrowDown1 />
          </div>
          <div className='text-lg font-medium lg:block hidden'>See less</div>
        </div>
      )}
    </div>
  )
}
