import { ScrollView, Text, View } from "react-native";
import { theme } from "../../app/theme";

export const SettingsScreen = () => {
	return (
		<ScrollView style={theme.app.screen}>
			<View style={theme.app.container}>
				<Text style={theme.typography.header}>Settings</Text>
				<Text style={theme.typography.body}>Just an example of navigation and API.</Text>
			</View>
		</ScrollView>
	);
};
