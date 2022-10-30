import React, { useRef, useState } from 'react'
import Moment from 'react-moment'
import { Dots, Public } from '../../svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ReactPopUp from './ReactPopUp'
import Comments from './Comments'
import { useSelector } from 'react-redux'
import PostMenu from './PostMenu'
export default function Post({ post }) {
  const { images } = post
  const [visibel, setVisibel] = useState(false)

  const [showMenu, setShowMenu] = useState(false)
  const [reacts, setReacts] = useState()
  const [check, setCheck] = useState()
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(1)
  const [checkSaved, setCheckSaved] = useState()
  const [comments, setComments] = useState([])
  const user = useSelector((state) => state.user.user)
  const postRef = useRef(null)

  return (
    <div className='bg-bg-primary shadow-md relative rounded-lg pt-3  '>
      {/* header  */}
      <div className='mb-3'>
        <div className='flex px-4'>
          <div className='flex-1'>
            <div className='flex gap-3'>
              <img
                src={post.user.picture}
                className='w-10 h-10 rounded-full border-blue-color border-2'
                alt=''
              />
              <div className=''>
                <div className='font-medium text-md'>
                  {post.user.first_name}
                </div>
                <div className='flex text-xs gap-1 align-middle items-center'>
                  <Moment fromNow interval={30}>
                    {post.createdAt}
                  </Moment>
                  .<Public color='#828387' />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className='hover1 w-10 h-10 rounded-full flex justify-center items-center hover:cursor-pointer'
          >
            <Dots />
          </div>
        </div>
      </div>
      {/*  post  */}
      {post.background ? (
        <div
          className='h-[400px] bg-no-repeat bg-cover grid place-items-center text-lg '
          style={{ background: `url(${post.background})` }}
        >
          {post.text}
        </div>
      ) : (
        <div>
          {post && post.text && <div>{post.text}</div>}
          {post?.images?.length && (
            <div className=''>
              <Carousel showThumbs={false}>
                {post.images.map((item, i) => (
                  <div className='h-[500px]'>
                    <img
                      src={item.url}
                      className='object-cover w-full h-full'
                      alt='post img'
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      )}
      {/* post infos */}
      <div className=' rounded-lg  '>
        <div className='relative'>
          <div className=''>
            <div className='flex py-1'>
              <div className='flex-1'></div>
              <div className='grid gap-3 text-center text-secondary grid-cols-2'>
                <div className='hover:cursor-pointer hover:underline'>
                  10 comments
                </div>
                <div className='hover:cursor-pointer hover:underline'>
                  1 share
                </div>
              </div>
            </div>
            <div className='border-b border-bg-secondary'></div>
            <div className='grid grid-cols-3'>
              <div
                className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'
                onClick={() => setVisibel(true)}
              >
                <i className='like_icon '></i>
                <span className='text-secondary font-medium'>Like</span>
              </div>{' '}
              <div className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'>
                <i className='comment_icon '></i>
                <span className='text-secondary font-medium'>Comment</span>
              </div>{' '}
              <div className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'>
                <i className='share_icon '></i>
                <span className='text-secondary font-medium'>Share</span>
              </div>
            </div>
          </div>

          {/* reacts */}
          <ReactPopUp visibel={visibel} setVisibel={setVisibel} />
        </div>
        <div className=''>
          <Comments user={user} />
        </div>
      </div>
      {showMenu && (
        <PostMenu
          userId={user.id}
          postUserId={post.user._id}
          imagesLength={post?.images?.length}
          setShowMenu={setShowMenu}
          postId={post._id}
          token={user.token}
          checkSaved={checkSaved}
          setCheckSaved={setCheckSaved}
          images={post.images}
          postRef={postRef}
        />
      )}
    </div>
  )
}
