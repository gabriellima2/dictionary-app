import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { themes } from "../styles/theme";

interface InputProps extends TextInputProps {
	leftIcon?: {
		name: keyof typeof Ionicons.glyphMap;
		size?: number;
		color?: string;
	};
}

export const Input = ({ leftIcon, ...props }: InputProps) => (
	<View style={styles.container}>
		{leftIcon && (
			<Ionicons
				name={leftIcon.name}
				size={leftIcon.size || 24}
				color={leftIcon.color || themes.fontColor}
				style={[styles.icon, props.style]}
			/>
		)}
		<TextInput {...props} style={[styles.input, props.style]} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",

		padding: 6,
		paddingHorizontal: 12,
		borderRadius: 32,

		backgroundColor: themes.utilColor,
	},
	input: {
		flex: 1,

		fontFamily: "RalewayMedium",
		color: themes.fontColor,
	},
	icon: { marginRight: 6 },
});
