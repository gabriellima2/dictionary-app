import { StyleSheet } from "react-native";

import { useNavigation } from "../../../hooks/useNavigation";

import { Paragraph } from "../../Text";
import { Link } from "../../Link";

import { themes } from "../../../styles/theme";

interface SynonymProps {
	word: string;
}

export const Synonym = ({ word }: SynonymProps) => {
	const { navigate } = useNavigation();

	const handlePress = () => {
		navigate("Result", { word });
	};

	return (
		<Link style={styles.synonym} onPress={handlePress}>
			<Paragraph>{word}</Paragraph>
		</Link>
	);
};

const styles = StyleSheet.create({
	synonym: {
		borderColor: "#ffffff5a",
		borderRadius: 12,
		borderWidth: 1,
		padding: 6,
		paddingHorizontal: 12,
		marginRight: 6,
		backgroundColor: themes.utilColor,
	},
});
