import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    //a simple name for the api
    reducerPath: 'api',
    //base url for the api
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
    //endpoints for the api get,post,put,delete etc
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `Task`,
            // @ts-ignore: Unreachable code error
            providesTags: ['Tasks'],
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: 'Task',
                method: 'POST',
                body: newTask,
            }),
            // @ts-ignore
            invalidatesTags: ['Tasks'],
           
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `Task/${id}`,
                method: 'DELETE',
            }),
            // @ts-ignore
            invalidatesTags: ['Tasks'],
        }),
    }),
});

//making a hook for the api
// @ts-ignore: Unreachable code error
export const { useGetTasksQuery,useCreateTaskMutation,useDeleteTaskMutation } = api;