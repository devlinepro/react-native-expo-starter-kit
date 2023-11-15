import FlashMessage, { hideMessage, showMessage } from "react-native-flash-message";
import { useEffect } from "react";
import { setSyncError } from "../app/slices/app.slice";
import { useAppSelector } from "../core/hooks/use-app-selector";
import { useAppDispatch } from "../core/hooks/use-app-dispatch";

export function ErrorHandler() {
	const syncError = useAppSelector((state) => state.app.syncError);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (syncError) {
			showMessage({
				message: "Error",
				description: syncError,
				type: "danger",
				autoHide: false,
				onPress() {
					dispatch(setSyncError(""));
				},
			});
		} else {
			hideMessage();
		}
	}, [syncError]);

	return <FlashMessage position="top" />;
}
