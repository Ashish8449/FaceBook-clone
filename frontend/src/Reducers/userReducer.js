import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const initialState = Cookies.get('user')
  ? { user: JSON.parse(Cookies.get('user')) }
  : {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    },
    logOut: (state, action) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions
export const userActions = userSlice.actions

export const userReducer = userSlice.reducer
