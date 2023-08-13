// src/features/api/homeApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }), // Adjust the baseUrl as needed
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: ({page,limit,cat,userID}) => `home?page=${page}&limit=${limit}&cat=${cat}&userID=${userID}`, 
    }),
    addTask: builder.mutation({
        query: (task) => ({
          url: `add-task`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: task,
        }),
      }),
      removeTask: builder.mutation({
        query: (taskId) => ({
          url: `remove-task`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: { taskId },
        }),
      }),
      setDone: builder.mutation({
        query: (taskId) => ({
          url: `check-done-task`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: taskId,
        }),
      }),
      editTask: builder.mutation({
        query: (taskId) => ({
          url: `edit-task`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: taskId,
        }),
      }),
      signUp: builder.mutation({
        query: (user) => ({
          url: `sign-up`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: user,
        }),
      }),
      signIn: builder.mutation({
        query: (taskId) => ({
          url: `sign-in`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: taskId,
        }),
      }),
      checkAuth: builder.query({
        query: (token) => `auth?token=${token}`, 
      }),
  }),
});

export const {
  useGetHomeDataQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
  useSetDoneMutation,
  useEditTaskMutation,
  useSignUpMutation,
  useSignInMutation,
  useCheckAuthQuery
} = homeApi;
