import { IOrders } from '../../models/reduxTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IOrders[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setAddOrder: (state, action: PayloadAction<IOrders>) => {
      state.push(action.payload)
    },
    setDeleteOrder: (state, action: PayloadAction<number>) => {
      return state.filter((order) => order.id !== action.payload)
    },
  },
})

export default basketSlice.reducer

export const { setAddOrder, setDeleteOrder } = basketSlice.actions
