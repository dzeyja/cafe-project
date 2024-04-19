import axios from 'axios'
import { AppDispatch } from '../..'
import {
  productsFetch,
  productsFetchError,
  productsFetchSuccess,
} from './productsSlice'
import { IProducts } from '../../models/reduxTypes'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsFetch())
    const response = await axios.get<IProducts[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
    dispatch(productsFetchSuccess(response.data))
  } catch (error: any) {
    dispatch(productsFetchError(error.message))
  }
}
