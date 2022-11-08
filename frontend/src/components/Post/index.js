import React, { useRef, useState } from 'react'
import Moment from 'react-moment'
import { Dots, Public } from '../../svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ReactPopUp from './ReactPopUp'
import Comments from './Comments'
import { useSelector } from 'react-redux'
import PostMenu from './PostMenu'
import './style.css'
import { Link } from 'react-router-dom'
export default function Post({ post, user, profile }) {
  const { images } = post
  // const [visibel, setVisibel] = useState(false)

  // const [showMenu, setShowMenu] = useState(false)
  // const [reacts, setReacts] = useState()
  // const [check, setCheck] = useState()
  // const [total, setTotal] = useState(0)
  // const [count, setCount] = useState(1)
  // const [checkSaved, setCheckSaved] = useState()
  // const [comments, setComments] = useState([])
  // const user = useSelector((state) => state.user.user)
  const postRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [reacts, setReacts] = useState()
  const [check, setCheck] = useState()
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(1)
  const [checkSaved, setCheckSaved] = useState()
  const [comments, setComments] = useState([])
  const reactHandler = async (type) => {
    // reactPost(post._id, type, user.token)
    // if (check == type) {
    //   setCheck()
    //   let index = reacts.findIndex((x) => x.react == check)
    //   if (index !== -1) {
    //     setReacts([...reacts, (reacts[index].count = --reacts[index].count)])
    //     setTotal((prev) => --prev)
    //   }
    // } else {
    //   setCheck(type)
    //   let index = reacts.findIndex((x) => x.react == type)
    //   let index1 = reacts.findIndex((x) => x.react == check)
    //   if (index !== -1) {
    //     setReacts([...reacts, (reacts[index].count = ++reacts[index].count)])
    //     setTotal((prev) => ++prev)
    //     console.log(reacts)
    //   }
    //   if (index1 !== -1) {
    //     setReacts([...reacts, (reacts[index1].count = --reacts[index1].count)])
    //     setTotal((prev) => --prev)
    //     console.log(reacts)
    //   }
    // }
  }
  return (
    // <div className='bg-bg-primary shadow-md relative rounded-lg pt-3  '>
    //   {/* header  */}
    //   <div className='mb-3'>
    //     <div className='flex px-4'>
    //       <div className='flex-1'>
    //         <div className='flex gap-3'>
    //           <img
    //             src={post.user.picture}
    //             className='w-10 h-10 rounded-full border-blue-color border-2'
    //             alt=''
    //           />
    //           <div className=''>
    //             <div className='font-medium text-md'>
    //               {post.user.first_name}
    //             </div>
    //             <div className='flex text-xs gap-1 align-middle items-center'>
    //               <Moment fromNow interval={30}>
    //                 {post.createdAt}
    //               </Moment>
    //               .<Public color='#828387' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         onClick={() => setShowMenu(!showMenu)}
    //         className='hover1 w-10 h-10 rounded-full flex justify-center items-center hover:cursor-pointer'
    //       >
    //         <Dots />
    //       </div>
    //     </div>
    //   </div>
    //   {/*  post  */}
    //   {post.background ? (
    //     <div
    //       className='h-[400px] bg-no-repeat bg-cover grid place-items-center text-lg '
    //       style={{ background: `url(${post.background})` }}
    //     >
    //       {post.text}
    //     </div>
    //   ) : (
    //     <div>
    //       {post && post.text && <div>{post.text}</div>}
    //       {post?.images?.length && (
    //         <div className=''>
    //           <Carousel showThumbs={false}>
    //             {post.images.map((item, i) => (
    //               <div className='h-[500px]'>
    //                 <img
    //                   src={item.url}
    //                   className='object-cover w-full h-full'
    //                   alt='post img'
    //                 />
    //               </div>
    //             ))}
    //           </Carousel>
    //         </div>
    //       )}
    //     </div>
    //   )}
    //   {/* post infos */}
    //   <div className=' rounded-lg  '>
    //     <div className='relative'>
    //       <div className=''>
    //         <div className='flex py-1'>
    //           <div className='flex-1'></div>
    //           <div className='grid gap-3 text-center text-secondary grid-cols-2'>
    //             <div className='hover:cursor-pointer hover:underline'>
    //               10 comments
    //             </div>
    //             <div className='hover:cursor-pointer hover:underline'>
    //               1 share
    //             </div>
    //           </div>
    //         </div>
    //         <div className='border-b border-bg-secondary'></div>
    //         <div className='grid grid-cols-3'>
    //           <div
    //             className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'
    //             onClick={() => setVisibel(true)}
    //           >
    //             <i className='like_icon '></i>
    //             <span className='text-secondary font-medium'>Like</span>
    //           </div>{' '}
    //           <div className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'>
    //             <i className='comment_icon '></i>
    //             <span className='text-secondary font-medium'>Comment</span>
    //           </div>{' '}
    //           <div className='w-full py-3 flex gap-2 cursor-pointer align-middle items-center justify-center hover1'>
    //             <i className='share_icon '></i>
    //             <span className='text-secondary font-medium'>Share</span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* reacts */}
    //       <ReactPopUp visibel={visibel} setVisibel={setVisibel} />
    //     </div>
    //     <div className=''>
    //       <Comments user={user} />
    //     </div>
    //   </div>
    //   {showMenu && (
    //     <PostMenu
    //       userId={user.id}
    //       postUserId={post.user._id}
    //       imagesLength={post?.images?.length}
    //       setShowMenu={setShowMenu}
    //       postId={post._id}
    //       token={user.token}
    //       checkSaved={checkSaved}
    //       setCheckSaved={setCheckSaved}
    //       images={post.images}
    //       postRef={postRef}
    //     />
    //   )}
    // </div>
    <div
      className='post'
 
      ref={postRef}
    >
      <div className='post_header'>
        <Link
          to={`/profile/${post.user.username}`}
          className='post_header_left'
        >
          <img src={post.user.picture} alt='' />
          <div className='header_col'>
            <div className='post_profile_name'>
              {post.user.first_name} {post.user.last_name}
              <div className='updated_p'>
                {post.type == 'profilePicture' &&
                  `updated ${
                    post.user.gender === 'male' ? 'his' : 'her'
                  } profile picture`}
                {post.type == 'coverPicture' &&
                  `updated ${
                    post.user.gender === 'male' ? 'his' : 'her'
                  } cover picture`}
              </div>
            </div>
            <div className='post_profile_privacy_date'>
              <Moment fromNow interval={30}>
                {post.createdAt}
              </Moment>
              . <Public color='#828387' />
            </div>
          </div>
        </Link>
        <div
          className='post_header_right hover1'
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <Dots color='#828387' />
        </div>
      </div>
      {post.background ? (
        <div
          className='post_bg'
          style={{ backgroundImage: `url(${post.background})` }}
        >
          <div className='post_bg_text'>{post.text}</div>
        </div>
      ) : post.type === null ? (
        <>
          <div className='post_text'>{post.text}</div>
          {post.images && post.images.length && (
            <div
              className={
                post.images.length === 1
                  ? 'grid_1'
                  : post.images.length === 2
                  ? 'grid_2'
                  : post.images.length === 3
                  ? 'grid_3'
                  : post.images.length === 4
                  ? 'grid_4'
                  : post.images.length >= 5 && 'grid_5'
              }
            >
              {post.images.slice(0, 5).map((image, i) => (
                <img src={image.url} key={i} alt='' className={`img-${i}`} />
              ))}
              {post.images.length > 5 && (
                <div className='more-pics-shadow'>
                  +{post.images.length - 5}
                </div>
              )}
            </div>
          )}
        </>
      ) : post.type === 'profilePicture' ? (
        <div className='post_profile_wrap'>
          <div className='post_updated_bg'>
            <img src={post.user.cover} alt='' />
          </div>
          <img
            src={post.images[0].url}
            alt=''
            className='post_updated_picture'
          />
        </div>
      ) : (
        <div className='post_cover_wrap'>
          <img src={post.images[0].url} alt='' />
        </div>
      )}

      <div className='post_infos'>
        <div className='reacts_count'>
          <div className='reacts_count_imgs'>
            {reacts &&
              reacts
                .sort((a, b) => {
                  return b.count - a.count
                })
                .slice(0, 3)
                .map(
                  (react, i) =>
                    react.count > 0 && (
                      <img
                        src={`../../../reacts/${react.react}.svg`}
                        alt=''
                        key={i}
                      />
                    )
                )}
          </div>
          <div className='reacts_count_num'>{total > 0 && total}</div>
        </div>
        <div className='to_right'>
          <div className='comments_count'>{comments.length} comments</div>
          <div className='share_count'>0 share</div>
        </div>
      </div>
      <div className='post_actions'>
        <ReactPopUp
          visible={visible}
          setVisible={setVisible}
          reactHandler={reactHandler}
        />
        <div
          className='post_action hover1'
          onMouseOver={() => {
            setTimeout(() => {
              setVisible(true)
            }, 500)
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setVisible(false)
            }, 500)
          }}
          onClick={() => reactHandler(check ? check : 'like')}
        >
          {check ? (
            <img
              src={`../../../reacts/${check}.svg`}
              alt=''
              className='small_react'
              style={{ width: '18px' }}
            />
          ) : (
            <i className='like_icon'></i>
          )}
          <span
            style={{
              color: `
          
          ${
            check === 'like'
              ? '#4267b2'
              : check === 'love'
              ? '#f63459'
              : check === 'haha'
              ? '#f7b125'
              : check === 'sad'
              ? '#f7b125'
              : check === 'wow'
              ? '#f7b125'
              : check === 'angry'
              ? '#e4605a'
              : ''
          }
          `,
            }}
          >
            {check ? check : 'Like'}
          </span>
        </div>
        <div className='post_action hover1'>
          <i className='comment_icon'></i>
          <span>Comment</span>
        </div>
        <div className='post_action hover1'>
          <i className='share_icon'></i>
          <span>Share</span>
        </div>
      </div>
      <div className='comments_wrap'>
        <div className='comments_order'></div>
        {/* <CreateComment
          user={user}
          postId={post._id}
          setComments={setComments}
          setCount={setCount}
        /> */}
        {/* {comments &&
          comments
            .sort((a, b) => {
              return new Date(b.commentAt) - new Date(a.commentAt)
            })
            .slice(0, count)
            .map((comment, i) => <Comment comment={comment} key={i} />)}
        {count < comments.length && (
          <div className='view_comments' onClick={() => showMore()}>
            View more comments
          </div>
        )} */}
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
