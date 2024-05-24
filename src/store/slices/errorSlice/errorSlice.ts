import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      return action.payload
    },
    resetError: () => {
      return initialState
    },
  },
})

export default errorSlice.reducer

export const { setError, resetError } = errorSlice.actions
