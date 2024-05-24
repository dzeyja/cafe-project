import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice/productsSlice'
import filterReducer from './slices/filterSlice/filterSlice'
import basketReducer from './slices/basketSlice/basketSlice'
import categoriesReducer from './slices/categoriesSlice/categoriesSlice'
import errorReducer from './slices/errorSlice/errorSlice'

const rootState = combineReducers({
  productsReducer,
  filterReducer,
  basketReducer,
  categoriesReducer,
  errorReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
