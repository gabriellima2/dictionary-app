import { StackNavigationOptions } from "@react-navigation/stack";
import { themes } from "../../styles/theme";

export const styles: StackNavigationOptions = {
	headerTitleStyle: {
		fontFamily: "MerriweatherBold",
		color: themes.fontColor,
		fontSize: 18,
	},
	headerStyle: { backgroundColor: themes.backgroundColor },
};
