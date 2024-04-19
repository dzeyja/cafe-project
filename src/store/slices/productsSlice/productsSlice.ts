import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../models/reduxTypes'

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
    productsFetch: (state) => {
      state.isLoading = true
    },
    productsFetchSuccess: (state, action: PayloadAction<IProducts[]>) => {
      state.isLoading = false
      state.error = ''
      state.products = action.payload
    },
    productsFetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default productsSlice.reducer

export const { productsFetch, productsFetchSuccess, productsFetchError } =
  productsSlice.actions
