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
  reducers: {
    incrementCount: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload)
      if (product && typeof product.count === 'number') {
        product.count += 1
      }
    },
    decrementCount: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload)
      if (product && typeof product.count === 'number') {
        if (product.count > 0) {
          product.count -= 1
        }
      }
    },
  },
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
export const { incrementCount, decrementCount } = productsSlice.actions
