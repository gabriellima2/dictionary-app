import { View, ViewProps, StyleSheet } from "react-native";

export const Center = (props: ViewProps) => (
	<View {...props} style={[styles.container, props.style]} />
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
