import { configureStore } from '@reduxjs/toolkit'
import { postReducer } from './Reducers/postReducer'
import { userReducer } from './Reducers/userReducer'


export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
})
