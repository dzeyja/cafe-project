import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice/productsSlice'
import filterReducer from './slices/filterSlice/filterSlice'

const rootState = combineReducers({
  productsReducer,
  filterReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
