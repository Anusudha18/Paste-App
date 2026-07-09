import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})