import React, { useRef, useState } from 'react'
import { useClickOutSide } from '../../../Helper/clickOutSide'
import DisplayAccessibility from './DisplayAccessibility'
import HelpSupport from './HelpSupport'
import MainMenu from './MainMenu'
import SettingsPrivacy from './SettingsPrivacy'

export default function UserMenu({ user, setUserMenu }) {
  const [visibel, setVisibel] = useState(0)
  const menuRef = useRef(null)
  useClickOutSide(menuRef, () => {
    console.log('first')
    setUserMenu(false)
    setVisibel(0)
  })
  return (
    <div
      ref={menuRef}
      className='absolute w-[350px]  py-4 mt-4 rounded-md bg-bg-primary right-0 top-10 shadow-xl '
    >
      {visibel === 0 && <MainMenu user={user} setVisibel={setVisibel} />}
      {visibel === 1 && <SettingsPrivacy user={user} setVisibel={setVisibel} />}
      {visibel === 2 && <HelpSupport user={user} setVisibel={setVisibel} />}
      {visibel === 3 && (
        <DisplayAccessibility user={user} setVisibel={setVisibel} />
      )}
    </div>
  )
}
