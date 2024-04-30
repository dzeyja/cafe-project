import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './actionCreator'
import { ICategories } from '../../models/reduxTypes'

interface IState {
  categories: ICategories[]
  isLoading: boolean
}

const initialState: IState = {
  categories: [],
  isLoading: false,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCategories.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.categories = action.payload
    })
  },
})

export default categoriesSlice.reducer
