import axios from 'axios'
import { BACKEND_URL } from '../constants'
import { postActions } from '../Reducers/postReducer'

export const getAllPosts = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/getAllPost`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch(postActions.getPost(data))
    console.log(data)
  } catch (error) {}
}
