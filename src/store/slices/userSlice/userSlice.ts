import { createSlice } from '@reduxjs/toolkit'

interface IState {
  email: string
  token: string
  id: string
}

const initialState: IState = {
  email: '',
  token: '',
  id: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAddUser: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser: (state) => {
      state.email = ''
      state.token = ''
      state.id = ''
    },
  },
})

export default userSlice.reducer
export const { setAddUser, removeUser } = userSlice.actions
