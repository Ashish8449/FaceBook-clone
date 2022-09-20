import axios from 'axios'
import { BACKEND_URL } from '../constants'

export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `${BACKEND_URL}/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return { status: 'ok', data }
  } catch (error) {
    return error.response.data.message
  }
}
