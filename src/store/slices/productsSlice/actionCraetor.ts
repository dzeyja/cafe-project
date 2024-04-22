import axios from 'axios'
import { AppDispatch } from '../..'

import { IProducts } from '../../models/reduxTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'hello',
  async (url: string, thunkApi) => {
    try {
      const response = await axios.get<IProducts[]>(url)
      return response.data
    } catch (error) {
      thunkApi.rejectWithValue('Произошла ошибка')
    }
  }
)
