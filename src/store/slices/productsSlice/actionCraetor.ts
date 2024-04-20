import axios from 'axios'
import { AppDispatch } from '../..'
import {
  productsFetch,
  productsFetchError,
  productsFetchSuccess,
} from './productsSlice'
import { IProducts } from '../../models/reduxTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'hello',
  async (url: string, thunkApi) => {
    try {
      thunkApi.dispatch(productsFetch())
      const response = await axios.get<IProducts[]>(url)
      thunkApi.dispatch(productsFetchSuccess(response.data))
    } catch (error: any) {
      thunkApi.dispatch(productsFetchError(error.message))
    }
  }
)
