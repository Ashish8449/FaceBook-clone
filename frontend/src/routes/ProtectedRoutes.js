import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../Pages/Login'

export default function ProtectedRoutes() {
  const { user } = useSelector((state) => ({ ...state }))


  return Object.keys(user).length >= 1 ? <Outlet /> : <Login />
}
