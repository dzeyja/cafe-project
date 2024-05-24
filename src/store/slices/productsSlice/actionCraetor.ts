import axios from 'axios'
import { IProducts } from '../../models/reduxTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCTS_API } from '../../../utils/constants'
import { setError } from '../errorSlice/errorSlice'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IProducts[]>(PRODUCTS_API)
      return response.data
    } catch (error: any) {
      thunkApi.dispatch(setError(error.message))
      throw error
    }
  }
)
