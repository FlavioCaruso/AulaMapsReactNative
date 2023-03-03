import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {GithubProfile, GithubRepos} from './types';

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com'}),
  endpoints: builder => ({
    getGithubProfile: builder.query<GithubProfile, string>({
      query: (name: string) => `/users/${name}`,
    }),
    getGithubProfileRepos: builder.query<GithubRepos[], string>({
      query: (name: string) => `users/${name}/repos`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazyGetGithubProfileQuery, useLazyGetGithubProfileReposQuery} =
  githubApi;
