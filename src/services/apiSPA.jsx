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
        listComments: builder.mutation({
            query: (id) => ({
                url: `posts/${id}/comments`,
                method: 'GET',
            }),
        }),
        /* setMessage: builder.mutation({
            query: ({ idInstance, apiTokenInstance }) => ({
                url: `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
                method: 'GET',
            }),
        }),
        delMessage: builder.mutation({
            query: ({ idInstance, apiTokenInstance, idDel }) => ({
                url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${idDel}`,
                method: 'DELETE',
            }),
        }),*/
    }),
});

export const { useListPostsQuery, useListCommentsMutation } = apiSPA;
