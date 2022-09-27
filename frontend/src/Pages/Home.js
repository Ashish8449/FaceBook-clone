import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../Actions/Post'
import CreatePost from '../components/CreatePost/CreatePost'

import Header from '../components/Header/Header'
import HomeLeftMenu from '../components/Home/HomeLeftMenu'
import Right from '../components/Home/Right'
import SendVerification from '../components/Home/SendVerification'
import Post from '../components/Post'
import Stories from '../components/Stories/Stories'

export default function Home({ setVisibelCreatePost }) {
  const { user } = useSelector((state) => state.user)
  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  console.log(posts)
  useEffect(() => {
    dispatch(getAllPosts(user.token))
  }, [])

  return (
    <div className='mt-[56px]'>
      <Header />
      <div className='flex bg-bg-forth min-h-screen'>
        <HomeLeftMenu user={user} />

        <div className=' flex-1 flex lg:justify-center md:px-4 px-3 '>
          <div className='md:max-w-[650px] w-full '>
            <Stories />
            {!user.verified && <SendVerification user={user} />}
            <CreatePost
              user={user}
              setVisibelCreatePost={setVisibelCreatePost}
            />
            <div className='grid gap-2 pt-3'>
              {posts &&
                posts.map((post) => <Post post={post} key={post._id} />)}
            </div>
          </div>
        </div>
        <Right user={user} />
      </div>
    </div>
  )
}
