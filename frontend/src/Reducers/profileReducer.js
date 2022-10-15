import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.user = action.payload
    },
  },
})

export const profileActions = profileSlice.actions

export const profileReducer = profileSlice.reducer
