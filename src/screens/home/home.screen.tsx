import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { theme } from "../../app/theme";
import { useGetCatsQuery } from "../../app/api/cats.api";
import { Image } from "expo-image";
import { getNoun } from "../../app/common/helpers";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
	const [makeError, setMakeError] = useState(false);
	const { data, isFetching, refetch } = useGetCatsQuery({ makeError });

	useEffect(() => {
		refetch();
	}, [makeError]);

	const openDocs = () => {
		Linking.openURL("https://github.com/devlinepro/react-native-starter-kit");
	};

	return (
		<ScrollView style={theme.app.screen}>
			<View style={theme.app.container}>
				<Text style={theme.typography.header}>Welcome to the React Native Starter Kit!</Text>
				<View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
					<Text style={theme.typography.body}>Read </Text>
					<Pressable onPress={openDocs}>
						<Text style={theme.typography.link}>the docs</Text>
					</Pressable>
				</View>
				<Text style={theme.typography.body}>
					Star the project on{" "}
					<Pressable onPress={openDocs}>
						<Text style={theme.typography.link}>GitHub</Text>
					</Pressable>
				</Text>
				<Text style={theme.typography.body}>Just an example of RTK query:</Text>
				<Pressable
					style={theme.app.button}
					disabled={isFetching}
					onPress={() => {
						!makeError && refetch();
						setMakeError(false);
					}}
				>
					<Text style={theme.app.buttonLabel}>{isFetching ? "Fetching..." : "Reload"}</Text>
				</Pressable>
				<Pressable
					style={theme.app.button}
					disabled={isFetching}
					onPress={() => {
						makeError && refetch();
						setMakeError(true);
					}}
				>
					<Text style={theme.app.buttonLabel}>{isFetching ? "Fetching..." : "Try error handler"}</Text>
				</Pressable>
				{data && (
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							gap: 16,
							justifyContent: "center",
						}}
					>
						<Text style={theme.typography.body}>
							Found {data.length} {getNoun(data.length, "cat", "cats", "cats")}
						</Text>
						{data.map((image, index) => (
							<Image
								style={{
									width: 300,
									height: 300,
								}}
								key={`image-${index}`}
								source={{
									uri: image.url,
								}}
							/>
						))}
					</View>
				)}
			</View>
		</ScrollView>
	);
};
