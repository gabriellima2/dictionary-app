import { StackNavigationOptions } from "@react-navigation/stack";
import { themes } from "../../styles/theme";

export const styles: StackNavigationOptions = {
	headerTitleStyle: {
		fontFamily: "MerriweatherBold",
		color: themes.fontColor,
		fontSize: 18,
	},
	headerTintColor: themes.fontColor,
	headerStyle: {
		backgroundColor: themes.backgroundColor,
		shadowColor: "transparent",
	},
};
