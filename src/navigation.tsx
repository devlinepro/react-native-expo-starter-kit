import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./app/theme";
import { HomeScreen } from "./screens/home/home.screen";
import { SettingsScreen } from "./screens/settings/settings.screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerTitleAlign: "center",
				tabBarInactiveTintColor: theme.colors.secondary,
				tabBarActiveTintColor: theme.colors.accent,
				tabBarStyle: theme.app.tabBar,
				headerStyle: theme.app.header,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: (props) => <Icon name="home" {...props} />,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: (props) => <Icon name="cog" {...props} />,
				}}
			/>
		</Tab.Navigator>
	);
}

export function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={Tabs}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
