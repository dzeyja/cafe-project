import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICategories } from '../../models/reduxTypes'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<ICategories[]>(
        'http://localhost:4000/product-delayed'
      )
      return res.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
