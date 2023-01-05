import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "../../../hooks/useNavigation";

import { Paragraph } from "../../Text";
import { Link } from "../../Link";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { themes } from "../../../styles/theme";

interface WordAlreadySearchedProps {
	word: string;
	removeFromRecentSearches: () => void;
}

export const WordAlreadySearched = (props: WordAlreadySearchedProps) => {
	const { navigate } = useNavigation();

	const handlePress = (word: string) => {
		navigate("Result", { word });
	};

	return (
		<Link onPress={() => handlePress(props.word)} style={styles.container}>
			<Paragraph weight="medium">{capitalizeFirstLetter(props.word)}</Paragraph>

			<TouchableOpacity onPress={props.removeFromRecentSearches}>
				<Ionicons name="md-close-outline" size={20} color={themes.fontColor} />
			</TouchableOpacity>
		</Link>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		padding: 4,
		marginTop: 8,
	},
});
