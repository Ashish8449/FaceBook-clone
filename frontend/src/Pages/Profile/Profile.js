import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPhotos, getProfile } from '../../Actions/Profile'
import Header from '../../components/Header/Header'
import Cover from './Cover'
import PplYouMayKnow from './PplYouMayKnow'
import ProfileMenu from './ProfileMenu'
import { useMediaQuery } from 'react-responsive'
import ProfilePictureInfo from './ProfilePictureInfo'
import './style.css'
import { useRef } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import GridPosts from './GridPosts'
import Post from '../../components/Post'
import Photos from './Photos'
import Friends from './Friends'

export default function Profile({ setVisibelCreatePost }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { username } = useParams()
  const { user } = useSelector((state) => state.user)
  const profile = useSelector((state) => state?.profile?.profile)
  const { photos } = useSelector((state) => state.profile)
  const posts = useSelector((state) => state?.profile?.profile?.posts)

  let userName = username ? username : user.username
  let visitor = userName === user.username ? false : true

  useEffect(() => {
    dispatch(getProfile(user.token, userName))
    dispatch(getPhotos(user.token, userName))
  }, [])

  return (
    <>
      <div className='profile'>
        <Header page='profile' />
        <div className='profile_top'>
          <div className='profile_container'>
            <Cover userProfile={profile.user} visitor={visitor} />
            <ProfilePictureInfo
              profile={profile?.profile}
              visitor={visitor}
              photos={photos.resources}
            />
            <ProfileMenu />
          </div>
        </div>
        <div className='profile_bottom'>
          <div className='profile_container'>
            <div className='bottom_container'>
              <PplYouMayKnow />
              <div className={`profile_grid `}>
                <div className='profile_left'>
                  <Photos photos={photos} />
                  <Friends friends={profile.friends} />
                  <div className='relative_fb_copyright'>
                    <Link to='/'>Privacy </Link>
                    <span>. </span>
                    <Link to='/'>Terms </Link>
                    <span>. </span>
                    <Link to='/'>Advertising </Link>
                    <span>. </span>
                    <Link to='/'>
                      Ad Choices <i className='ad_choices_icon'></i>{' '}
                    </Link>
                    <span>. </span>
                    <Link to='/'></Link>Cookies <span>. </span>
                    <Link to='/'>More </Link>
                    <span>. </span> <br />
                    Meta © 2022
                  </div>
                </div>
                <div className='profile_right'>
                  {!visitor && (
                    <CreatePost
                      user={user}
                      setVisibelCreatePost={setVisibelCreatePost}
                      profile={true}
                    />
                  )}
                  <GridPosts />
                  <div className='posts'>
                    {posts.length > 0 ? (
                      posts.map((post) => <Post post={post} key={post._id} />)
                    ) : (
                      <div className='no_posts'>No posts available</div>
                    )}
                  </div>

                  <div className='posts'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
