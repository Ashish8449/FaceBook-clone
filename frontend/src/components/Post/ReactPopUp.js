import React ,{useRef} from 'react'
import { useClickOutSide } from '../../Helper/clickOutSide'
const reactsArray = [
  {
    name: 'like',
    image: '../../../reacts/like.gif',
  },
  {
    name: 'love',
    image: '../../../reacts/love.gif',
  },
  {
    name: 'haha',
    image: '../../../reacts/haha.gif',
  },
  {
    name: 'wow',
    image: '../../../reacts/wow.gif',
  },
  {
    name: 'sad',
    image: '../../../reacts/sad.gif',
  },
  {
    name: 'angry',
    image: '../../../reacts/angry.gif',
  },
]
export default function ReactPopUp({ visibel, setVisibel }) {
    const reactRef = useRef(null);
    useClickOutSide(reactRef, ()=>{
        setVisibel(false)
    })
  return (
    <>
      {
        visibel&&
        <div className='shadow-lg px-10 absolute -top-4 z-10  bg-bg-primary rounded-3xl py-2' ref={reactRef}>
          <div className='flex gap-2 items-center'>
            {reactsArray.map((react, i) => (
              <div
                className='hover:cursor-pointer hover:scale-150 hover:mx-4 w-10 h-10 '
                key={i}
              >
                <img src={react.image} className='w-full h-full' alt='' />
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}
