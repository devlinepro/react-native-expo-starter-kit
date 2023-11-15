import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppSliceInterface {
	sync: boolean;
	syncError: string;
	globalErrorHandlerEnabled: boolean;
}

const initialState: AppSliceInterface = {
	sync: false,
	syncError: "",
	globalErrorHandlerEnabled: true,
} as AppSliceInterface;

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setSync: (state: AppSliceInterface, action: PayloadAction<boolean>) => {
			state.sync = action.payload;
		},
		setSyncError: (state: AppSliceInterface, action: PayloadAction<string>) => {
			state.syncError = action.payload;
		},
		setGlobalErrorHandlerEnabled: (draft: AppSliceInterface, action: PayloadAction<boolean>) => {
			draft.globalErrorHandlerEnabled = action.payload;
		},
	},
});

// todo fix typings
// doesn't work properly in other project files
// export const { setSync, setSyncError, setGlobalErrorHandlerEnabled } = appSlice.actions;

// works properly
export const setSync = appSlice.actions.setSync;
export const setSyncError = appSlice.actions.setSyncError;
export const setGlobalErrorHandlerEnabled = appSlice.actions.setGlobalErrorHandlerEnabled;
