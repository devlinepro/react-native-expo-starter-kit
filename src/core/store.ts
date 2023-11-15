import { Platform } from "react-native";
import { configureStore, combineReducers, MiddlewareAPI } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import { persistWhiteList, reducers } from "../app/store";
import { middlewares } from "../app/store";

/**
 * Use src/app/store.ts to add custom reducers and middlewares
 */

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
	whitelist: [...persistWhiteList],
};

const combinedReducer = combineReducers({
	...reducers,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const logger = createLogger({
	collapsed: true,
});

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}).concat(
			Platform.OS === "web" ? logger : (api: MiddlewareAPI) => (next) => (action) => next(action),
			...middlewares
		);
	},
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
