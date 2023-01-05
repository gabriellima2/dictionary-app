import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Meaning } from "./components";
import type { Meaning as IMeaning } from "../../interfaces/Meaning";

interface MeaningsProps {
	meanings: IMeaning[];
	Phonetic: () => JSX.Element;
}

export const Meanings = ({ meanings, Phonetic }: MeaningsProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<IMeaning>) => (
			<Meaning
				title={item.partOfSpeech}
				definition={item.definitions[0].definition}
				example={item.definitions[0].example}
				synonyms={item.synonyms}
			/>
		),
		[]
	);

	const keyExtractor = useCallback(
		({ partOfSpeech }: IMeaning) =>
			(Math.random() + partOfSpeech.length).toString(),
		[]
	);

	return (
		<FlatList<IMeaning>
			data={meanings}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			ListHeaderComponent={<Phonetic />}
		/>
	);
};
