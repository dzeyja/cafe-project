import { IOrders, IProducts } from '../../models/reduxTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProducts[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setAddOrder: (state, action: PayloadAction<IProducts>) => {
      state.push(action.payload)
    },
    setDeleteOrder: (state, action: PayloadAction<number>) => {
      return state.filter((order) => order.id !== action.payload)
    },
  },
})

export default basketSlice.reducer

export const { setAddOrder, setDeleteOrder } = basketSlice.actions
