import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getStudentById: builder.mutation({
      query: (id) => `students/${id}`,
    }),
    getStudentsByGroup: builder.query({
      query: (groupId) => `groups/${groupId}`,
    }),
    findStudents: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetStudentByIdMutation, useGetStudentsByGroupQuery, useFindStudentsMutation } = studentsApi;
