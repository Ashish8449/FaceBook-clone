import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from '../components/CreatePost/CreatePost'
import Header from '../components/Header/Header'
import HomeLeftMenu from '../components/Home/HomeLeftMenu'
import Right from '../components/Home/Right'
import Stories from '../components/Stories/Stories'

export default function Home() {
  const { user } = useSelector((state) => state.user)
  console.log(user)
  return (
    user && (
      <div className='mt-[56px]'>
        <Header />
        <div className='flex bg-bg-forth min-h-screen'>
          <HomeLeftMenu user={user} />

          <div className=' flex-1 flex lg:justify-center md:px-4 px-3 '>
            <div className='md:max-w-[650px] w-full '>
              <Stories />
              <CreatePost user={user} />
            </div>
          </div>
          <Right user={user} />
        </div>
      </div>
    )
  )
}
