import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})