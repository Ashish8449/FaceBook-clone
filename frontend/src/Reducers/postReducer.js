import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  loading: false,
  error: '',
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload
    },
    logOut: (state, action) => {
      state.user = null
    },
  },
})

export const postActions = postSlice.actions

export const postReducer = postSlice.reducer
