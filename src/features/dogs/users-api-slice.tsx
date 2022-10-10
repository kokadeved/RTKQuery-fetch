import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Users {
  id: string;
  name: string;
  phone: number;
  image: {
    url: string;
  };
}

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query<Users[], number | void>({
        query: (limit = 5) => ({
          url: `/users?_limit=${limit}`,
          // url: `/users`,
          // params: {
          //   _limit: limit,
          // },
        }),
      }),
    };
  },
});
export const { useFetchUsersQuery } = ApiSlice;
