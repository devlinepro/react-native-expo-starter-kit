import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

export const baseQuery = fetchBaseQuery({
	baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
	responseHandler: "json",
} as FetchBaseQueryArgs);
