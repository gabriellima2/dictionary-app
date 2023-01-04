import { useEffect, useState } from "react";
import { asyncStorage } from "../../../utils/async-storage";

type RecentSearches = null | string[];

interface Return {
	recentSearches: RecentSearches;
	removeWordSearched: (position: number) => void;
	saveWordSearched: (word: string) => void;
}

const KEY_ASYNC_STORAGE = "recent-searches";

export function useRecentSearches(): Return {
	const [recentSearches, setRecentSearches] = useState<RecentSearches>(null);

	const removeWordSearched = (position: number) => {
		if (!recentSearches) return;
		if (recentSearches.length === 1) return setRecentSearches(null);

		const recentSearchesCopy = [...recentSearches];
		recentSearchesCopy.splice(position, 1);

		setRecentSearches(recentSearchesCopy);
	};

	const saveWordSearched = (word: string) => {
		if (!recentSearches) return setRecentSearches([word]);

		const recentSearchesUpdated = recentSearches.filter(
			(wordAlreadySearched) => {
				if (wordAlreadySearched !== word) return word;
			}
		);

		recentSearchesUpdated.unshift(word);
		setRecentSearches(recentSearchesUpdated);
	};

	const saveRecentSearchesOnStorage = async () => {
		await asyncStorage.set(KEY_ASYNC_STORAGE, recentSearches);
	};

	const getRecentSearchesFromStorage = async () => {
		const recentSearchesSaved = await asyncStorage.get<RecentSearches>(
			KEY_ASYNC_STORAGE
		);
		if (recentSearchesSaved) return setRecentSearches(recentSearchesSaved);
	};

	useEffect(() => {
		(async () => await saveRecentSearchesOnStorage())();
	}, [recentSearches]);

	useEffect(() => {
		(async () => await getRecentSearchesFromStorage())();
	}, []);

	return {
		recentSearches,
		removeWordSearched,
		saveWordSearched,
	};
}
