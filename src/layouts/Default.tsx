import {
	NativeModules,
	Platform,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";

import { themes } from "../styles/theme";
import type { Children } from "../@types/Children";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT =
	Platform.OS === "android" ? StatusBarManager.HEIGHT : 0;

export const Default = ({ children }: Children) => (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.container}>{children}</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		paddingHorizontal: 8,
		backgroundColor: themes.backgroundColor,
	},
	container: {
		flex: 1,
		paddingTop: STATUSBAR_HEIGHT,
		paddingHorizontal: 8,
		backgroundColor: themes.backgroundColor,
	},
});
