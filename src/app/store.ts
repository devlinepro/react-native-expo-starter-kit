import { appSlice } from "./slices/app.slice";
import { catsApi } from "./api/cats.api";
import { SyncStatusMiddleware } from "./middlewares/sync-status.middleware";

export const persistWhiteList = [catsApi.reducerPath];

export const reducers = {
	app: appSlice.reducer,
	[catsApi.reducerPath]: catsApi.reducer,
};

export const middlewares = [SyncStatusMiddleware, catsApi.middleware];
