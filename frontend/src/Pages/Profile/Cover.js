import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useClickOutSide } from '../../Helper/clickOutSide'

export default function Cover({ userProfile, visitor }) {
  //   const { user } = useSelector((state) => state.profile)
  //   console.log(user)
  const menuRef = useRef(null)
  useClickOutSide(menuRef, () => setShowUpload(false))
  const [showUpload, setShowUpload] = useState(false)

  return (
    <div className='bg-[#fff]  w-full  mt-[56px]'>
      {/* cover  */}
      <div className='bg-bg-third w-full min-h-[330px] rounded-xl relative'>
        <div className='absolute bottom-3 right-8 '>
          {!visitor && (
            <div className='relative font-medium bg-bg-primary px-4 py-2 gap-2 rounded-md items-center cursor-pointer'>
              <div
                className='flex gap-3 items-center '
                onClick={() => setShowUpload((pre) => !pre)}
              >
                <i className='camera_filled_icon'></i>
                Add Cover Photo
              </div>
              {showUpload && (
                <div
                  className='absolute z-50 w-full right-0 py-3 pl-4 bg-bg-primary'
                  ref={menuRef}
                >
                  <div className='flex gap-2 bg-bg-primary py-3'>
                    <i className='photo_icon'></i> Select Photo
                  </div>
                  <div className='flex gap-2 bg-bg-primary '>
                    <i className='upload_icon'></i> Upload Photo
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
