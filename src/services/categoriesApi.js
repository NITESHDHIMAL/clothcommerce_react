import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({

        getCategory: builder.query({
            query: () => ({
                url: `products/categories`,
                method: 'GET'
            })
        }), 

    }),
})
 
export const { useGetCategoryQuery  } = categoriesApi