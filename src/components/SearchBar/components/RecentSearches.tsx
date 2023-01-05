import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Title } from "../../Text";

import { WordAlreadySearched } from "./WordAlreadySearched";

interface RecentSearchesProps {
	recentSearches: string[];
	removeFromRecentSearches: (position: number) => void;
}

export const RecentSearches = (props: RecentSearchesProps) => {
	const renderItem = ({ item, index }: ListRenderItemInfo<string>) => (
		<WordAlreadySearched
			word={item}
			removeFromRecentSearches={() => props.removeFromRecentSearches(index)}
		/>
	);

	const keyExtractor = useCallback((word: string) => word, []);

	return (
		<View style={styles.container}>
			<Title style={styles.title}>Latest searches</Title>
			<FlatList<string>
				data={props.recentSearches}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingHorizontal: 12,
	},
	title: {
		fontSize: 12,
	},
});
