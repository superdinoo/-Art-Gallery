import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../baseUrl";

export const apiSlice = createApi({
  reducerPath: "apiSwagger",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => "/authors",
    }),
    getLocations: builder.query({
      query: () => "/locations",
    }),
    getPaintings: builder.query({
      query: ({ page, limit, q }: { page: number; limit: number; q: string }) =>
        `/paintings?_page=${page}&_limit=${limit}&q=${q}`,
    }),
    getTotalPaintings: builder.query({
      query: () => `/paintings`,
    }),
  }),
});

export const {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetPaintingsQuery,
  useGetTotalPaintingsQuery,
} = apiSlice;
