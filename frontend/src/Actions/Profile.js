import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { BACKEND_URL } from '../constants'
import { profileActions } from '../Reducers/profileReducer'

export const getProfile = (token, username) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/getProfile/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(data)
    dispatch(profileActions.getProfile(data))
    console.log(data)
  } catch (error) {
    Navigate('/')
    console.log(error)
  }
}

export const getPhotos = (token, username) => async (dispatch) => {
  try {
    const path = `${username}/*`
    const max = 30
    const sort = 'desc'

    const { data } = await axios.post(
      `${BACKEND_URL}/listImages`,
      { path, sort, max },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
 
    dispatch(profileActions.setPhotos(data))
    // console.log(data)
  } catch (error) {
    Navigate('/')
    console.log(error, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  }
}
