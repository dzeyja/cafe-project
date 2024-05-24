import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICategories } from '../../models/reduxTypes'
import { CATEGORIES_API } from '../../../utils/constants'
import { setError } from '../errorSlice/errorSlice'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<ICategories[]>(CATEGORIES_API)
      return res.data
    } catch (error: any) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)
