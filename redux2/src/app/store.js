import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/cnt/counterSlice'
import themeReducer from '../feature/cnt/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme:themeReducer,
  },
})