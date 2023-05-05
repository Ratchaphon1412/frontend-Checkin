import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/index'
export const store = configureStore({
  reducer: {
    authStore:authSlice,

  },
})