import { useQuery } from "react-query";

import { dictionaryServices } from "../services/dictionary-services";
import type { Dictionary } from "../interfaces/Dictionary";

interface Return {
	data: Dictionary | null;
	isError: boolean;
	error: unknown;
	isLoading: boolean;
	isFetched: boolean;
}

export function useDictionary(word: string): Return {
	const { data, isError, error, isLoading, isFetched } = useQuery<Dictionary[]>(
		"dictionary",
		() => dictionaryServices.get(word)
	);

	return {
		data: data ? data[0] : null,
		isError,
		error,
		isFetched,
		isLoading,
	};
}