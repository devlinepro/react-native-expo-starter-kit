import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../core/api/base-query";
import { ImageInterface } from "../interfaces/image.interface";

export const catsApi = createApi({
	reducerPath: "catsApi",
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		// todo: fix typings
		getCats: builder.query<
			ImageInterface[],
			{
				makeError?: boolean;
			}
		>({
			query: (params) => ({
				url: `/v1/images/search${params?.makeError ? "not-found" : ""}?limit=10`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetCatsQuery } = catsApi;
