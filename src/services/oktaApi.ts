import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const oktaApi = createApi({
    reducerPath: 'oktaApi',

    // base url configuration
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_OKTA_BASE_URL,

        // prepare the headers
        prepareHeaders: (headers, { }) => {
            const token = import.meta.env.VITE_OKTA_AUTH_TOKEN
            if (token) {
                headers.set('Accept', 'application/json');
                headers.set('Content-Type', 'application/json');
                headers.set('Authorization', `SSWS ${token}`);
            }
            return headers
        },
    }),

    // tags 
    tagTypes: ['userInfo'],

    endpoints: (builder) => ({
        getUserInfo: builder.query({
            query: (id) => `/api/v1/users/${id}`,
            providesTags: ['userInfo']
        }),

        registerUser: builder.mutation({
            query: (user) => ({
                url: '/api/v1/users',
                method: 'POST',
                body: JSON.stringify(user),
            }),
            invalidatesTags: ['userInfo'],
        }),

        updateUserProfile: builder.mutation({
            query: (user) => ({
                url: `/api/v1/users/${user.userId}`,
                method: 'POST',
                body: JSON.stringify(user.data),
            }),
            invalidatesTags: ['userInfo'],
        })

    }),
})

export const { useGetUserInfoQuery, useRegisterUserMutation, useUpdateUserProfileMutation }: any = oktaApi 
