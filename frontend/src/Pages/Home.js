import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header/Header'

export default function Home() {
  const user = useSelector((state) => state)
  console.log(user)
  return (
    <div>
      <Header />
    </div>
  )
}
