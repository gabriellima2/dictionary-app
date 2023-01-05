import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { themes } from "../styles/theme";

export const BaseButton = (props: TouchableOpacityProps) => (
	<TouchableOpacity {...props} style={[styles.button, props.style]} />
);

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 8,
		backgroundColor: themes.utilColor,
	},
});
