// src/features/api/homeApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }), // Adjust the baseUrl as needed
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: ({page,limit,cat}) => `home?page=${page}&limit=${limit}&cat=${cat}`, // This should match the route on your server
    }),
    
    
    
    
    
   
  }),
});

export const {
  useGetHomeDataQuery,
} = homeApi;
