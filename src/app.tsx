import "@expo/metro-runtime";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./core/store";
import { Navigation } from "./navigation";
import { ErrorHandler } from "./components/error-handler";
import { useNotifications } from "./core/hooks/use-notifications";
import { DataPreloader } from "./components/data-preloader";

function App() {
	const { expoPushToken } = useNotifications();
	// do something with expoPushToken, for example send to a backend and save to a database;

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<DataPreloader onReady={() => SplashScreen.hideAsync()}>
						<Navigation />
					</DataPreloader>
					<ErrorHandler />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
}

registerRootComponent(App);
