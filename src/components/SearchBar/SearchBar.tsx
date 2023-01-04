import { useState } from "react";
import { View } from "react-native";

import { useRecentSearches } from "./hooks/useRecentSearches";

import { RecentSearches } from "./components";
import { Input } from "../Input";

interface SearchBarProp {
	onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProp) => {
	const [value, setValue] = useState("");
	const { recentSearches, saveWordSearched, removeWordSearched } =
		useRecentSearches();

	const handleSubmit = () => {
		const formattedValue = value.trim();

		if (!formattedValue) return;

		onSearch(formattedValue);
		saveWordSearched(formattedValue);
	};

	return (
		<View>
			<Input
				value={value}
				onChangeText={setValue}
				onSubmitEditing={handleSubmit}
				leftIcon={{ name: "md-search-outline" }}
				placeholder="Digite a palavra..."
				returnKeyType="search"
				accessibilityLabel="Campo de busca"
				accessibilityHint="Mostrará uma tela com o resultado"
				autoCapitalize="none"
			/>
			{recentSearches && (
				<RecentSearches
					recentSearches={recentSearches}
					removeFromRecentSearches={removeWordSearched}
				/>
			)}
		</View>
	);
};
