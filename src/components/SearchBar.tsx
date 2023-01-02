import { useState } from "react";
import { Input } from "./Input";

interface SearchBarProp {
	onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProp) => {
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		const valueFormatted = value.trim();

		if (!valueFormatted) return;

		onSearch(valueFormatted);
	};

	return (
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
	);
};