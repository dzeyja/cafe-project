import { createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../models/reduxTypes'
import { fetchProducts } from './actionCraetor'

interface ProductsState {
  products: IProducts[]
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default productsSlice.reducer
