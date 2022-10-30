import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    posts: [],
    profile: {},
  },
  photos: [],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.profile = action.payload
    },
    setPhotos: (state, action) => {
      state.photos = action.payload
    },
  },
})

export const profileActions = profileSlice.actions

export const profileReducer = profileSlice.reducer
