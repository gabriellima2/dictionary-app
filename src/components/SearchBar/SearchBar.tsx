import { useState } from "react";
import { View } from "react-native";

import { useRecentSearches } from "./hooks/useRecentSearches";

import { RecentSearches } from "./components";
import { BaseInput } from "../BaseInput";

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

		setValue("");
		onSearch(formattedValue);
		saveWordSearched(formattedValue);
	};

	return (
		<View>
			<BaseInput
				value={value}
				onChangeText={setValue}
				onSubmitEditing={handleSubmit}
				leftIcon={{ name: "md-search-outline" }}
				placeholder="Type something..."
				returnKeyType="search"
				accessibilityLabel="Search Field"
				accessibilityHint="Will show a screen with the word definition"
				autoCapitalize="none"
				autoFocus
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
