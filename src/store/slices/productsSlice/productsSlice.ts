import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action: any) => {
      state.error = action.payload
    })
  },
})

export default productsSlice.reducer
