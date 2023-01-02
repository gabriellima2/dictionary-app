import { SafeAreaView, StyleSheet, View } from "react-native";

import { themes } from "../styles/theme";
import type { Children } from "../@types/Children";

export const Default = ({ children }: Children) => (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.container}>{children}</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		paddingTop: 28,
		paddingHorizontal: 16,
		backgroundColor: themes.backgroundColor,
	},
});
