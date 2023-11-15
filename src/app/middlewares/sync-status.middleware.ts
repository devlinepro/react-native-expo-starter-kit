import { Middleware } from "@reduxjs/toolkit";
import { AnyAction, Dispatch } from "redux";
import { setSync, setSyncError } from "../slices/app.slice";

/**
 * Middleware checks every RTK query and set app.sync and app.syncError state variables.
 */
export const SyncStatusMiddleware: Middleware =
	({ dispatch, getState }: { dispatch: Dispatch; getState: any }) =>
	(next: Dispatch<AnyAction>) =>
	(action: any) => {
		const state = getState();

		if (action.type.endsWith("/pending")) {
			if (state.app.sync !== true) {
				dispatch(setSync(true));
			}
		}
		if (action.type.endsWith("/fulfilled")) {
			if (state.app.sync !== false) {
				dispatch(setSync(false));
			}
		}

		if (action.type.endsWith("/rejected")) {
			if (state.app.syncError === "" && action.error.name !== "ConditionError" && state.app.globalErrorHandlerEnabled) {
				let message = "Error during synchronization. Try again.";
				if (action.type.indexOf("/executeMutation/") !== -1) {
					if ([400, 422, 403].includes(action.payload?.status) && action.payload?.data?.error) {
						message = action.payload?.data?.error || "Unknown error";
					}
				}
				dispatch(setSyncError(message));
			}
			if (state.app.sync !== false) {
				dispatch(setSync(false));
			}
		}

		return next(action);
	};
