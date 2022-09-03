import React from 'react'

export default function SettingsPrivacy({setVisibel}) {
  return (
    <div className=''>
      <div className='mb-3 px-5 flex '>
        <div className='hover1 rounded-full w-8 h-8 flex justify-center items-center mr-3 ' onClick={()=>setVisibel(0)}>
          <i className='arrow_back_icon'></i>
        </div>
        <div className='font-medium text-xl'>Settings & privacy</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='settings_filled_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Settings</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='privacy_checkup_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Privacy Chekup</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='privacy_shortcuts_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Privacy Shortcuts</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='activity_log_icon'></i>
        </div>
        <div className='flex-1 font-medium '> Activity log</div>
      </div>
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='news_icon'></i>
        </div>
        <div className='flex-1 font-medium '> News Feed Prefrences</div>
      </div>{' '}
      <div className='hover1 px-5 my flex py-3 items-center'>
        <div className='small_circle'>
          <i className='language_icon'></i>
        </div>
        <div className='flex-1 font-medium '>Language</div>
      </div>
    </div>
  )
}
