import { View, StyleSheet } from "react-native";

import { Paragraph, Title } from "../../Text";
import { Synonyms } from "./Synonyms";

import type { Meaning as IMeaning } from "../../../interfaces/Meaning";

interface MeaningProps extends Pick<IMeaning, "synonyms"> {
	title: string;
	definition: string;
	example: string;
}

export const Meaning = ({
	title,
	definition,
	example,
	synonyms,
}: MeaningProps) => (
	<View style={styles.container}>
		<View>
			<Title style={styles.title}>{title}</Title>
			<Paragraph>{definition}</Paragraph>
			{example && (
				<Paragraph style={styles.example}>
					{"'"}
					{example}
					{"'"}
				</Paragraph>
			)}
		</View>
		{synonyms.length > 0 && <Synonyms synonyms={synonyms} />}
	</View>
);

const styles = StyleSheet.create({
	container: {
		padding: 4,
		marginVertical: 10,
	},
	title: {
		fontSize: 15,
		textTransform: "capitalize",
		marginBottom: 6,
	},
	example: {
		fontStyle: "italic",
		opacity: 0.8,
		marginTop: 12,
	},
});
