import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const initialState = Cookies.get('user')
  ? JSON.parse(Cookies.get('user'))
  : null

console.log(initialState)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export const userReducer = userSlice.reducer
