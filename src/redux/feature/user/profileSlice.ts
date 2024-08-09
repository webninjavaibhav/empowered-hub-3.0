import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    user: {
        FirstName: '',
        LastName: '',
        User_ZipCode: '',
        User_City: '',
        User_State: '',
        Email: '',
        login: '',
        User_Role: '',
        User_County: '',
        User_Country: '',
        mobilePhone: '',
        secondEmail: '',
    },
    isLoading: false,
    error: null,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<any>) => {
            state.user = { ...state.user, ...action.payload }
        },
        updateLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
})

export const { updateProfile, updateLoading } = profileSlice.actions

export default profileSlice.reducer