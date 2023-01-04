import { API_URL } from "../constants/API_URL";
import type { Dictionary } from "../interfaces/Dictionary";

export const dictionaryServices = {
	get: async (word: string) => {
		try {
			const response = await fetch(`${API_URL}/${word.toLowerCase().trim()}`);
			const data: Dictionary = await response.json();
			return data;
		} catch (err) {
			return null;
		}
	},
};
