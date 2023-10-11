import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSPA = createApi({
    reducerPath: 'apiSPA',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        listPosts: builder.query({
            query: (params) => ({
                url: `/posts`,
                params: {
                    _page: params.page,
                    _limit: params.limit,
                },
                method: 'GET',
            }),
        }),
        listComments: builder.query({
            query: (id) => ({
                url: `posts/${id}/comments`,
                method: 'GET',
            }),
        }),
        setUserInfo: builder.query({
            query: (userId) => ({
                url: `users/${userId}`,
                method: 'GET',
            }),
        }),
        listPostsAll: builder.query({
            query: () => ({
                url: `/posts`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useListPostsQuery,
    useListCommentsQuery,
    useSetUserInfoQuery,
    useListPostsAllQuery,
} = apiSPA;
