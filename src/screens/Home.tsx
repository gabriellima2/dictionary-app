import { useNavigation } from "../hooks/useNavigation";

import { SearchBar } from "../components/SearchBar";
import { Default } from "../layouts/Default";

export const Home = () => {
	const { navigate } = useNavigation();

	const handleSearch = (word: string) => {
		navigate("Result", { word: word.toLowerCase() });
	};

	return (
		<Default>
			<SearchBar onSearch={handleSearch} />
		</Default>
	);
};
