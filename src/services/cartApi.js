// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({

        getcart: builder.query({
            query: () => ({
                url: `carts/`,
                method: 'GET'
            })
        }),

        getcartId: builder.query({
            query: (id) => ({
                url: `carts/${id}`,
                method: 'GET'
            })
        }),


    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcartQuery, useGetcartIdQuery, } = cartApi