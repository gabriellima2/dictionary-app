import { StyleSheet, View } from "react-native";

import { AudioButton, AudioButtonProps } from "./components";
import { Title } from "../Text";

interface PhoneticProps extends AudioButtonProps {
	word: string;
}

export const Phonetic = ({ word, audioUrl }: PhoneticProps) => (
	<View style={styles.container}>
		<Title style={styles.word}>{word}</Title>
		{audioUrl && <AudioButton audioUrl={audioUrl} />}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	word: {
		fontSize: 32,
		textTransform: "capitalize",
	},
});
