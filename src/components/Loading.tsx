import { Text } from "react-native";
import { themes } from "../styles/theme";
import { Center } from "./Center";

export const Loading = () => (
	<Center>
		<Text style={{ color: themes.fontColor }}>Loading...</Text>
	</Center>
);
