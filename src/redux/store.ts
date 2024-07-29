import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter/counterSlice'
import { oktaApi } from '../services/oktaApi'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [oktaApi.reducerPath]: oktaApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(oktaApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

