import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { Synonym } from "./Synonym";

import type { Synonyms as ISynonyms } from "../../../interfaces/Synonyms";

interface SynonymsProps {
	synonyms: ISynonyms;
}

export const Synonyms = ({ synonyms }: SynonymsProps) => {
	const repeatedSynonymsRemoved = [...new Set(synonyms)];

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<string>) => <Synonym word={item} />,
		[]
	);

	const keyExtractor = useCallback((item: string) => item, []);

	return (
		<View style={styles.synonyms}>
			<FlatList
				data={repeatedSynonymsRemoved}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	synonyms: {
		marginTop: 24,
	},
});
