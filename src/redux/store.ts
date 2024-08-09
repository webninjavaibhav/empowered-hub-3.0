import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './feature/user/profileSlice'
import { oktaApi } from '../services/oktaApi'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        [oktaApi.reducerPath]: oktaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(oktaApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

