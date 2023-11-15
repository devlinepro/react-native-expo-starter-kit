import { StyleSheet } from "react-native";

const colors = {
	primary: "black",
	secondary: "grey",
	accent: "blue",
	background: "#f2f2f2",
};

const app = StyleSheet.create({
	screen: {
		flex: 1,
		minWidth: 320,
		backgroundColor: "white",
	},
	header: {
		backgroundColor: colors.background,
	},
	tabBar: {
		backgroundColor: colors.background,
	},
	container: {
		alignItems: "center",
		padding: 16,
		paddingVertical: 36,
		gap: 36,
	},
	button: {
		backgroundColor: colors.secondary,
		paddingVertical: 16,
		paddingHorizontal: 36,
		minWidth: 250,
		alignItems: "center",
	},
	buttonLabel: {
		fontSize: 18,
		color: "white",
	},
});
const typography = StyleSheet.create({
	header: {
		fontSize: 36,
		fontWeight: "bold",
		textAlign: "center",
	},
	body: {
		fontSize: 18,
	},
	link: {
		fontSize: 18,
		color: colors.accent,
	},
});

export const theme = {
	colors,
	app,
	typography,
};
